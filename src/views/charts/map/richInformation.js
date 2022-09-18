import React, {useMemo, useState} from 'react';
import {
  View,
  Dimensions,
  ActivityIndicator,
  StyleSheet,
  Alert,
} from 'react-native';
import WebView from 'react-native-webview';

const {width: chartWidth} = Dimensions.get('window');

export const AreaRange = () => {
  const onMessage = data => {
    Alert.alert('Error', data.nativeEvent.data);
  };

  const [isLoading, setIsLoading] = useState(true);

  const html = useMemo(
    () => `
      <!DOCTYPE html>
      <html>
        <head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script src="https://code.highcharts.com/maps/modules/map.js"></script>
        <script src="https://code.highcharts.com/maps/modules/accessibility.js"></script>
        
        <!-- Flag sprites service provided by Martijn Lafeber, https://github.com/lafeber/world-flags-sprite/blob/master/LICENSE -->
        <link rel="stylesheet" type="text/css" href="//github.com/downloads/lafeber/world-flags-sprite/flags32.css" />
        
        
        <div id="wrapper">
            <div id="container"></div>
            <div id="info">
                <span class="f32"><span id="flag"></span></span>
                <h2></h2>
                <div class="subheader">Click countries to view history</div>
                <div id="country-chart"></div>
            </div>
        </div>
        
        <style>
        * {
          margin: 0;
          padding: 0;
          font-family: sans-serif;
          box-sizing: border-box;
        }
        #container {
          width: 100%;
          height: 90vh;
        },
        </style>
      
        
    <script>
    (async () => {

        const topology = await fetch(
            'https://code.highcharts.com/mapdata/custom/world.topo.json'
        ).then(response => response.json());
    
        const csv = await fetch(
            'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-population-history.csv'
        ).then(response => response.text());
    
        // Very simple and case-specific CSV string splitting
        const CSVtoArray = text => text.replace(/^"/, '')
            .replace(/",$/, '')
            .split('","');
    
        const csvArr = csv.split(/\n/),
            countries = {},
            numRegex = /^[0-9\.]+$/,
            lastCommaRegex = /,\s$/,
            quoteRegex = /\"/g,
            categories = CSVtoArray(csvArr[2]).slice(4);
    
        let countryChart;
    
        // Parse the CSV into arrays, one array each country
        csvArr.slice(3).forEach(function (line) {
            var row = CSVtoArray(line),
                data = row.slice(4);
    
            data.forEach(function (val, i) {
                val = val.replace(quoteRegex, '');
                if (numRegex.test(val)) {
                    val = parseInt(val, 10);
                } else if (!val || lastCommaRegex.test(val)) {
                    val = null;
                }
                data[i] = val;
            });
    
            countries[row[1]] = {
                name: row[0],
                code3: row[1],
                data: data
            };
        });
    
        // For each country, use the latest value for current population
        const data = [];
        for (const code3 in countries) {
            if (Object.hasOwnProperty.call(countries, code3)) {
                const itemData = countries[code3].data;
                let value = null,
                    i = itemData.length,
                    year;
    
                while (i--) {
                    if (typeof itemData[i] === 'number') {
                        value = itemData[i];
                        year = categories[i];
                        break;
                    }
                }
                data.push({
                    name: countries[code3].name,
                    code3: code3,
                    value: value,
                    year: year
                });
            }
        }
    
        // Add lower case codes to the data set for inclusion in the tooltip.pointFormat
        const mapData = Highcharts.geojson(topology);
        mapData.forEach(function (country) {
            country.id = country.properties['hc-key']; // for Chart.get()
            country.flag = country.id.replace('UK', 'GB').toLowerCase();
        });
    
        // Wrap point.select to get to the total selected points
        Highcharts.wrap(Highcharts.Point.prototype, 'select', function (proceed) {
    
            proceed.apply(this, Array.prototype.slice.call(arguments, 1));
    
            const points = mapChart.getSelectedPoints();
            if (points.length) {
                if (points.length === 1) {
                    document.querySelector('#info #flag')
                        .className = 'flag ' + points[0].flag;
                    document.querySelector('#info h2').innerHTML = points[0].name;
                } else {
                    document.querySelector('#info #flag')
                        .className = 'flag';
                    document.querySelector('#info h2').innerHTML = 'Comparing countries';
    
                }
                document.querySelector('#info .subheader')
                    .innerHTML = '<h4>Historical population</h4><small><em>Shift + Click on map to compare countries</em></small>';
    
                if (!countryChart) {
                    countryChart = Highcharts.chart('country-chart', {
                        chart: {
                            height: 250,
                            spacingLeft: 0
                        },
                        credits: {
                            enabled: false
                        },
                        title: {
                            text: null
                        },
                        subtitle: {
                            text: null
                        },
                        xAxis: {
                            tickPixelInterval: 50,
                            crosshair: true
                        },
                        yAxis: {
                            title: null,
                            opposite: true
                        },
                        tooltip: {
                            split: true
                        },
                        plotOptions: {
                            series: {
                                animation: {
                                    duration: 500
                                },
                                marker: {
                                    enabled: false
                                },
                                threshold: 0,
                                pointStart: parseInt(categories[0], 10)
                            }
                        }
                    });
                }
    
                countryChart.series.slice(0).forEach(function (s) {
                    s.remove(false);
                });
                points.forEach(function (p) {
                    countryChart.addSeries({
                        name: p.name,
                        data: countries[p.code3].data,
                        type: points.length > 1 ? 'line' : 'area'
                    }, false);
                });
                countryChart.redraw();
    
            } else {
                document.querySelector('#info #flag').className = '';
                document.querySelector('#info h2').innerHTML = '';
                document.querySelector('#info .subheader').innerHTML = '';
                if (countryChart) {
                    countryChart = countryChart.destroy();
                }
            }
        });
    
        // Initiate the map chart
        const mapChart = Highcharts.mapChart('container', {
    
            chart: {
                map: topology
            },
    
            title: {
                text: 'Population history by country'
            },
    
            subtitle: {
                text: 'Source: <a href="http://data.worldbank.org/indicator/SP.POP.TOTL/countries/1W?display=default">The World Bank</a>'
            },
    
            mapNavigation: {
                enabled: true,
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
            },
    
            colorAxis: {
                type: 'logarithmic',
                endOnTick: false,
                startOnTick: false,
                min: 50000
            },
    
            tooltip: {
                footerFormat: '<span style="font-size: 10px">(Click for details)</span>'
            },
    
            series: [{
                data: data,
                mapData: mapData,
                joinBy: ['iso-a3', 'code3'],
                name: 'Current population',
                allowPointSelect: true,
                cursor: 'pointer',
                states: {
                    select: {
                        color: '#a4edba',
                        borderColor: 'black',
                        dashStyle: 'shortdot'
                    }
                },
                borderWidth: 0.5
            }]
        });
    
        // Pre-select a country
        mapChart.get('us').select();
    
    })();
      </script>
    </html>
    `,
    [],
  );

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <WebView
        style={{backgroundColor: 'transparent', width: chartWidth}}
        scrollEnabled={false}
        onMessage={onMessage}
        onLoadEnd={() => setIsLoading(false)}
        source={{html}}
      />
      {isLoading && (
        <View
          style={{
            ...StyleSheet.absoluteFillObject,
            paddingTop: 100,
          }}>
          <ActivityIndicator size={100} color="#866cff" />
        </View>
      )}
    </View>
  );
};

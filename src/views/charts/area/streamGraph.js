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

export const StreamGraph = () => {
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
        <script src="https://code.highcharts.com/modules/streamgraph.js"></script>
        <script src="https://code.highcharts.com/modules/series-label.js"></script>
        <script src="https://code.highcharts.com/modules/annotations.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
        </figure>
        
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
    var colors = Highcharts.getOptions().colors;
    Highcharts.chart('container', {
    
        chart: {
            type: 'streamgraph',
            marginBottom: 30,
            zoomType: 'x'
        },
    
        // Make sure connected countries have similar colors
        colors: [
            colors[0],
            colors[1],
            colors[2],
            colors[3],
            colors[4],
            // East Germany, West Germany and Germany
            Highcharts.color(colors[5]).brighten(0.2).get(),
            Highcharts.color(colors[5]).brighten(0.1).get(),
    
            colors[5],
            colors[6],
            colors[7],
            colors[8],
            colors[9],
            colors[0],
            colors[1],
            colors[3],
            // Soviet Union, Russia
            Highcharts.color(colors[2]).brighten(-0.1).get(),
            Highcharts.color(colors[2]).brighten(-0.2).get(),
            Highcharts.color(colors[2]).brighten(-0.3).get()
        ],
    
        title: {
            floating: true,
            align: 'left',
            text: 'Winter Olympic Medal Wins'
        },
        subtitle: {
            floating: true,
            align: 'left',
            y: 30,
            text: 'Source: <a href="https://www.sports-reference.com/olympics/winter/1924/">sports-reference.com</a>'
        },
    
        xAxis: {
            maxPadding: 0,
            type: 'category',
            crosshair: true,
            categories: [
                '',
                '1924 Chamonix',
                '1928 St. Moritz',
                '1932 Lake Placid',
                '1936 Garmisch-Partenkirchen',
                '1940 <i>Cancelled (Sapporo)</i>',
                '1944 <i>Cancelled (Cortina d\'Ampezzo)</i>',
                '1948 St. Moritz',
                '1952 Oslo',
                '1956 Cortina d\'Ampezzo',
                '1960 Squaw Valley',
                '1964 Innsbruck',
                '1968 Grenoble',
                '1972 Sapporo',
                '1976 Innsbruck',
                '1980 Lake Placid',
                '1984 Sarajevo',
                '1988 Calgary',
                '1992 Albertville',
                '1994 Lillehammer',
                '1998 Nagano',
                '2002 Salt Lake City',
                '2006 Turin',
                '2010 Vancouver',
                '2014 Sochi'
            ],
            labels: {
                align: 'left',
                reserveSpace: false,
                rotation: 270
            },
            lineWidth: 0,
            margin: 20,
            tickWidth: 0
        },
    
        yAxis: {
            visible: false,
            startOnTick: false,
            endOnTick: false
        },
    
        legend: {
            enabled: false
        },
    
        annotations: [{
            labels: [{
                point: {
                    x: 5.5,
                    xAxis: 0,
                    y: 30,
                    yAxis: 0
                },
                text: 'Cancelled<br>during<br>World War II'
            }, {
                point: {
                    x: 18,
                    xAxis: 0,
                    y: 90,
                    yAxis: 0
                },
                text: 'Soviet Union fell,<br>Germany united'
            }],
            labelOptions: {
                backgroundColor: 'rgba(255,255,255,0.5)',
                borderColor: 'silver'
            }
        }],
    
        plotOptions: {
            series: {
                label: {
                    minFontSize: 5,
                    maxFontSize: 15,
                    style: {
                        color: 'rgba(255,255,255,0.75)'
                    }
                },
                accessibility: {
                    exposeAsGroupOnly: true
                }
            }
        },
    
        // Data parsed with olympic-medals.node.js
        series: [{
            name: "Finland",
            data: [
                0, 11, 4, 3, 6, 0, 0, 6, 9, 7, 8, 10, 5, 5, 7, 9, 13, 7,
                7, 6, 12, 7, 9, 5, 5
            ]
        }, {
            name: "Austria",
            data: [
                0, 3, 4, 2, 4, 0, 0, 8, 8, 11, 6, 12, 11, 5, 6, 7, 1, 10,
                21, 9, 17, 17, 23, 16, 17
            ]
        }, {
            name: "Sweden",
            data: [
                0, 2, 5, 3, 7, 0, 0, 10, 4, 10, 7, 7, 8, 4, 2, 4, 8, 6, 4,
                3, 3, 7, 14, 11, 15
            ]
        }, {
            name: "Norway",
            data: [
                0, 17, 15, 10, 15, 0, 0, 10, 16, 4, 6, 15, 14, 12, 7, 10,
                9, 5, 20, 26, 25, 25, 19, 23, 26
            ]
        }, {
            name: "U.S.",
            data: [
                0, 4, 6, 12, 4, 0, 0, 9, 11, 7, 10, 7, 7, 8, 10, 12, 8, 6,
                11, 13, 13, 34, 25, 37, 28
            ]
        }, {
            name: "East Germany",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 14, 19, 23, 24, 25,
                0, 0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "West Germany",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 5, 10, 5, 4, 8, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Germany",
            data: [
                0, 0, 1, 2, 6, 0, 0, 0, 7, 2, 8, 9, 0, 0, 0, 0, 0, 0, 26,
                24, 29, 36, 29, 30, 19
            ]
        }, {
            name: "Netherlands",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 2, 2, 9, 9, 6, 4, 0, 7, 4,
                4, 11, 8, 9, 8, 24
            ]
        }, {
            name: "Italy",
            data: [
                0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 1, 4, 4, 5, 4, 2, 2, 5, 14,
                20, 10, 13, 11, 5, 8
            ]
        }, {
            name: "Canada",
            data: [
                0, 1, 1, 7, 1, 0, 0, 3, 2, 3, 4, 3, 3, 1, 3, 2, 4, 5, 7,
                13, 15, 17, 24, 26, 25
            ]
        }, {
            name: "Switzerland",
            data: [
                0, 3, 1, 1, 3, 0, 0, 10, 2, 6, 2, 0, 6, 10, 5, 5, 5, 15,
                3, 9, 7, 11, 14, 9, 11
            ]
        }, {
            name: "Great Britain",
            data: [
                0, 4, 1, 0, 3, 0, 0, 2, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0,
                2, 1, 2, 1, 1, 4
            ]
        }, {
            name: "France",
            data: [
                0, 3, 1, 1, 1, 0, 0, 5, 1, 0, 3, 7, 9, 3, 1, 1, 3, 2, 9,
                5, 8, 11, 9, 11, 15
            ]
        }, {
            name: "Hungary",
            data: [
                0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Unified Team",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Soviet Union",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 16, 21, 25, 13, 16, 27, 22, 25,
                29, 0, 0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Russia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                23, 18, 13, 22, 15, 33
            ]
        }, {
            name: "Japan",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 1, 1, 1, 7,
                5, 10, 2, 1, 5, 8
            ]
        }, {
            name: "Czechoslovakia",
            data: [
                0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 4, 3, 1, 1, 6, 3, 3,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Poland",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 1, 0, 0, 0, 0, 0,
                0, 0, 2, 2, 6, 6
            ]
        }, {
            name: "Spain",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "China",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,
                3, 8, 8, 11, 11, 9
            ]
        }, {
            name: "South Korea",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4,
                6, 6, 4, 11, 14, 8
            ]
        }, {
            name: "Czech Republic",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 3, 3, 4, 6, 8
            ]
        }, {
            name: "Belarus",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                2, 2, 1, 1, 3, 6
            ]
        }, {
            name: "Kazakhstan",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                3, 2, 0, 0, 1, 1
            ]
        }, {
            name: "Bulgaria",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                0, 1, 3, 1, 0, 0
            ]
        }, {
            name: "Denmark",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0
            ]
        }, {
            name: "Ukraine",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                2, 1, 0, 2, 0, 2
            ]
        }, {
            name: "Australia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 1, 2, 2, 3, 3
            ]
        }, {
            name: "Belgium",
            data: [
                0, 1, 1, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0
            ]
        }, {
            name: "Romania",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Liechtenstein",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 2, 1, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Yugoslavia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Luxembourg",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "New Zealand",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "North Korea",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1,
                0, 0, 0, 0, 0, 0
            ]
        }, {
            name: "Slovakia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 3, 1
            ]
        }, {
            name: "Croatia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 4, 3, 3, 1
            ]
        }, {
            name: "Slovenia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                3, 0, 1, 0, 3, 8
            ]
        }, {
            name: "Latvia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 0, 1, 2, 4
            ]
        }, {
            name: "Estonia",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                0, 0, 3, 3, 1, 0
            ]
        }, {
            name: "Uzbekistan",
            data: [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0, 0, 0
            ]
        }],
    
        exporting: {
            sourceWidth: 800,
            sourceHeight: 600
        }
    
    });
    
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
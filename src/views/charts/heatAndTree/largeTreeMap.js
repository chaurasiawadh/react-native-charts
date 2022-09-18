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

export const LargeTreeMap = () => {
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
        <script src="https://code.highcharts.com/modules/data.js"></script>
        <script src="https://code.highcharts.com/modules/heatmap.js"></script>
        <script src="https://code.highcharts.com/modules/treemap.js"></script>
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
      
        
    <script>
    Highcharts.getJSON('https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/world-mortality.json', function (data) {

        var points = [],
            regionP,
            regionVal,
            regionI = 0,
            countryP,
            countryI,
            causeP,
            causeI,
            region,
            country,
            cause,
            causeName = {
                'Communicable & other Group I': 'Communicable diseases',
                'Noncommunicable diseases': 'Non-communicable diseases',
                Injuries: 'Injuries'
            };
    
        for (region in data) {
            if (Object.hasOwnProperty.call(data, region)) {
                regionVal = 0;
                regionP = {
                    id: 'id_' + regionI,
                    name: region,
                    color: Highcharts.getOptions().colors[regionI]
                };
                countryI = 0;
                for (country in data[region]) {
                    if (Object.hasOwnProperty.call(data[region], country)) {
                        countryP = {
                            id: regionP.id + '_' + countryI,
                            name: country,
                            parent: regionP.id
                        };
                        points.push(countryP);
                        causeI = 0;
                        for (cause in data[region][country]) {
                            if (Object.hasOwnProperty.call(
                                data[region][country], cause
                            )) {
                                causeP = {
                                    id: countryP.id + '_' + causeI,
                                    name: causeName[cause],
                                    parent: countryP.id,
                                    value: Math.round(+data[region][country][cause])
                                };
                                regionVal += causeP.value;
                                points.push(causeP);
                                causeI = causeI + 1;
                            }
                        }
                        countryI = countryI + 1;
                    }
                }
                regionP.value = Math.round(regionVal / countryI);
                points.push(regionP);
                regionI = regionI + 1;
            }
        }
        Highcharts.chart('container', {
          credits: {
            enabled: false,
          },
            series: [{
                name: 'Regions',
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                allowDrillToNode: true,
                animationLimit: 1000,
                dataLabels: {
                    enabled: false
                },
                levels: [{
                    level: 1,
                    dataLabels: {
                        enabled: true
                    },
                    borderWidth: 3,
                    levelIsConstant: false
                }, {
                    level: 1,
                    dataLabels: {
                        style: {
                            fontSize: '14px'
                        }
                    }
                }],
                accessibility: {
                    exposeAsGroupOnly: true
                },
                data: points
            }],
            title: {
                text: 'Global Mortality Rate, per 100 000 population'
            }
        });
    
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

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

export const DepthChart = () => {
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
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <div id="container"></div>
        
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
    Highcharts.chart('container', {
        chart: {
            type: 'area',
            zoomType: 'xy'
        },
        title: {
            text: 'ETH-BTC Market Depth'
        },
        xAxis: {
            minPadding: 0,
            maxPadding: 0,
            plotLines: [{
                color: '#888',
                value: 0.1523,
                width: 1,
                label: {
                    text: 'Actual price',
                    rotation: 90
                }
            }],
            title: {
                text: 'Price'
            }
        },
        yAxis: [{
            lineWidth: 1,
            gridLineWidth: 1,
            title: null,
            tickWidth: 1,
            tickLength: 5,
            tickPosition: 'inside',
            labels: {
                align: 'left',
                x: 8
            }
        }, {
            opposite: true,
            linkedTo: 0,
            lineWidth: 1,
            gridLineWidth: 0,
            title: null,
            tickWidth: 1,
            tickLength: 5,
            tickPosition: 'inside',
            labels: {
                align: 'right',
                x: -8
            }
        }],
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillOpacity: 0.2,
                lineWidth: 1,
                step: 'center'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
            valueDecimals: 2
        },
        series: [{
            name: 'Bids',
            data: [
                [
                    0.1524,
                    0.948665
                ],
                [
                    0.1539,
                    35.510715
                ],
                [
                    0.154,
                    39.883437
                ],
                [
                    0.1541,
                    40.499661
                ],
                [
                    0.1545,
                    43.262994000000006
                ],
                [
                    0.1547,
                    60.14799400000001
                ],
                [
                    0.1553,
                    60.30799400000001
                ],
                [
                    0.1558,
                    60.55018100000001
                ],
                [
                    0.1564,
                    68.381696
                ],
                [
                    0.1567,
                    69.46518400000001
                ],
                [
                    0.1569,
                    69.621464
                ],
                [
                    0.157,
                    70.398015
                ],
                [
                    0.1574,
                    70.400197
                ],
                [
                    0.1575,
                    73.199217
                ],
                [
                    0.158,
                    77.700017
                ],
                [
                    0.1583,
                    79.449017
                ],
                [
                    0.1588,
                    79.584064
                ],
                [
                    0.159,
                    80.584064
                ],
                [
                    0.16,
                    81.58156
                ],
                [
                    0.1608,
                    83.38156
                ]
            ],
            color: '#03a7a8'
        }, {
            name: 'Asks',
            data: [
                [
                    0.1435,
                    242.521842
                ],
                [
                    0.1436,
                    206.49862099999999
                ],
                [
                    0.1437,
                    205.823735
                ],
                [
                    0.1438,
                    197.33275
                ],
                [
                    0.1439,
                    153.677454
                ],
                [
                    0.144,
                    146.007722
                ],
                [
                    0.1442,
                    82.55212900000001
                ],
                [
                    0.1443,
                    59.152814000000006
                ],
                [
                    0.1444,
                    57.942260000000005
                ],
                [
                    0.1445,
                    57.483850000000004
                ],
                [
                    0.1446,
                    52.39210800000001
                ],
                [
                    0.1447,
                    51.867208000000005
                ],
                [
                    0.1448,
                    44.104697
                ],
                [
                    0.1449,
                    40.131217
                ],
                [
                    0.145,
                    31.878217
                ],
                [
                    0.1451,
                    22.794916999999998
                ],
                [
                    0.1453,
                    12.345828999999998
                ],
                [
                    0.1454,
                    10.035642
                ],
                [
                    0.148,
                    9.326642
                ],
                [
                    0.1522,
                    3.76317
                ]
            ],
            color: '#fc5857'
        }]
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

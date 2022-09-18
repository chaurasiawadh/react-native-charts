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

export const UVMeter = () => {
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
<script src="https://code.highcharts.com/highcharts-more.js"></script>
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
      
        
    <script>
    Highcharts.chart('container', {
        credits: {
            enabled: false,
          },
        chart: {
            type: 'gauge',
            plotBorderWidth: 1,
            plotBackgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            height: 200
        },
    
        title: {
            text: 'VU meter'
        },
    
        pane: [{
            startAngle: -45,
            endAngle: 45,
            background: null,
            center: ['25%', '145%'],
            size: 300
        }, {
            startAngle: -45,
            endAngle: 45,
            background: null,
            center: ['75%', '145%'],
            size: 300
        }],
    
        exporting: {
            enabled: false
        },
    
        tooltip: {
            enabled: false
        },
    
        yAxis: [{
            min: -20,
            max: 6,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0,
                to: 6,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 0,
            title: {
                text: 'VU<br/><span style="font-size:8px">Channel A</span>',
                y: -40
            }
        }, {
            min: -20,
            max: 6,
            minorTickPosition: 'outside',
            tickPosition: 'outside',
            labels: {
                rotation: 'auto',
                distance: 20
            },
            plotBands: [{
                from: 0,
                to: 6,
                color: '#C02316',
                innerRadius: '100%',
                outerRadius: '105%'
            }],
            pane: 1,
            title: {
                text: 'VU<br/><span style="font-size:8px">Channel B</span>',
                y: -40
            }
        }],
    
        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '100%'
                }
            }
        },
    
        series: [{
            name: 'Channel A',
            data: [-20],
            yAxis: 0
        }, {
            name: 'Channel B',
            data: [-20],
            yAxis: 1
        }]
    
    },
    
    // Let the music play
    function (chart) {
        setInterval(function () {
            if (chart.series) { // the chart may be destroyed
                var left = chart.series[0].points[0],
                    right = chart.series[1].points[0],
                    leftVal,
                    rightVal,
                    inc = (Math.random() - 0.5) * 3;
    
                leftVal = left.y + inc;
                rightVal = leftVal + inc / 3;
                if (leftVal < -20 || leftVal > 6) {
                    leftVal = left.y - inc;
                }
                if (rightVal < -20 || rightVal > 6) {
                    rightVal = leftVal;
                }
    
                left.update(leftVal, false);
                right.update(rightVal, false);
                chart.redraw();
            }
        }, 500);
    
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

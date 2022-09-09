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

export const TreeWithColor = () => {
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
        colorAxis: {
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },
        series: [{
            type: 'treemap',
            layoutAlgorithm: 'squarified',
            data: [{
                name: 'A',
                value: 6,
                colorValue: 1
            }, {
                name: 'B',
                value: 6,
                colorValue: 2
            }, {
                name: 'C',
                value: 4,
                colorValue: 3
            }, {
                name: 'D',
                value: 3,
                colorValue: 4
            }, {
                name: 'E',
                value: 2,
                colorValue: 5
            }, {
                name: 'F',
                value: 2,
                colorValue: 6
            }, {
                name: 'G',
                value: 1,
                colorValue: 7
            }]
        }],
        title: {
            text: 'Tree Map'
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

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

export const PercentageArea = () => {
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
        <script src="https://code.highcharts.com/modules/series-label.js"></script>
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
    Highcharts.chart('container', {
      credits: {
        enabled: false,
      },
      chart: {
          type: 'area'
      },
      title: {
          useHTML: true,
          text: 'Countries/regions with highest Gt CO<sub>2</sub>-emissions'
      },
      accessibility: {
          point: {
              valueDescriptionFormat: '{index}. {point.category}, {point.y:,.1f} billions, {point.percentage:.1f}%.'
          }
      },
      yAxis: {
          labels: {
              format: '{value}%'
          },
          title: {
              enabled: false
          }
      },
      tooltip: {
          pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.1f} billion Gt)<br/>',
          split: true
      },
      plotOptions: {
          series: {
              pointStart: 1990
          },
          area: {
              stacking: 'percent',
              marker: {
                  enabled: false
              }
          }
      },
      series: [{
          name: 'China',
          data: [2.5, 2.6, 2.7, 2.9, 3.1, 3.4, 3.5, 3.5, 3.4, 3.4, 3.4,
              3.5, 3.9, 4.5, 5.2, 5.9, 6.5, 7, 7.5, 7.9, 8.6, 9.5, 9.8,
              10, 10, 9.8, 9.7, 9.9, 10.3, 10.5, 10.7, 10.9
          ]
      }, {
          name: 'USA',
          data: [5.1, 5.1, 5.2, 5.3, 5.4, 5.4, 5.6, 5.7, 5.7, 5.8, 6, 5.9,
              5.9, 6, 6.1, 6.1, 6.1, 6.1, 5.9, 5.5, 5.7, 5.5, 5.3, 5.5,
              5.5, 5.4, 5.2, 5.2, 5.4, 5.3, 4.7, 5
          ]
      }, {
          name: 'EU',
          data: [3.9, 3.8, 3.7, 3.6, 3.6, 3.6, 3.7, 3.7, 3.6, 3.6, 3.6, 3.7,
              3.7, 3.7, 3.8, 3.7, 3.7, 3.7, 3.6, 3.3, 3.4, 3.3, 3.3, 3.2, 3,
              3.1, 3.1, 3.1, 3, 2.9, 2.6, 2.7]
      }, {
          name: 'India',
          data: [0.6, 0.6, 0.7, 0.7, 0.7, 0.8, 0.8, 0.9, 0.9, 1, 1, 1,
              1, 1.1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2,
              2.2, 2.3, 2.4, 2.4, 2.6, 2.6, 2.4, 2.7]
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

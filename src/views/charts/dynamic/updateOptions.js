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

export const UpdateOptions = () => {
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
        <script src="https://code.highcharts.com/modules/export-data.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
        
            <button id="plain">Plain</button>
            <button id="inverted">Inverted</button>
            <button id="polar">Polar</button>
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
    const chart = Highcharts.chart('container', {
      credits: {
        enabled: false,
      },
      title: {
          text: 'Unemployment rates in engineering , 2021'
      },
      xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      },
      series: [{
          type: 'column',
          name: 'Unemployed',
          colorByPoint: true,
          data: [5412, 4977, 4730, 4437, 3947, 3707, 4143, 3609,
              3311, 3072, 2899, 2887],
          showInLegend: false
      }]
  });
  
  document.getElementById('plain').addEventListener('click', () => {
      chart.update({
          chart: {
              inverted: false,
              polar: false
          },
          subtitle: {
              text: 'Chart option: Plain'
          }
      });
  });
  
  document.getElementById('inverted').addEventListener('click', () => {
      chart.update({
          chart: {
              inverted: true,
              polar: false
          },
          subtitle: {
              text: 'Chart option: Inverted'
          }
      });
  });
  
  document.getElementById('polar').addEventListener('click', () => {
      chart.update({
          chart: {
              inverted: false,
              polar: true
          },
          subtitle: {
              text: 'Chart option: Polar'
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

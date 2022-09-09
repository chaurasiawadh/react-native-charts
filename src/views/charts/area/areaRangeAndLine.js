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

export const AreaRangeAndLine = () => {
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
    var ranges = [
      [13.7, 25.6],
      [13.3, 21.8],
      [11.2, 19.9],
      [7.9, 17.3],
      [4.9, 20.6],
      [5.1, 16.8],
      [9.3, 21.1],
      [11.1, 20.5],
      [8.9, 18.4],
      [4.6, 23.2],
      [11.5, 26.0],
      [8.6, 23.4],
      [9.8, 22.2],
      [8.1, 18.2],
      [5.9, 20.2],
      [4.5, 20.2],
      [8.9, 19.8],
      [11.1, 22.1],
      [7.9, 26.7],
      [15.9, 28.6],
      [14.9, 27.5],
      [9.5, 26.0],
      [11.5, 22.4],
      [8.6, 21.1],
      [12.9, 21.7],
      [13.6, 20.9],
      [9.6, 23.9],
      [8.6, 22.7],
      [7.5, 25.7],
      [5.5, 24.3],
      [10.4, 21.2]

  ],
  averages = [
      [18.1],
      [17.1],
      [15.2],
      [12.7],
      [13.3],
      [10.6],
      [15.6],
      [16.1],
      [14.0],
      [15.3],
      [17.5],
      [17.5],
      [15.3],
      [13.9],
      [13.7],
      [13.8],
      [14.0],
      [15.8],
      [18.6],
      [21.5],
      [19.8],
      [17.6],
      [16.8],
      [15.6],
      [16.7],
      [16.3],
      [17.2],
      [16.0],
      [16.9],
      [16.1],
      [14.5]
  ];


Highcharts.chart('container', {
  credits: {
    enabled: false,
  },
  title: {
      text: 'July temperatures in Manali, 2022'
  },
  xAxis: {
      type: 'datetime',
      accessibility: {
          rangeDescription: 'Range: Jul 1st 2022 to Jul 31st 2022.'
      }
  },

  yAxis: {
      title: {
          text: null
      }
  },

  tooltip: {
      crosshairs: true,
      shared: true,
      valueSuffix: '°C'
  },

  plotOptions: {
      series: {
          pointStart: Date.UTC(2022, 6, 1),
          pointIntervalUnit: 'day'
      }
  },

  series: [{
      name: 'Temperature',
      data: averages,
      zIndex: 1,
      marker: {
          fillColor: 'white',
          lineWidth: 2,
          lineColor: Highcharts.getOptions().colors[0]
      }
  }, {
      name: 'Range',
      data: ranges,
      type: 'arearange',
      lineWidth: 0,
      linkedTo: ':previous',
      color: Highcharts.getOptions().colors[0],
      fillOpacity: 0.3,
      zIndex: 0,
      marker: {
          enabled: false
      }
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

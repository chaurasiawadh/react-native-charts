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

export const AddPoint = () => {
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
    Highcharts.chart('container', {
      chart: {
          type: 'scatter',
          margin: [70, 50, 60, 80],
          events: {
              click: function (e) {
                  // find the clicked values and the series
                  var x = Math.round(e.xAxis[0].value),
                      y = Math.round(e.yAxis[0].value),
                      series = this.series[0];
  
                  // Add it
                  series.addPoint([x, y]);
  
              }
          }
      },
      title: {
          text: 'User supplied data'
      },
      subtitle: {
          text: 'Click the plot area to add a point. Click a point to remove it.'
      },
      accessibility: {
          announceNewData: {
              enabled: true
          }
      },
      xAxis: {
          gridLineWidth: 1,
          minPadding: 0.2,
          maxPadding: 0.2,
          maxZoom: 60
      },
      yAxis: {
          title: {
              text: 'Value'
          },
          minPadding: 0.2,
          maxPadding: 0.2,
          maxZoom: 60,
          plotLines: [{
              value: 0,
              width: 1,
              color: '#808080'
          }]
      },
      legend: {
          enabled: false
      },
      exporting: {
          enabled: false
      },
      plotOptions: {
          series: {
              lineWidth: 1,
              point: {
                  events: {
                      click: function () {
                          if (this.series.data.length > 1) {
                              this.remove();
                          }
                      }
                  }
              }
          }
      },
      series: [{
          data: [[20, 20], [80, 80]]
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

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

export const InvertedAxes = () => {
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
    // Data retrieved from https://companiesmarketcap.com/
    Highcharts.chart('container', {
      credits: {
        enabled: false,
      },
        chart: {
            type: 'area',
            inverted: true
        },
        title: {
            text: 'Tata and Reliance revenue'
        },
        accessibility: {
            keyboardNavigation: {
                seriesNavigation: {
                    mode: 'serialize'
                }
            }
        },
        tooltip: {
            pointFormat: '&#8226; {series.name}'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -150,
            y: 100,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        yAxis: {
        
            title: {
                text: 'Revenue (billions Rs)'
            }
        },
        plotOptions: {
            series: {
                pointStart: 2014
            },
            area: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Tata',
            data: [11.44, 14.89, 21.40, 34.03, 51.52, 70.49, 94.46, 129.44]
        }, {
            name: 'Reliance',
            data: [11.49, 17.08, 26.88, 39.94, 55.01, 69.65, 84.17, 117.93]
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

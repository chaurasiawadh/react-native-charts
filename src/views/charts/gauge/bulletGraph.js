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

export const BulletGraph = () => {
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
<script src="https://code.highcharts.com/modules/bullet.js"></script>
<script src="https://code.highcharts.com/modules/exporting.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<figure class="highcharts-figure">
    <div id="container1"></div>
    <div id="container2"></div>
    <div id="container3"></div>
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
    Highcharts.setOptions({
        credits: {
            enabled: false,
          },
        chart: {
            inverted: true,
            marginLeft: 135,
            type: 'bullet'
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        yAxis: {
            gridLineWidth: 0
        },
        plotOptions: {
            series: {
                pointPadding: 0.25,
                borderWidth: 0,
                color: '#000',
                targetOptions: {
                    width: '200%'
                }
            }
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        }
    });
    
    Highcharts.chart('container1', {
        chart: {
            marginTop: 40
        },
        title: {
            text: '2017 YTD'
        },
        xAxis: {
            categories: ['<span class="hc-cat-title">Revenue</span><br/>U.S. $ (1,000s)']
        },
        yAxis: {
            plotBands: [{
                from: 0,
                to: 150,
                color: '#666'
            }, {
                from: 150,
                to: 225,
                color: '#999'
            }, {
                from: 225,
                to: 9e9,
                color: '#bbb'
            }],
            title: null
        },
        series: [{
            data: [{
                y: 275,
                target: 250
            }]
        }],
        tooltip: {
            pointFormat: '<b>{point.y}</b> (with target at {point.target})'
        }
    });
    
    Highcharts.chart('container2', {
        xAxis: {
            categories: ['<span class="hc-cat-title">Profit</span><br/>%']
        },
        yAxis: {
            plotBands: [{
                from: 0,
                to: 20,
                color: '#666'
            }, {
                from: 20,
                to: 25,
                color: '#999'
            }, {
                from: 25,
                to: 100,
                color: '#bbb'
            }],
            labels: {
                format: '{value}%'
            },
            title: null
        },
        series: [{
            data: [{
                y: 22,
                target: 27
            }]
        }],
        tooltip: {
            pointFormat: '<b>{point.y}</b> (with target at {point.target})'
        }
    });
    
    
    Highcharts.chart('container3', {
        xAxis: {
            categories: ['<span class="hc-cat-title">New Customers</span><br/>Count']
        },
        yAxis: {
            plotBands: [{
                from: 0,
                to: 1400,
                color: '#666'
            }, {
                from: 1400,
                to: 2000,
                color: '#999'
            }, {
                from: 2000,
                to: 9e9,
                color: '#bbb'
            }],
            labels: {
                format: '{value}'
            },
            title: null
        },
        series: [{
            data: [{
                y: 1650,
                target: 2100
            }]
        }],
        tooltip: {
            pointFormat: '<b>{point.y}</b> (with target at {point.target})'
        },
        credits: {
            enabled: true
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

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

export const AreaSpline = () => {
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
      
        
    <script>
    // Retrieved from https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt
    Highcharts.chart('container', {
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Moose and deer hunting in India, 2000 - 2021'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 120,
            y: 70,
            floating: true,
            borderWidth: 1,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
        },
        xAxis: {
            plotBands: [{ // Highlight the two last years
                from: 2019,
                to: 2020,
                color: 'rgba(68, 170, 213, .2)'
            }]
        },
        yAxis: {
            title: {
                text: 'Quantity'
            }
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointStart: 2000
            },
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Moose',
            data:
                [
                    38000,
                    37300,
                    37892,
                    38564,
                    36770,
                    36026,
                    34978,
                    35657,
                    35620,
                    35971,
                    36409,
                    36435,
                    34643,
                    34956,
                    33199,
                    31136,
                    30835,
                    31611,
                    30666,
                    30319,
                    31766
                ]
        }, {
            name: 'Deer',
            data:
                [
                    22534,
                    23599,
                    24533,
                    25195,
                    25896,
                    27635,
                    29173,
                    32646,
                    35686,
                    37709,
                    39143,
                    36829,
                    35031,
                    36202,
                    35140,
                    33718,
                    37773,
                    42556,
                    43820,
                    46445,
                    50048
                ]
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

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

export const TreeWithLevels = () => {
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
        <script src="https://code.highcharts.com/modules/treemap.js"></script>
        <script src="https://code.highcharts.com/modules/exporting.js"></script>
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
        series: [{
            type: "treemap",
            layoutAlgorithm: 'stripes',
            alternateStartingDirection: true,
            levels: [{
                level: 1,
                layoutAlgorithm: 'sliceAndDice',
                dataLabels: {
                    enabled: true,
                    align: 'left',
                    verticalAlign: 'top',
                    style: {
                        fontSize: '15px',
                        fontWeight: 'bold'
                    }
                }
            }],
            data: [{
                id: 'A',
                name: 'Nord-Norge',
                color: "#50FFB1"
            }, {
                id: 'B',
                name: 'Trøndelag',
                color: '#F5FBEF'
            }, {
                id: 'C',
                name: 'Vestlandet',
                color: "#A09FA8"
            }, {
                id: 'D',
                name: 'Østlandet',
                color: '#E7ECEF'
            }, {
                id: 'E',
                name: 'Sørlandet',
                color: '#A9B4C2'
            }, {
                name: 'Troms og Finnmark',
                parent: 'A',
                value: 70923
            }, {
                name: 'Nordland',
                parent: 'A',
                value: 35759
            }, {
                name: 'Trøndelag',
                parent: 'B',
                value: 39494
            }, {
                name: 'Møre og Romsdal',
                parent: 'C',
                value: 13840
            }, {
                name: 'Vestland',
                parent: 'C',
                value: 31969
            }, {
                name: 'Rogaland',
                parent: 'C',
                value: 8576
            }, {
                name: 'Viken',
                parent: 'D',
                value: 22768
            }, {
                name: 'Innlandet',
                parent: 'D',
                value: 49391
            },
            {
                name: 'Oslo',
                parent: 'D',
                value: 454
            },
            {
                name: 'Vestfold og Telemark',
                parent: 'D',
                value: 15925
            },
            {
                name: 'Agder',
                parent: 'E',
                value: 14981
            }]
        }],
        title: {
            text: 'Norwegian regions and counties by area'
        },
        subtitle: {
            text:
                'Source: <a href="https://snl.no/Norge" target="_blank">SNL</a>'
        },
        tooltip: {
            useHTML: true,
            pointFormat:
                "The area of <b>{point.name}</b> is <b>{point.value} km<sup>2</sup></b>"
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

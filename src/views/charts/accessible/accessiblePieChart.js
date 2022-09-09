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

export const AccessiblePieChart = () => {
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
        <script src="https://code.highcharts.com/modules/pattern-fill.js"></script>
        <script src="https://code.highcharts.com/themes/high-contrast-light.js"></script>
        
        <div id="chart-wrap">
            <label id="patterns-enabled-label">
              <input type="checkbox" id="patterns-enabled" checked>
              Enable color patterns
            </label>
        
            <figure class="highcharts-figure">
                <div id="container"></div>
            </figure>
        </div>
        
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
    var clrs = Highcharts.getOptions().colors;
    var pieColors = [clrs[2], clrs[0], clrs[3], clrs[1], clrs[4]];
    
    // Get a default pattern, but using the pieColors above.
    // The i-argument refers to which default pattern to use
    function getPattern(i) {
        return {
            pattern: Highcharts.merge(Highcharts.patterns[i], {
                color: pieColors[i]
            })
        };
    }
    
    // Get 5 patterns
    var patterns = [0, 1, 2, 3, 4].map(getPattern);
    
    var chart = Highcharts.chart('container', {
      credits: {
        enabled: false,
      },
        chart: {
            type: 'pie'
        },
    
        title: {
            text: 'Primary desktop/laptop screen readers'
        },
        colors: patterns,
    
        tooltip: {
            valueSuffix: '%',
            borderColor: '#8ae'
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    connectorColor: '#777',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                },
                point: {
                    events: {
                        click: function () {
                            window.location.href = this.website;
                        }
                    }
                },
                cursor: 'pointer',
                borderWidth: 3
            }
        },
    
        series: [{
            name: 'Screen reader usage',
            data: [{
                name: 'NVDA',
                y: 40.6,
                website: 'https://www.nvaccess.org',
                accessibility: {
                    description: 'This is the most used desktop screen reader'
                }
            }, {
                name: 'JAWS',
                y: 40.1,
                website: 'https://www.freedomscientific.com/Products/Blindness/JAWS'
            }, {
                name: 'VoiceOver',
                y: 12.9,
                website: 'http://www.apple.com/accessibility/osx/voiceover'
            }, {
                name: 'ZoomText',
                y: 2,
                website: 'http://www.zoomtext.com/products/zoomtext-magnifierreader'
            }, {
                name: 'Other',
                y: 4.4,
                website: 'http://www.disabled-world.com/assistivedevices/computer/screen-readers.php'
            }]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    plotOptions: {
                        series: {
                            dataLabels: {
                                format: '<b>{point.name}</b>'
                            }
                        }
                    }
                }
            }]
        }
    });
    
    // Toggle patterns enabled
    document.getElementById('patterns-enabled').onclick = function () {
        chart.update({
            colors: this.checked ? patterns : pieColors
        });
    };
    
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

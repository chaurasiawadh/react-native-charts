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

export const LiveData = () => {
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
<script src="https://code.highcharts.com/modules/data.js"></script>
<script src="https://code.highcharts.com/modules/export-data.js"></script>
<script src="https://code.highcharts.com/modules/accessibility.js"></script>

<figure class="highcharts-figure">
    <div id="container"></div>
</figure>

<div class="ld-row">
	<label class="ld-label">
		Enable Polling
	</label>
	<input type="checkbox" checked="checked" id="enablePolling"/>
</div>
<div class="ld-row">
	<label class="ld-label">
		Polling Time (Seconds)
	</label>
	<input class="ld-time-input" type="number" value="2" id="pollingTime"/>
</div>
<div class="ld-row">
	<label class="ld-label">
		CSV URL
	</label>
	<input class="ld-url-input" type="text" id="fetchURL"/>
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
    var defaultData = 'https://demo-live-data.highcharts.com/time-data.csv';
    var urlInput = document.getElementById('fetchURL');
    var pollingCheckbox = document.getElementById('enablePolling');
    var pollingInput = document.getElementById('pollingTime');
    
    function createChart() {
        Highcharts.chart('container', {
          credits: {
            enabled: false,
          },
            chart: {
                type: 'spline'
            },
            title: {
                text: 'Live Data'
            },
            accessibility: {
                announceNewData: {
                    enabled: true,
                    minAnnounceInterval: 15000,
                    announcementFormatter: function (allSeries, newSeries, newPoint) {
                        if (newPoint) {
                            return 'New point added. Value: ' + newPoint.y;
                        }
                        return false;
                    }
                }
            },
            data: {
                csvURL: urlInput.value,
                enablePolling: pollingCheckbox.checked === true,
                dataRefreshRate: parseInt(pollingInput.value, 10)
            }
        });
    
        if (pollingInput.value < 1 || !pollingInput.value) {
            pollingInput.value = 1;
        }
    }
    
    urlInput.value = defaultData;
    
    // We recreate instead of using chart update to make sure the loaded CSV
    // and such is completely gone.
    pollingCheckbox.onchange = urlInput.onchange = pollingInput.onchange = createChart;
    
    // Create the chart
    createChart();
      
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

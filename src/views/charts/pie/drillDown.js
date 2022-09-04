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

export const DrillDown = () => {
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
<script src="https://code.highcharts.com/modules/drilldown.js"></script>
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
    // Create the chart
    Highcharts.chart('container', {
        credits: {
            enabled: false,
          },
        chart: {
            type: 'pie'
        },
        title: {
            text: 'Browser market shares. January, 2022'
        },
        subtitle: {
            text: 'Click the slices to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        },
    
        accessibility: {
            announceNewData: {
                enabled: true
            },
            point: {
                valueSuffix: '%'
            }
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}: {point.y:.1f}%'
                }
            }
        },
    
        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
        },
    
        series: [
            {
                name: "Browsers",
                colorByPoint: true,
                data: [
                    {
                        name: "Chrome",
                        y: 61.04,
                        drilldown: "Chrome"
                    },
                    {
                        name: "Safari",
                        y: 9.47,
                        drilldown: "Safari"
                    },
                    {
                        name: "Edge",
                        y: 9.32,
                        drilldown: "Edge"
                    },
                    {
                        name: "Firefox",
                        y: 8.15,
                        drilldown: "Firefox"
                    },
                    {
                        name: "Other",
                        y: 11.02,
                        drilldown: null
                    }
                ]
            }
        ],
        drilldown: {
            series: [
                {
                    name: "Chrome",
                    id: "Chrome",
                    data: [
                        [
                            "v97.0",
                            36.89
                        ],
                        [
                            "v96.0",
                            18.16
                        ],
                        [
                            "v95.0",
                            0.54
                        ],
                        [
                            "v94.0",
                            0.7
                        ],
                        [
                            "v93.0",
                            0.8
                        ],
                        [
                            "v92.0",
                            0.41
                        ],
                        [
                            "v91.0",
                            0.31
                        ],
                        [
                            "v90.0",
                            0.13
                        ],
                        [
                            "v89.0",
                            0.14
                        ],
                        [
                            "v88.0",
                            0.1
                        ],
                        [
                            "v87.0",
                            0.35
                        ],
                        [
                            "v86.0",
                            0.17
                        ],
                        [
                            "v85.0",
                            0.18
                        ],
                        [
                            "v84.0",
                            0.17
                        ],
                        [
                            "v83.0",
                            0.21
                        ],
                        [
                            "v81.0",
                            0.1
                        ],
                        [
                            "v80.0",
                            0.16
                        ],
                        [
                            "v79.0",
                            0.43
                        ],
                        [
                            "v78.0",
                            0.11
                        ],
                        [
                            "v76.0",
                            0.16
                        ],
                        [
                            "v75.0",
                            0.15
                        ],
                        [
                            "v72.0",
                            0.14
                        ],
                        [
                            "v70.0",
                            0.11
                        ],
                        [
                            "v69.0",
                            0.13
                        ],
                        [
                            "v56.0",
                            0.12
                        ],
                        [
                            "v49.0",
                            0.17
                        ]
                    ]
                },
                {
                    name: "Safari",
                    id: "Safari",
                    data: [
                        [
                            "v15.3",
                            0.1
                        ],
                        [
                            "v15.2",
                            2.01
                        ],
                        [
                            "v15.1",
                            2.29
                        ],
                        [
                            "v15.0",
                            0.49
                        ],
                        [
                            "v14.1",
                            2.48
                        ],
                        [
                            "v14.0",
                            0.64
                        ],
                        [
                            "v13.1",
                            1.17
                        ],
                        [
                            "v13.0",
                            0.13
                        ],
                        [
                            "v12.1",
                            0.16
                        ]
                    ]
                },
                {
                    name: "Edge",
                    id: "Edge",
                    data: [
                        [
                            "v97",
                            6.62
                        ],
                        [
                            "v96",
                            2.55
                        ],
                        [
                            "v95",
                            0.15
                        ]
                    ]
                },
                {
                    name: "Firefox",
                    id: "Firefox",
                    data: [
                        [
                            "v96.0",
                            4.17
                        ],
                        [
                            "v95.0",
                            3.33
                        ],
                        [
                            "v94.0",
                            0.11
                        ],
                        [
                            "v91.0",
                            0.23
                        ],
                        [
                            "v78.0",
                            0.16
                        ],
                        [
                            "v52.0",
                            0.15
                        ]
                    ]
                }
            ]
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

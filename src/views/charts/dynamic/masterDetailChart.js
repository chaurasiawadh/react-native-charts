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

export const MasterDetailChart = () => {
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
      
        
    <script>
    Highcharts.getJSON(
        'https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/usdeur.json',
        data => {
            let detailChart;
    
            // create the detail chart
            function createDetail(masterChart) {
                // prepare the detail chart
                var detailData = [],
                    detailStart = data[0][0];
    
                masterChart.series[0].data.forEach(point => {
                    if (point.x >= detailStart) {
                        detailData.push(point.y);
                    }
                });
    
                // create a detail chart referenced by a global variable
                detailChart = Highcharts.chart('detail-container', {
                    chart: {
                        marginBottom: 120,
                        reflow: false,
                        marginLeft: 50,
                        marginRight: 20,
                        style: {
                            position: 'absolute'
                        }
                    },
                    credits: {
                        enabled: false
                    },
                    title: {
                        text: 'Historical USD to EUR Exchange Rate',
                        align: 'left'
                    },
                    subtitle: {
                        text: 'Select an area by dragging across the lower chart',
                        align: 'left'
                    },
                    xAxis: {
                        type: 'datetime'
                    },
                    yAxis: {
                        title: {
                            text: null
                        },
                        maxZoom: 0.1
                    },
                    tooltip: {
                        formatter: function () {
                            var point = this.points[0];
                            return '<b>' + point.series.name + '</b><br/>' + Highcharts.dateFormat('%A %B %e %Y', this.x) + ':<br/>' +
                                '1 USD = ' + Highcharts.numberFormat(point.y, 2) + ' EUR';
                        },
                        shared: true
                    },
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            marker: {
                                enabled: false,
                                states: {
                                    hover: {
                                        enabled: true,
                                        radius: 3
                                    }
                                }
                            }
                        }
                    },
                    series: [{
                        name: 'USD to EUR',
                        pointStart: detailStart,
                        pointInterval: 24 * 3600 * 1000,
                        data: detailData
                    }],
    
                    exporting: {
                        enabled: false
                    }
    
                }); // return chart
            }
    
            // create the master chart
            function createMaster() {
                Highcharts.chart('master-container', {
                    chart: {
                        reflow: false,
                        borderWidth: 0,
                        backgroundColor: null,
                        marginLeft: 50,
                        marginRight: 20,
                        zoomType: 'x',
                        events: {
    
                            // listen to the selection event on the master chart to update the
                            // extremes of the detail chart
                            selection: function (event) {
                                var extremesObject = event.xAxis[0],
                                    min = extremesObject.min,
                                    max = extremesObject.max,
                                    detailData = [],
                                    xAxis = this.xAxis[0];
    
                                // reverse engineer the last part of the data
                                this.series[0].data.forEach(point => {
                                    if (point.x > min && point.x < max) {
                                        detailData.push([point.x, point.y]);
                                    }
                                });
    
                                // move the plot bands to reflect the new detail span
                                xAxis.removePlotBand('mask-before');
                                xAxis.addPlotBand({
                                    id: 'mask-before',
                                    from: data[0][0],
                                    to: min,
                                    color: 'rgba(0, 0, 0, 0.2)'
                                });
    
                                xAxis.removePlotBand('mask-after');
                                xAxis.addPlotBand({
                                    id: 'mask-after',
                                    from: max,
                                    to: data[data.length - 1][0],
                                    color: 'rgba(0, 0, 0, 0.2)'
                                });
    
    
                                detailChart.series[0].setData(detailData);
    
                                return false;
                            }
                        }
                    },
                    title: {
                        text: null
                    },
                    accessibility: {
                        enabled: false
                    },
                    xAxis: {
                        type: 'datetime',
                        showLastTickLabel: true,
                        maxZoom: 14 * 24 * 3600000, // fourteen days
                        plotBands: [{
                            id: 'mask-before',
                            from: data[0][0],
                            to: data[data.length - 1][0],
                            color: 'rgba(0, 0, 0, 0.2)'
                        }],
                        title: {
                            text: null
                        }
                    },
                    yAxis: {
                        gridLineWidth: 0,
                        labels: {
                            enabled: false
                        },
                        title: {
                            text: null
                        },
                        min: 0.6,
                        showFirstLabel: false
                    },
                    tooltip: {
                        formatter: function () {
                            return false;
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    credits: {
                        enabled: false
                    },
                    plotOptions: {
                        series: {
                            fillColor: {
                                linearGradient: [0, 0, 0, 70],
                                stops: [
                                    [0, Highcharts.getOptions().colors[0]],
                                    [1, 'rgba(255,255,255,0)']
                                ]
                            },
                            lineWidth: 1,
                            marker: {
                                enabled: false
                            },
                            shadow: false,
                            states: {
                                hover: {
                                    lineWidth: 1
                                }
                            },
                            enableMouseTracking: false
                        }
                    },
    
                    series: [{
                        type: 'area',
                        name: 'USD to EUR',
                        pointInterval: 24 * 3600 * 1000,
                        pointStart: data[0][0],
                        data: data
                    }],
    
                    exporting: {
                        enabled: false
                    }
    
                }, masterChart => {
                    createDetail(masterChart);
                }); // return chart instance
            }
    
            // make the container smaller and add a second container for the master chart
            const container = document.getElementById('container');
            container.style.position = 'relative';
            container.innerHTML += '<div id="detail-container"></div><div id="master-container"></div>';
    
            // create master and in its callback, create the detail chart
            createMaster();
        }
    );
    
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

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

export const Sonification = () => {
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
        <script src="https://code.highcharts.com/modules/sonification.js"></script>
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <figure class="highcharts-figure">
            <div id="container"></div>
        </figure>
        
        <div id="controls" style="">
            <button id="play">Play</button>
            <button id="pause">Pause</button>
            <button id="rewind">Rewind</button>
            <input type="range" id="speed" name="Speed" 
                 min="0.5" max="2" value="1" step="0.05">
            <label for="speed">Speed</label>
        </div>
        
        <pre id="csv_data" style="display:none">2018-01-07,61,9,61,15.85714286
        2018-01-14,66,20,61,33.85714286
        2018-01-21,56,41,60,31.85714286
        2018-01-28,61,46,58,39.28571429
        2018-02-04,63,35,65,32.14285714
        2018-02-11,61,47,61,35.85714286
        2018-02-18,61,37,62,40.42857143
        2018-02-25,55,44,54,45
        2018-03-04,57,41,56,43.42857143
        2018-03-11,62,38,61,36.57142857
        2018-03-18,57,36,60,36.57142857
        2018-03-25,59,40,61,38.14285714
        2018-04-01,60,48,60,43.28571429
        2018-04-08,64,38,62,41.14285714
        2018-04-15,68,43,66,45.85714286
        2018-04-22,64,51,61,46
        2018-04-29,62,54,62,53.28571429
        2018-05-06,67,60,62,62.57142857
        2018-05-13,63,53,62,58.42857143
        2018-05-20,62,67,63,60.14285714
        2018-05-27,63,65,63,67.71428571
        2018-06-03,67,63,65,65.14285714
        2018-06-10,68,68,66,64
        2018-06-17,65,74,67,68.57142857
        2018-06-24,65,69,66,71.42857143
        2018-07-01,66,82,67,75.14285714
        2018-07-08,78,69,72,76.57142857
        2018-07-15,74,75,74,75.14285714
        2018-07-22,76,73,73,74.85714286
        2018-07-29,76,77,75,76.57142857
        2018-08-05,76,81,77,77.42857143
        2018-08-12,80,76,81,79
        2018-08-19,76,71,76,77
        2018-08-26,74,73,75,73
        2018-09-02,71,72,74,78.28571429
        2018-09-09,70,61,72,75
        2018-09-16,74,72,72,69.71428571
        2018-09-23,71,63,71,70.42857143
        2018-09-30,71,63,69,65.71428571
        2018-10-07,68,71,71,68.14285714
        2018-10-14,68,53,68,64
        </pre>
        
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
    // Sonification options
    var sdInstruments = [{
            instrument: 'sineMajor',
            instrumentMapping: {
                duration: 200,
                frequency: 'y',
                volume: 0.7,
                pan: -1
            },
            instrumentOptions: {
                minFrequency: 220,
                maxFrequency: 1900
            }
        }],
        nyInstruments = [{
            instrument: 'triangleMajor',
            instrumentMapping: {
                duration: 200,
                frequency: 'y',
                volume: 0.6,
                pan: 1
            },
            instrumentOptions: {
                minFrequency: 220,
                maxFrequency: 1900
            }
        }];
    
    // Point of interest options
    var poiTime = Date.UTC(2018, 4, 6),
        poiEarcon = {
            // Define the earcon we want to play for the point of interest
            earcon: new Highcharts.sonification.Earcon({
                instruments: [{
                    instrument: 'squareMajor',
                    playOptions: {
                        // Play a quick rising frequency
                        frequency: function (time) {
                            return time * 1760 + 440;
                        },
                        volume: 0.1,
                        duration: 200
                    }
                }]
            }),
            // Play this earcon if we hit the point of interest
            condition: function (point) {
                return point.x === poiTime;
            }
        };
    
    // Create the chart
    var chart = Highcharts.chart('container', {
        credits: {
            enabled: false,
          },
        chart: {
            type: 'spline'
        },
        title: {
            text: 'Play chart as sound'
        },
        subtitle: {
            text: 'Weekly temperature averages'
        },
        yAxis: {
            title: {
                text: 'Temperature (°F)'
            }
        },
        xAxis: {
            type: 'datetime',
            plotLines: [{
                value: poiTime,
                dashStyle: 'dash',
                width: 1,
                color: '#d33'
            }]
        },
        tooltip: {
            split: true,
            valueDecimals: 0,
            valueSuffix: '°F'
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                },
                cursor: 'pointer',
                // Sonify points on click
                point: {
                    events: {
                        click: function () {
                            // Sonify all points at this x value
                            var targetX = this.x,
                                chart = this.series.chart;
                            chart.series.forEach(function (series) {
                                // Map instruments to the options for this series
                                var instruments = series.options.id === 'sd' ?
                                    sdInstruments : nyInstruments;
                                // See if we have a point with the targetX
                                series.points.some(function (point) {
                                    if (point.x === targetX) {
                                        point.sonify({
                                            instruments: instruments
                                        });
                                        return true;
                                    }
                                    return false;
                                });
                            });
                        }
                    }
                }
            }
        },
        // Data source: https://www.ncdc.noaa.gov
        data: {
            csv: document.getElementById('csv_data').innerHTML,
            firstRowAsNames: false,
            parsed: function (columns) {
                columns.splice(1, 2); // Remove the non-average columns
            }
        },
        series: [{
            name: 'Mumbai',
            id: 'sd',
            color: '#f4b042'
        }, {
            name: 'Delhi',
            id: 'ny',
            color: '#41aff4'
        }]
    });
    
    
    // Utility function that highlights a point
    function highlightPoint(event, point) {
        var chart = point.series.chart,
            hasVisibleSeries = chart.series.some(function (series) {
                return series.visible;
            });
        if (!point.isNull && hasVisibleSeries) {
            point.onMouseOver(); // Show the hover marker and tooltip
        } else {
            if (chart.tooltip) {
                chart.tooltip.hide(0);
            }
        }
    }
    
    
    // On speed change we reset the sonification
    document.getElementById('speed').onchange = function () {
        chart.cancelSonify();
    };
    
    
    // Add sonification button handlers
    document.getElementById('play').onclick = function () {
        if (!chart.sonification.timeline || chart.sonification.timeline.atStart()) {
            chart.sonify({
                duration: 5000 / document.getElementById('speed').value,
                order: 'simultaneous',
                pointPlayTime: 'x',
                seriesOptions: [{
                    id: 'sd',
                    instruments: sdInstruments,
                    onPointStart: highlightPoint,
                    // Play earcon at point of interest
                    earcons: [poiEarcon]
                }, {
                    id: 'ny',
                    instruments: nyInstruments,
                    onPointStart: highlightPoint
                }],
                // Delete timeline on end
                onEnd: function () {
                    if (chart.sonification.timeline) {
                        delete chart.sonification.timeline;
                    }
                }
            });
        } else {
            chart.resumeSonify();
        }
    };
    document.getElementById('pause').onclick = function () {
        chart.pauseSonify();
    };
    document.getElementById('rewind').onclick = function () {
        chart.rewindSonify();
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

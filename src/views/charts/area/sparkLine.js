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

export const SparkLine = () => {
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
        <script src="https://code.highcharts.com/modules/accessibility.js"></script>
        
        <div id="result"></div>
        <table id="table-sparkline">
            <thead>
                <tr>
                    <th>State</th>
                    <th>Income</th>
                    <th>Income per quarter</th>
                    <th>Costs</th>
                    <th>Costs per quarter</th>
                    <th>Result</th>
                    <th>Result per quarter</th>
                </tr>
            </thead>
            <tbody id="tbody-sparkline">
                <tr>
                    <th>Alabama</th>
                    <td>254</td>
                    <td data-sparkline="71, 78, 39, 66 "/>
                    <td>296</td>
                    <td data-sparkline="68, 52, 80, 96 "/>
                    <td>-42</td>
                    <td data-sparkline="3, 26, -41, -30 ; column"/>
                </tr>
                <tr>
                    <th>Alaska</th>
                    <td>246</td>
                    <td data-sparkline="87, 44, 74, 41 "/>
                    <td>181</td>
                    <td data-sparkline="29, 54, 73, 25 "/>
                    <td>65</td>
                    <td data-sparkline="58, -10, 1, 16 ; column"/>
                </tr>
                <tr>
                    <th>Arizona</th>
                    <td>101</td>
                    <td data-sparkline="56, 12, 8, 25 "/>
                    <td>191</td>
                    <td data-sparkline="69, 14, 53, 55 "/>
                    <td>-90</td>
                    <td data-sparkline="-13, -2, -45, -30 ; column"/>
                </tr>
                <tr>
                    <th>Arkansas</th>
                    <td>303</td>
                    <td data-sparkline="81, 50, 78, 94 "/>
                    <td>76</td>
                    <td data-sparkline="36, 15, 14, 11 "/>
                    <td>227</td>
                    <td data-sparkline="45, 35, 64, 83 ; column"/>
                </tr>
                <tr>
                    <th>California</th>
                    <td>200</td>
                    <td data-sparkline="61, 80, 10, 49 "/>
                    <td>217</td>
                    <td data-sparkline="100, 8, 52, 57 "/>
                    <td>-17</td>
                    <td data-sparkline="-39, 72, -42, -8 ; column"/>
                </tr>
                <tr>
                    <th>Colorado</th>
                    <td>118</td>
                    <td data-sparkline="13, 48, 21, 36 "/>
                    <td>273</td>
                    <td data-sparkline="98, 86, 8, 81 "/>
                    <td>-155</td>
                    <td data-sparkline="-85, -38, 13, -45 ; column"/>
                </tr>
                <tr>
                    <th>Connecticut</th>
                    <td>201</td>
                    <td data-sparkline="6, 64, 44, 87 "/>
                    <td>148</td>
                    <td data-sparkline="60, 13, 73, 2 "/>
                    <td>53</td>
                    <td data-sparkline="-54, 51, -29, 85 ; column"/>
                </tr>
                <tr>
                    <th>Delaware</th>
                    <td>161</td>
                    <td data-sparkline="7, 27, 49, 78 "/>
                    <td>298</td>
                    <td data-sparkline="19, 90, 100, 89 "/>
                    <td>-137</td>
                    <td data-sparkline="-12, -63, -51, -11 ; column"/>
                </tr>
                <tr>
                    <th>District of Columbia</th>
                    <td>106</td>
                    <td data-sparkline="18, 39, 27, 22 "/>
                    <td>185</td>
                    <td data-sparkline="62, 97, 24, 2 "/>
                    <td>-79</td>
                    <td data-sparkline="-44, -58, 3, 20 ; column"/>
                </tr>
                <tr>
                    <th>Florida</th>
                    <td>249</td>
                    <td data-sparkline="51, 24, 90, 84 "/>
                    <td>244</td>
                    <td data-sparkline="47, 40, 74, 83 "/>
                    <td>5</td>
                    <td data-sparkline="4, -16, 16, 1 ; column"/>
                </tr>
                <tr>
                    <th>Georgia</th>
                    <td>183</td>
                    <td data-sparkline="36, 80, 39, 28 "/>
                    <td>212</td>
                    <td data-sparkline="43, 25, 52, 92 "/>
                    <td>-29</td>
                    <td data-sparkline="-7, 55, -13, -64 ; column"/>
                </tr>
                <tr>
                    <th>Hawaii</th>
                    <td>232</td>
                    <td data-sparkline="73, 34, 74, 51 "/>
                    <td>172</td>
                    <td data-sparkline="1, 83, 49, 39 "/>
                    <td>60</td>
                    <td data-sparkline="72, -49, 25, 12 ; column"/>
                </tr>
                <tr>
                    <th>Idaho</th>
                    <td>166</td>
                    <td data-sparkline="25, 43, 31, 67 "/>
                    <td>152</td>
                    <td data-sparkline="30, 30, 75, 17 "/>
                    <td>14</td>
                    <td data-sparkline="-5, 13, -44, 50 ; column"/>
                </tr>
                <tr>
                    <th>Illinois</th>
                    <td>336</td>
                    <td data-sparkline="56, 84, 98, 98 "/>
                    <td>151</td>
                    <td data-sparkline="61, 12, 77, 1 "/>
                    <td>185</td>
                    <td data-sparkline="-5, 72, 21, 97 ; column"/>
                </tr>
                <tr>
                    <th>Indiana</th>
                    <td>216</td>
                    <td data-sparkline="52, 87, 64, 13 "/>
                    <td>216</td>
                    <td data-sparkline="2, 47, 94, 73 "/>
                    <td>0</td>
                    <td data-sparkline="50, 40, -30, -60 ; column"/>
                </tr>
                <tr>
                    <th>Iowa</th>
                    <td>135</td>
                    <td data-sparkline="41, 45, 19, 30 "/>
                    <td>159</td>
                    <td data-sparkline="17, 34, 45, 63 "/>
                    <td>-24</td>
                    <td data-sparkline="24, 11, -26, -33 ; column"/>
                </tr>
                <tr>
                    <th>Kansas</th>
                    <td>184</td>
                    <td data-sparkline="52, 43, 65, 24 "/>
                    <td>215</td>
                    <td data-sparkline="20, 42, 97, 56 "/>
                    <td>-31</td>
                    <td data-sparkline="32, 1, -32, -32 ; column"/>
                </tr>
                <tr>
                    <th>Kentucky</th>
                    <td>289</td>
                    <td data-sparkline="85, 74, 98, 32 "/>
                    <td>219</td>
                    <td data-sparkline="37, 38, 93, 51 "/>
                    <td>70</td>
                    <td data-sparkline="48, 36, 5, -19 ; column"/>
                </tr>
                <tr>
                    <th>Louisiana</th>
                    <td>257</td>
                    <td data-sparkline="89, 18, 87, 63 "/>
                    <td>201</td>
                    <td data-sparkline="19, 54, 35, 93 "/>
                    <td>56</td>
                    <td data-sparkline="70, -36, 52, -30 ; column"/>
                </tr>
                <tr>
                    <th>Maine</th>
                    <td>194</td>
                    <td data-sparkline="17, 68, 61, 48 "/>
                    <td>133</td>
                    <td data-sparkline="44, 35, 42, 12 "/>
                    <td>61</td>
                    <td data-sparkline="-27, 33, 19, 36 ; column"/>
                </tr>
                <tr>
                    <th>Maryland</th>
                    <td>204</td>
                    <td data-sparkline="74, 12, 74, 44 "/>
                    <td>157</td>
                    <td data-sparkline="65, 58, 22, 12 "/>
                    <td>47</td>
                    <td data-sparkline="9, -46, 52, 32 ; column"/>
                </tr>
                <tr>
                    <th>Massachusetts</th>
                    <td>172</td>
                    <td data-sparkline="44, 35, 69, 24 "/>
                    <td>115</td>
                    <td data-sparkline="26, 3, 69, 17 "/>
                    <td>57</td>
                    <td data-sparkline="18, 32, 0, 7 ; column"/>
                </tr>
                <tr>
                    <th>Michigan</th>
                    <td>177</td>
                    <td data-sparkline="99, 26, 13, 39 "/>
                    <td>185</td>
                    <td data-sparkline="20, 37, 99, 29 "/>
                    <td>-8</td>
                    <td data-sparkline="79, -11, -86, 10 ; column"/>
                </tr>
                <tr>
                    <th>Minnesota</th>
                    <td>99</td>
                    <td data-sparkline="34, 30, 16, 19 "/>
                    <td>137</td>
                    <td data-sparkline="49, 43, 24, 21 "/>
                    <td>-38</td>
                    <td data-sparkline="-15, -13, -8, -2 ; column"/>
                </tr>
                <tr>
                    <th>Mississippi</th>
                    <td>205</td>
                    <td data-sparkline="38, 75, 31, 61 "/>
                    <td>179</td>
                    <td data-sparkline="0, 68, 100, 11 "/>
                    <td>26</td>
                    <td data-sparkline="38, 7, -69, 50 ; column"/>
                </tr>
                <tr>
                    <th>Missouri</th>
                    <td>135</td>
                    <td data-sparkline="37, 48, 2, 48 "/>
                    <td>202</td>
                    <td data-sparkline="41, 64, 17, 80 "/>
                    <td>-67</td>
                    <td data-sparkline="-4, -16, -15, -32 ; column"/>
                </tr>
                <tr>
                    <th>Montana</th>
                    <td>195</td>
                    <td data-sparkline="48, 81, 38, 28 "/>
                    <td>237</td>
                    <td data-sparkline="44, 33, 86, 74 "/>
                    <td>-42</td>
                    <td data-sparkline="4, 48, -48, -46 ; column"/>
                </tr>
                <tr>
                    <th>Nebraska</th>
                    <td>286</td>
                    <td data-sparkline="98, 55, 82, 51 "/>
                    <td>232</td>
                    <td data-sparkline="89, 54, 28, 61 "/>
                    <td>54</td>
                    <td data-sparkline="9, 1, 54, -10 ; column"/>
                </tr>
                <tr>
                    <th>Nevada</th>
                    <td>221</td>
                    <td data-sparkline="66, 4, 57, 94 "/>
                    <td>214</td>
                    <td data-sparkline="59, 39, 94, 22 "/>
                    <td>7</td>
                    <td data-sparkline="7, -35, -37, 72 ; column"/>
                </tr>
                <tr>
                    <th>New Hampshire</th>
                    <td>136</td>
                    <td data-sparkline="32, 21, 1, 82 "/>
                    <td>306</td>
                    <td data-sparkline="88, 85, 65, 68 "/>
                    <td>-170</td>
                    <td data-sparkline="-56, -64, -64, 14 ; column"/>
                </tr>
                <tr>
                    <th>New Jersey</th>
                    <td>194</td>
                    <td data-sparkline="31, 40, 24, 99 "/>
                    <td>147</td>
                    <td data-sparkline="7, 45, 12, 83 "/>
                    <td>47</td>
                    <td data-sparkline="24, -5, 12, 16 ; column"/>
                </tr>
                <tr>
                    <th>New Mexico</th>
                    <td>207</td>
                    <td data-sparkline="66, 93, 18, 30 "/>
                    <td>261</td>
                    <td data-sparkline="97, 28, 79, 57 "/>
                    <td>-54</td>
                    <td data-sparkline="-31, 65, -61, -27 ; column"/>
                </tr>
                <tr>
                    <th>New York</th>
                    <td>316</td>
                    <td data-sparkline="48, 95, 76, 97 "/>
                    <td>193</td>
                    <td data-sparkline="68, 5, 97, 23 "/>
                    <td>123</td>
                    <td data-sparkline="-20, 90, -21, 74 ; column"/>
                </tr>
                <tr>
                    <th>North Carolina</th>
                    <td>175</td>
                    <td data-sparkline="31, 71, 2, 71 "/>
                    <td>188</td>
                    <td data-sparkline="93, 5, 81, 9 "/>
                    <td>-13</td>
                    <td data-sparkline="-62, 66, -79, 62 ; column"/>
                </tr>
                <tr>
                    <th>North Dakota</th>
                    <td>181</td>
                    <td data-sparkline="3, 90, 62, 26 "/>
                    <td>288</td>
                    <td data-sparkline="70, 63, 82, 73 "/>
                    <td>-107</td>
                    <td data-sparkline="-67, 27, -20, -47 ; column"/>
                </tr>
                <tr>
                    <th>Ohio</th>
                    <td>189</td>
                    <td data-sparkline="70, 50, 6, 63 "/>
                    <td>163</td>
                    <td data-sparkline="21, 94, 4, 44 "/>
                    <td>26</td>
                    <td data-sparkline="49, -44, 2, 19 ; column"/>
                </tr>
                <tr>
                    <th>Oklahoma</th>
                    <td>188</td>
                    <td data-sparkline="66, 46, 53, 23 "/>
                    <td>172</td>
                    <td data-sparkline="26, 25, 35, 86 "/>
                    <td>16</td>
                    <td data-sparkline="40, 21, 18, -63 ; column"/>
                </tr>
                <tr>
                    <th>Oregon</th>
                    <td>165</td>
                    <td data-sparkline="82, 31, 38, 14 "/>
                    <td>257</td>
                    <td data-sparkline="91, 9, 80, 77 "/>
                    <td>-92</td>
                    <td data-sparkline="-9, 22, -42, -63 ; column"/>
                </tr>
                <tr>
                    <th>Pennsylvania</th>
                    <td>268</td>
                    <td data-sparkline="33, 88, 82, 65 "/>
                    <td>129</td>
                    <td data-sparkline="30, 29, 41, 29 "/>
                    <td>139</td>
                    <td data-sparkline="3, 59, 41, 36 ; column"/>
                </tr>
                <tr>
                    <th>Rhode Island</th>
                    <td>164</td>
                    <td data-sparkline="8, 86, 32, 38 "/>
                    <td>182</td>
                    <td data-sparkline="88, 8, 18, 68 "/>
                    <td>-18</td>
                    <td data-sparkline="-80, 78, 14, -30 ; column"/>
                </tr>
                <tr>
                    <th>South Carolina</th>
                    <td>91</td>
                    <td data-sparkline="24, 18, 0, 49 "/>
                    <td>193</td>
                    <td data-sparkline="72, 62, 21, 38 "/>
                    <td>-102</td>
                    <td data-sparkline="-48, -44, -21, 11 ; column"/>
                </tr>
                <tr>
                    <th>South Dakota</th>
                    <td>184</td>
                    <td data-sparkline="73, 17, 64, 30 "/>
                    <td>221</td>
                    <td data-sparkline="21, 91, 57, 52 "/>
                    <td>-37</td>
                    <td data-sparkline="52, -74, 7, -22 ; column"/>
                </tr>
                <tr>
                    <th>Tennessee</th>
                    <td>233</td>
                    <td data-sparkline="92, 24, 25, 92 "/>
                    <td>131</td>
                    <td data-sparkline="5, 18, 42, 66 "/>
                    <td>102</td>
                    <td data-sparkline="87, 6, -17, 26 ; column"/>
                </tr>
                <tr>
                    <th>Texas</th>
                    <td>211</td>
                    <td data-sparkline="33, 80, 68, 30 "/>
                    <td>225</td>
                    <td data-sparkline="86, 58, 36, 45 "/>
                    <td>-14</td>
                    <td data-sparkline="-53, 22, 32, -15 ; column"/>
                </tr>
                <tr>
                    <th>Utah</th>
                    <td>362</td>
                    <td data-sparkline="89, 98, 96, 79 "/>
                    <td>225</td>
                    <td data-sparkline="35, 51, 88, 51 "/>
                    <td>137</td>
                    <td data-sparkline="54, 47, 8, 28 ; column"/>
                </tr>
                <tr>
                    <th>Vermont</th>
                    <td>119</td>
                    <td data-sparkline="4, 19, 56, 40 "/>
                    <td>152</td>
                    <td data-sparkline="17, 66, 27, 42 "/>
                    <td>-33</td>
                    <td data-sparkline="-13, -47, 29, -2 ; column"/>
                </tr>
                <tr>
                    <th>Virginia</th>
                    <td>127</td>
                    <td data-sparkline="24, 27, 41, 35 "/>
                    <td>71</td>
                    <td data-sparkline="30, 2, 36, 3 "/>
                    <td>56</td>
                    <td data-sparkline="-6, 25, 5, 32 ; column"/>
                </tr>
                <tr>
                    <th>Washington</th>
                    <td>165</td>
                    <td data-sparkline="40, 11, 63, 51 "/>
                    <td>245</td>
                    <td data-sparkline="46, 41, 94, 64 "/>
                    <td>-80</td>
                    <td data-sparkline="-6, -30, -31, -13 ; column"/>
                </tr>
                <tr>
                    <th>West Virginia</th>
                    <td>248</td>
                    <td data-sparkline="66, 56, 97, 29 "/>
                    <td>171</td>
                    <td data-sparkline="65, 53, 37, 16 "/>
                    <td>77</td>
                    <td data-sparkline="1, 3, 60, 13 ; column"/>
                </tr>
                <tr>
                    <th>Wisconsin</th>
                    <td>183</td>
                    <td data-sparkline="24, 55, 21, 83 "/>
                    <td>224</td>
                    <td data-sparkline="80, 64, 13, 67 "/>
                    <td>-41</td>
                    <td data-sparkline="-56, -9, 8, 16 ; column"/>
                </tr>
                <tr>
                    <th>Wyoming</th>
                    <td>231</td>
                    <td data-sparkline="52, 49, 97, 33 "/>
                    <td>251</td>
                    <td data-sparkline="96, 50, 23, 82 "/>
                    <td>-20</td>
                    <td data-sparkline="-44, -1, 74, -49 ; column"/>
                </tr>
            </tbody>
        </table>
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
    /**
     * Create a constructor for sparklines that takes some sensible defaults and merges in the individual
     * chart options. This function is also available from the jQuery plugin as $(element).highcharts('SparkLine').
     */
    Highcharts.SparkLine = function (a, b, c) {
        const hasRenderToArg = typeof a === 'string' || a.nodeName;
        let options = arguments[hasRenderToArg ? 1 : 0];
        const defaultOptions = {
            chart: {
                renderTo: (options.chart && options.chart.renderTo) || (hasRenderToArg && a),
                backgroundColor: null,
                borderWidth: 0,
                type: 'area',
                margin: [2, 0, 2, 0],
                width: 120,
                height: 20,
                style: {
                    overflow: 'visible'
                },
                // small optimalization, saves 1-2 ms each sparkline
                skipClone: true
            },
            title: {
                text: ''
            },
            credits: {
                enabled: false
            },
            xAxis: {
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                startOnTick: false,
                endOnTick: false,
                tickPositions: []
            },
            yAxis: {
                endOnTick: false,
                startOnTick: false,
                labels: {
                    enabled: false
                },
                title: {
                    text: null
                },
                tickPositions: [0]
            },
            legend: {
                enabled: false
            },
            tooltip: {
                hideDelay: 0,
                outside: true,
                shared: true
            },
            plotOptions: {
                series: {
                    animation: false,
                    lineWidth: 1,
                    shadow: false,
                    states: {
                        hover: {
                            lineWidth: 1
                        }
                    },
                    marker: {
                        radius: 1,
                        states: {
                            hover: {
                                radius: 2
                            }
                        }
                    },
                    fillOpacity: 0.25
                },
                column: {
                    negativeColor: '#910000',
                    borderColor: 'silver'
                }
            }
        };
    
        options = Highcharts.merge(defaultOptions, options);
    
        return hasRenderToArg ?
            new Highcharts.Chart(a, options, c) :
            new Highcharts.Chart(options, b);
    };
    
    const start = +new Date(),
        tds = Array.from(document.querySelectorAll('td[data-sparkline]')),
        fullLen = tds.length;
    
    let n = 0;
    
    // Creating 153 sparkline charts is quite fast in modern browsers, but IE8 and mobile
    // can take some seconds, so we split the input into chunks and apply them in timeouts
    // in order avoid locking up the browser process and allow interaction.
    function doChunk() {
        const time = +new Date(),
            len = tds.length;
    
        for (let i = 0; i < len; i += 1) {
            const td = tds[i];
            const stringdata = td.dataset.sparkline;
            const arr = stringdata.split('; ');
            const data = arr[0].split(', ').map(parseFloat);
            const chart = {};
    
            if (arr[1]) {
                chart.type = arr[1];
            }
    
            Highcharts.SparkLine(td, {
                series: [{
                    data: data,
                    pointStart: 1
                }],
                tooltip: {
                    headerFormat: '<span style="font-size: 10px">' + td.parentElement.querySelector('th').innerText + ', Q{point.x}:</span><br/>',
                    pointFormat: '<b>{point.y}.000</b> USD'
                },
                chart: chart
            });
    
            n += 1;
    
            // If the process takes too much time, run a timeout to allow interaction with the browser
            if (new Date() - time > 500) {
                tds.splice(0, i + 1);
                setTimeout(doChunk, 0);
                break;
            }
    
            // Print a feedback on the performance
            if (n === fullLen) {
                document.getElementById('result').innerHTML = 'Generated ' + fullLen + ' sparklines in ' + (new Date() - start) + ' ms';
            }
        }
    }
    doChunk();
    
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

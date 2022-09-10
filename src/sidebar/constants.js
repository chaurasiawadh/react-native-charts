import {RoutesName} from '../routes';

export const CHART_LIST = [
  {
    category: '3D Charts',
    type: 'FontAwesome5Brands',
    icon: 'uncharted',
    chartTypes: [
      {
        name: '3D Area',
        route: RoutesName.D3Area,
        type: 'Fontisto',
        icon: 'area-chart',
      },
      {
        name: '3D Column',
        route: RoutesName.D3Column,
        type: 'Feather',
        icon: 'box',
      },
      {
        name: '3D Cylinder',
        route: RoutesName.D3Cylinder,
        type: 'MaterialCommunityIcons',
        icon: 'cylinder',
      },
      {
        name: '3D Donut',
        route: RoutesName.D3Donut,
        type: 'MaterialCommunityIcons',
        icon: 'record-circle',
      },
      {
        name: '3D Funnel',
        route: RoutesName.D3Funnel,
        type: 'Entypo',
        icon: 'funnel',
      },
      {
        name: '3D Pie',
        route: RoutesName.D3Pie,
        type: 'FontAwesome',
        icon: 'codiepie',
      },
      {
        name: '3D Pyramid',
        route: RoutesName.D3Pyramid,
        type: 'MaterialCommunityIcons',
        icon: 'pyramid',
      },
      {
        name: '3D Scatter',
        route: RoutesName.D3Scatter,
        type: 'MaterialCommunityIcons',
        icon: 'dots-grid',
      },
    ],
  },
  {
    category: 'Accessible Charts',
    type: 'MaterialIcons',
    icon: 'touch-app',
    chartTypes: [
      {
        name: 'Accessible Line Chart',
        route: RoutesName.AccessibleLineChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-line',
      },
      {
        name: 'Accessible Pie Chart',
        route: RoutesName.AccessiblePieChart,
        type: 'MaterialIcons',
        icon: 'pie-chart-outlined',
      },
      {
        name: 'Advanced Accessible Chart',
        route: RoutesName.AdvancedAccessibleChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-waterfall',
      },
      {
        name: 'Sonification',
        route: RoutesName.Sonification,
        type: 'MaterialIcons',
        icon: 'stacked-line-chart',
      },
    ],
  },
  {
    category: 'Area Charts',
    type: 'MaterialCommunityIcons',
    icon: 'chart-areaspline-variant',
    chartTypes: [
      {
        name: 'Area Range',
        route: RoutesName.AreaRange,
        type: 'MaterialCommunityIcons',
        icon: 'chart-line-stacked',
      },
      {
        name: 'Area Range And Line',
        route: RoutesName.AreaRangeAndLine,
        type: 'MaterialCommunityIcons',
        icon: 'chart-areaspline',
      },
      {
        name: 'Area Spline',
        route: RoutesName.AreaSpline,
        type: 'AntDesign',
        icon: 'areachart',
      },
      {
        name: 'Basic Area',
        route: RoutesName.BasicArea,
        type: 'FontAwesome5',
        icon: 'chart-area',
      },
      {
        name: 'Inverted Axes',
        route: RoutesName.InvertedAxes,
        type: 'Fontisto',
        icon: 'area-chart',
      },
      {
        name: 'Negative Area',
        route: RoutesName.NegativeArea,
        type: 'MaterialCommunityIcons',
        icon: 'image-area-close',
      },
      {
        name: 'Percentage Area',
        route: RoutesName.PercentageArea,
        type: 'MaterialCommunityIcons',
        icon: 'image-area',
      },
      {
        name: 'Spark Line',
        route: RoutesName.SparkLine,
        type: 'Entypo',
        icon: 'area-graph',
      },
      {
        name: 'Stacked Area',
        route: RoutesName.StackedArea,
        type: 'MaterialCommunityIcons',
        icon: 'chart-areaspline-variant',
      },
    ],
  },
  {
    category: 'Bar Charts',
    type: 'Ionicons',
    icon: 'bar-chart',
    chartTypes: [
      {
        name: 'Basic Bar',
        route: RoutesName.BasicBar,
        type: 'Feather',
        icon: 'bar-chart-2',
      },
      {
        name: 'Basic Column',
        route: RoutesName.BasicColumn,
        type: 'AntDesign',
        icon: 'barschart',
      },
      {
        name: 'Column Range',
        route: RoutesName.ColumnRange,
        type: 'Ionicons',
        icon: 'bar-chart-outline',
      },
      {
        name: 'Drill Down',
        route: RoutesName.ColumnWithDrillDown,
        type: 'Ionicons',
        icon: 'ios-stats-chart-sharp',
      },
      {
        name: 'Html Table',
        route: RoutesName.HtmlTable,
        type: 'MaterialIcons',
        icon: 'insert-chart-outlined',
      },
      {
        name: 'Negative Column',
        route: RoutesName.NegativeColumn,
        type: 'AntDesign',
        icon: 'barschart',
      },
      {
        name: 'Negative Stack',
        route: RoutesName.NegativeStack,
        type: 'MaterialCommunityIcons',
        icon: 'chart-gantt',
      },
      {
        name: 'Stacked',
        route: RoutesName.Stacked,
        type: 'MaterialIcons',
        icon: 'stacked-bar-chart',
      },
      {
        name: 'Stacked Bar',
        route: RoutesName.StackedBar,
        type: 'MaterialCommunityIcons',
        icon: 'chart-timeline',
      },
      {
        name: 'Stacked Column',
        route: RoutesName.StackedColumn,
        type: 'MaterialCommunityIcons',
        icon: 'chart-bar-stacked',
      },
    ],
  },
  {
    category: 'Bubble Charts',
    type: 'MaterialCommunityIcons',
    icon: 'chart-scatter-plot',
    chartTypes: [
      {
        name: 'Bubble Chart',
        route: RoutesName.BubbleChart,
        type: 'MaterialCommunityIcons',
        icon: 'scatter-plot',
      },
      {
        name: '3D Bubble',
        route: RoutesName.D3Bubble,
        type: 'MaterialCommunityIcons',
        icon: 'chart-scatter-plot-hexbin',
      },
      {
        name: 'Packed Bubble',
        route: RoutesName.PackedBubble,
        type: 'MaterialCommunityIcons',
        icon: 'dots-hexagon',
      },
      {
        name: 'Scatter Plot',
        route: RoutesName.ScatterPlot,
        type: 'AntDesign',
        icon: 'dotchart',
      },
      {
        name: 'Split Packed Bubble',
        route: RoutesName.SplitPackedBubble,
        type: 'MaterialCommunityIcons',
        icon: 'scatter-plot-outline',
      },
    ],
  },
  {
    category: 'Combination Charts',
    type: 'MaterialCommunityIcons',
    icon: 'chart-timeline-variant-shimmer',
    chartTypes: [
      {
        name: 'Column Line And Pie',
        route: RoutesName.ColumnLineAndPie,
        type: 'SimpleLineIcons',
        icon: 'pie-chart',
      },
      {
        name: 'DualAxes Line And Column',
        route: RoutesName.DualAxesLineAndColumn,
        type: 'MaterialIcons',
        icon: 'insert-chart',
      },
      {
        name: 'Meteogram',
        route: RoutesName.Meteogram,
        type: 'MaterialCommunityIcons',
        icon: 'chart-sankey-variant',
      },
      {
        name: 'Multiple Axes',
        route: RoutesName.MultipleAxes,
        type: 'MaterialIcons',
        icon: 'stacked-line-chart',
      },
      {
        name: 'Scatter With Regression Line',
        route: RoutesName.ScatterWithRegressionLine,
        type: 'MaterialIcons',
        icon: 'show-chart',
      },
      {
        name: 'Synchronized Charts',
        route: RoutesName.SynchronizedCharts,
        type: 'MaterialCommunityIcons',
        icon: 'chart-multiple',
      },
    ],
  },
  {
    category: 'Dynamic Charts',
    type: 'MaterialCommunityIcons',
    icon: 'chart-bell-curve-cumulative',
    chartTypes: [
      {
        name: 'Add Point',
        route: RoutesName.AddPoint,
        type: 'MaterialCommunityIcons',
        icon: 'chart-scatter-plot',
      },
      {
        name: 'Live Data',
        route: RoutesName.LiveData,
        type: 'MaterialCommunityIcons',
        icon: 'chart-ppf',
      },
      {
        name: 'Master Detail Chart',
        route: RoutesName.MasterDetailChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-sankey',
      },
      {
        name: 'Spline Updating',
        route: RoutesName.SplineUpdating,
        type: 'MaterialCommunityIcons',
        icon: 'chart-bell-curve',
      },
      {
        name: 'Update Options',
        route: RoutesName.UpdateOptions,
        type: 'MaterialCommunityIcons',
        icon: 'spider-web',
      },
    ],
  },
  {
    category: 'Gauge Charts',
    type: 'MaterialCommunityIcons',
    icon: 'speedometer',
    chartTypes: [
      {
        name: 'Activity Gauge',
        route: RoutesName.ActivityGauge,
        type: 'Octicons',
        icon: 'meter',
      },
      {
        name: 'Bullet Graph',
        route: RoutesName.BulletGraph,
        type: 'FontAwesome5',
        icon: 'grip-lines',
      },
      {
        name: 'Clock',
        route: RoutesName.Clock,
        type: 'Entypo',
        icon: 'clock',
      },
      {
        name: 'Gauge DualAxes',
        route: RoutesName.GaugeDualAxes,
        type: 'SimpleLineIcons',
        icon: 'speedometer',
      },
      {
        name: 'Gauge Series',
        route: RoutesName.GaugeSeries,
        type: 'Entypo',
        icon: 'gauge',
      },
      {
        name: 'Solid Gauge',
        route: RoutesName.SolidGauge,
        type: 'MaterialCommunityIcons',
        icon: 'speedometer-slow',
      },
      {
        name: 'UV Meter',
        route: RoutesName.UVMeter,
        type: 'Ionicons',
        icon: 'speedometer-outline',
      },
    ],
  },
  {
    category: 'Heat And Tree Maps',
    type: 'MaterialCommunityIcons',
    icon: 'chart-tree',
    chartTypes: [
      {
        name: 'Heat Map',
        route: RoutesName.HeatMap,
        type: 'MaterialIcons',
        icon: 'view-comfortable',
      },
      {
        name: 'Large Heat Map',
        route: RoutesName.LargeHeatMap,
        type: 'Ionicons',
        icon: 'tablet-portrait',
      },
      {
        name: 'Large Tree Map',
        route: RoutesName.LargeTreeMap,
        type: 'MaterialCommunityIcons',
        icon: 'table-large',
      },
      {
        name: 'Tile Map Honeycomb',
        route: RoutesName.TileMapHoneycomb,
        type: 'MaterialCommunityIcons',
        icon: 'periodic-table',
      },
      {
        name: 'Tree With Color',
        route: RoutesName.TreeWithColor,
        type: 'MaterialCommunityIcons',
        icon: 'tablet-dashboard',
      },
      {
        name: 'Tree With Levels',
        route: RoutesName.TreeWithLevels,
        type: 'MaterialIcons',
        icon: 'table-chart',
      },
    ],
  },
  {
    category: 'Pie Charts',
    type: 'AntDesign',
    icon: 'piechart',
    chartTypes: [
      {
        name: 'Donut Chart',
        route: RoutesName.DonutChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-donut',
      },
      {
        name: 'Drill Down',
        route: RoutesName.DrillDown,
        type: 'Fontisto',
        icon: 'pie-chart-1',
      },
      {
        name: 'Gradient Fill',
        route: RoutesName.GradientFill,
        type: 'Fontisto',
        icon: 'pie-chart-2',
      },
      {
        name: 'Legend',
        route: RoutesName.Legend,
        type: 'Entypo',
        icon: 'pie-chart',
      },
      {
        name: 'MonoChrome Fill',
        route: RoutesName.MonoChromeFill,
        type: 'Ionicons',
        icon: 'pie-chart',
      },
      {
        name: 'Pie Chart',
        route: RoutesName.PieChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-pie',
      },
      {
        name: 'SemiCircle Donut',
        route: RoutesName.SemiCircleDonut,
        type: 'MaterialCommunityIcons',
        icon: 'circle-half',
      },
      {
        name: 'Variable Radius Pie',
        route: RoutesName.VariableRadiusPie,
        type: 'MaterialCommunityIcons',
        icon: 'chart-donut-variant',
      },
    ],
  },
  {
    category: 'Stock Charts',
    type: 'Fontisto',
    icon: 'line-chart',
    chartTypes: [
      {
        name: 'Candle Stick',
        route: RoutesName.CandleStick,
        type: 'SimpleLineIcons',
        icon: 'chart',
      },
      {
        name: 'Column',
        route: RoutesName.Column,
        type: 'Ionicons',
        icon: 'bar-chart-outline',
      },
      {
        name: 'Compare Multiple Series',
        route: RoutesName.CompareMultipleSeries,
        type: 'MaterialIcons',
        icon: 'multiline-chart',
      },
      {
        name: 'Depth Chart',
        route: RoutesName.DepthChart,
        type: 'MaterialCommunityIcons',
        icon: 'chart-histogram',
      },
      {
        name: 'Dynamically Updated Data',
        route: RoutesName.DynamicallyUpdatedData,
        type: 'MaterialCommunityIcons',
        icon: 'chart-bell-curve-cumulative',
      },
      {
        name: 'Flags Marking Events',
        route: RoutesName.FlagsMarkingEvents,
        type: 'AntDesign',
        icon: 'barchart',
      },
      {
        name: 'Stock GUI',
        route: RoutesName.StockGUI,
        type: 'MaterialCommunityIcons',
        icon: 'chart-waterfall',
      },
      {
        name: 'Point Markers',
        route: RoutesName.PointMarkers,
        type: 'AntDesign',
        icon: 'dotchart',
      },
      {
        name: 'Single Line Series',
        route: RoutesName.SingleLineSeries,
        type: 'MaterialCommunityIcons',
        icon: 'chart-line',
      },
      {
        name: 'Spline',
        route: RoutesName.Spline,
        type: 'MaterialCommunityIcons',
        icon: 'chart-bell-curve',
      },
      {
        name: 'StepLine',
        route: RoutesName.StepLine,
        type: 'AntDesign',
        icon: 'linechart',
      },
      {
        name: 'Stock Area',
        route: RoutesName.StockArea,
        type: 'MaterialCommunityIcons',
        icon: 'chart-areaspline-variant',
      },
      {
        name: 'Stock Area Range',
        route: RoutesName.StockAreaRange,
        type: 'MaterialCommunityIcons',
        icon: 'chart-line-stacked',
      },
    ],
  },
];

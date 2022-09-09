import {RoutesName} from './nameConstant';
import {DrawerRoute} from '../drawerRoutes';
import {
  AccessibleLineChart,
  AccessiblePieChart,
  ActivityGauge,
  AddPoint,
  AdvancedAccessibleChart,
  AreaRange,
  AreaRangeAndLine,
  AreaSpline,
  BasicArea,
  BubbleChart,
  BulletGraph,
  CandleStick,
  Clock,
  Column,
  ColumnLineAndPie,
  CompareMultipleSeries,
  D3Area,
  D3Bubble,
  D3Column,
  D3Cylinder,
  D3Donut,
  D3Funnel,
  D3Pie,
  D3Pyramid,
  D3Scatter,
  DepthChart,
  DonutChart,
  DrillDown,
  DualAxesLineAndColumn,
  DynamicallyUpdatedData,
  FlagsMarkingEvents,
  GaugeDualAxes,
  GaugeSeries,
  GradientFill,
  HeatMap,
  InvertedAxes,
  LargeHeatMap,
  LargeTreeMap,
  Legend,
  LiveData,
  MasterDetailChart,
  Meteogram,
  MonoChromeFill,
  MultipleAxes,
  NegativeArea,
  PackedBubble,
  PercentageArea,
  PieChart,
  PointMarkers,
  ScatterPlot,
  ScatterWithRegressionLine,
  SemiCircleDonut,
  SingleLineSeries,
  SolidGauge,
  Sonification,
  SparkLine,
  Spline,
  SplineUpdating,
  SplitPackedBubble,
  StackedArea,
  StepLine,
  StockArea,
  StockAreaRange,
  StockGUI,
  SynchronizedCharts,
  TileMapHoneycomb,
  TreeWithColor,
  TreeWithLevels,
  UpdateOptions,
  UVMeter,
  VariableRadiusPie,
} from './../views';

export const ROUTES = [
  {
    name: RoutesName.Home,
    component: DrawerRoute,
    title: 'React Native',
    path: '',
  },
  {
    name: RoutesName.D3Area,
    component: D3Area,
    title: '3D Area',
    path: 'charts/3D/d3Area.js',
  },
  {
    name: RoutesName.D3Column,
    component: D3Column,
    title: '3D Column',
    path: 'charts/3D/d3Column.js',
  },
  {
    name: RoutesName.D3Cylinder,
    component: D3Cylinder,
    title: '3D Cylinder',
    path: 'charts/3D/d3Cylinder.js',
  },
  {
    name: RoutesName.D3Donut,
    component: D3Donut,
    title: '3D Donut',
    path: 'charts/3D/d3Donut.js',
  },
  {
    name: RoutesName.D3Funnel,
    component: D3Funnel,
    title: '3D Funnel',
    path: 'charts/3D/d3Funnel.js',
  },
  {
    name: RoutesName.D3Pie,
    component: D3Pie,
    title: '3D Pie',
    path: 'charts/3D/d3Pie.js',
  },
  {
    name: RoutesName.D3Pyramid,
    component: D3Pyramid,
    title: '3D Pyramid',
    path: 'charts/3D/d3Pyramid.js',
  },
  {
    name: RoutesName.D3Scatter,
    component: D3Scatter,
    title: '3D Scatter',
    path: 'charts/3D/d3Scatter.js',
  },
  {
    name: RoutesName.AccessibleLineChart,
    component: AccessibleLineChart,
    title: 'Accessible Line Chart',
    path: 'charts/accessible/accessibleLineChart.js',
  },
  {
    name: RoutesName.AccessiblePieChart,
    component: AccessiblePieChart,
    title: 'Accessible Pie Chart',
    path: 'charts/accessible/accessiblePieChart.js',
  },
  {
    name: RoutesName.AdvancedAccessibleChart,
    component: AdvancedAccessibleChart,
    title: 'Advanced Accessible Chart',
    path: 'charts/accessible/advancedAccessibleChart.js',
  },
  {
    name: RoutesName.Sonification,
    component: Sonification,
    title: 'Sonification',
    path: 'charts/accessible/sonification.js',
  },
  {
    name: RoutesName.AreaRange,
    component: AreaRange,
    title: 'Area Range',
    path: 'charts/area/areaRange.js',
  },
  {
    name: RoutesName.AreaRangeAndLine,
    component: AreaRangeAndLine,
    title: 'Area Range And Line',
    path: 'charts/area/areaRangeAndLine.js',
  },
  {
    name: RoutesName.AreaSpline,
    component: AreaSpline,
    title: 'Area Spline',
    path: 'charts/area/areaSpline.js',
  },
  {
    name: RoutesName.BasicArea,
    component: BasicArea,
    title: 'Basic Area',
    path: 'charts/area/basicArea.js',
  },
  {
    name: RoutesName.InvertedAxes,
    component: InvertedAxes,
    title: 'Inverted Axes',
    path: 'charts/area/invertedAxes.js',
  },
  {
    name: RoutesName.NegativeArea,
    component: NegativeArea,
    title: 'Negative Area',
    path: 'charts/area/negativeArea.js',
  },
  {
    name: RoutesName.PercentageArea,
    component: PercentageArea,
    title: 'Percentage Area',
    path: 'charts/area/percentageArea.js',
  },
  {
    name: RoutesName.SparkLine,
    component: SparkLine,
    title: 'Spark Line',
    path: 'charts/area/sparkLine.js',
  },
  {
    name: RoutesName.StackedArea,
    component: StackedArea,
    title: 'Stacked Area',
    path: 'charts/area/stackedArea.js',
  },
  {
    name: RoutesName.BubbleChart,
    component: BubbleChart,
    title: 'Bubble Chart',
    path: 'charts/bubble/bubbleChart.js',
  },
  {
    name: RoutesName.D3Bubble,
    component: D3Bubble,
    title: '3D Bubble',
    path: 'charts/bubble/d3Bubble.js',
  },
  {
    name: RoutesName.PackedBubble,
    component: PackedBubble,
    title: 'Packed Bubble',
    path: 'charts/bubble/packedBubble.js',
  },
  {
    name: RoutesName.ScatterPlot,
    component: ScatterPlot,
    title: 'Scatter Plot',
    path: 'charts/bubble/scatterPlot.js',
  },
  {
    name: RoutesName.SplitPackedBubble,
    component: SplitPackedBubble,
    title: 'Split Packed Bubble',
    path: 'charts/bubble/splitPackedBubble.js',
  },
  {
    name: RoutesName.ColumnLineAndPie,
    component: ColumnLineAndPie,
    title: 'Column Line And Pie',
    path: 'charts/combination/columnLineAndPie.js',
  },
  {
    name: RoutesName.DualAxesLineAndColumn,
    component: DualAxesLineAndColumn,
    title: 'DualAxes Line And Column',
    path: 'charts/combination/dualAxesLineAndColumn.js',
  },
  {
    name: RoutesName.Meteogram,
    component: Meteogram,
    title: 'Meteogram',
    path: 'charts/combination/meteogram.js',
  },
  {
    name: RoutesName.MultipleAxes,
    component: MultipleAxes,
    title: 'Multiple Axes',
    path: 'charts/combination/multipleAxes.js',
  },
  {
    name: RoutesName.ScatterWithRegressionLine,
    component: ScatterWithRegressionLine,
    title: 'Scatter With Regression Line',
    path: 'charts/combination/scatterWithRegressionLine.js',
  },
  {
    name: RoutesName.SynchronizedCharts,
    component: SynchronizedCharts,
    title: 'Synchronized Charts',
    path: 'charts/combination/synchronizedCharts.js',
  },
  {
    name: RoutesName.AddPoint,
    component: AddPoint,
    title: 'Add Point',
    path: 'charts/dynamic/addPoint.js',
  },
  {
    name: RoutesName.LiveData,
    component: LiveData,
    title: 'Live Data',
    path: 'charts/dynamic/liveData.js',
  },
  {
    name: RoutesName.MasterDetailChart,
    component: MasterDetailChart,
    title: 'Master Detail Chart',
    path: 'charts/dynamic/masterDetailChart.js',
  },
  {
    name: RoutesName.SplineUpdating,
    component: SplineUpdating,
    title: 'Spline Updating',
    path: 'charts/dynamic/splineUpdating.js',
  },
  {
    name: RoutesName.UpdateOptions,
    component: UpdateOptions,
    title: 'Update Options',
    path: 'charts/dynamic/updateOptions.js',
  },
  {
    name: RoutesName.ActivityGauge,
    component: ActivityGauge,
    title: 'Activity Gauge',
    path: 'charts/gauge/activityGauge.js',
  },
  {
    name: RoutesName.BulletGraph,
    component: BulletGraph,
    title: 'Bullet Graph',
    path: 'charts/gauge/bulletGraph.js',
  },
  {
    name: RoutesName.Clock,
    component: Clock,
    title: 'Clock',
    path: 'charts/gauge/clock.js',
  },
  {
    name: RoutesName.GaugeDualAxes,
    component: GaugeDualAxes,
    title: 'Gauge DualAxes',
    path: 'charts/gauge/gaugeDualAxes.js',
  },
  {
    name: RoutesName.GaugeSeries,
    component: GaugeSeries,
    title: 'Gauge Series',
    path: 'charts/gauge/gaugeSeries.js',
  },
  {
    name: RoutesName.SolidGauge,
    component: SolidGauge,
    title: 'Solid Gauge',
    path: 'charts/gauge/solidGauge.js',
  },
  {
    name: RoutesName.UVMeter,
    component: UVMeter,
    title: 'UV Meter',
    path: 'charts/gauge/uvMeter.js',
  },
  {
    name: RoutesName.HeatMap,
    component: HeatMap,
    title: 'Heat Map',
    path: 'charts/heatAndTree/heatMap.js',
  },
  {
    name: RoutesName.LargeHeatMap,
    component: LargeHeatMap,
    title: 'Large Heat Map',
    path: 'charts/heatAndTree/largeHeatMap.js',
  },
  {
    name: RoutesName.LargeTreeMap,
    component: LargeTreeMap,
    title: 'Large Tree Map',
    path: 'charts/heatAndTree/largeTreeMap.js',
  },
  {
    name: RoutesName.TileMapHoneycomb,
    component: TileMapHoneycomb,
    title: 'Tile Map Honeycomb',
    path: 'charts/heatAndTree/tileMapHoneycomb.js',
  },
  {
    name: RoutesName.TreeWithColor,
    component: TreeWithColor,
    title: 'Tree With Color',
    path: 'charts/heatAndTree/treeWithColor.js',
  },
  {
    name: RoutesName.TreeWithLevels,
    component: TreeWithLevels,
    title: 'Tree With Levels',
    path: 'charts/heatAndTree/treeWithLevels.js',
  },
  {
    name: RoutesName.DonutChart,
    component: DonutChart,
    title: 'Donut Chart',
    path: 'charts/pie/donutChart.js',
  },
  {
    name: RoutesName.DrillDown,
    component: DrillDown,
    title: 'Drill Down',
    path: 'charts/pie/drillDown.js',
  },
  {
    name: RoutesName.GradientFill,
    component: GradientFill,
    title: 'Gradient Fill',
    path: 'charts/pie/gradientFill.js',
  },
  {
    name: RoutesName.Legend,
    component: Legend,
    title: 'Legend',
    path: 'charts/pie/legend.js',
  },
  {
    name: RoutesName.MonoChromeFill,
    component: MonoChromeFill,
    title: 'MonoChrome Fill',
    path: 'charts/pie/monoChromeFill.js',
  },
  {
    name: RoutesName.PieChart,
    component: PieChart,
    title: 'PieChart',
    path: 'charts/pie/pieChart.js',
  },
  {
    name: RoutesName.SemiCircleDonut,
    component: SemiCircleDonut,
    title: 'SemiCircle Donut',
    path: 'charts/pie/semiCircleDonut.js',
  },
  {
    name: RoutesName.VariableRadiusPie,
    component: VariableRadiusPie,
    title: 'Variable Radius Pie',
    path: 'charts/pie/variableRadiusPie.js',
  },
  {
    name: RoutesName.CandleStick,
    component: CandleStick,
    title: 'Candle Stick',
    path: 'charts/stock/candleStick.js',
  },
  {
    name: RoutesName.Column,
    component: Column,
    title: 'Column',
    path: 'charts/stock/column.js',
  },
  {
    name: RoutesName.CompareMultipleSeries,
    component: CompareMultipleSeries,
    title: 'Compare Multiple Series',
    path: 'charts/stock/compareMultipleSeries.js',
  },
  {
    name: RoutesName.DepthChart,
    component: DepthChart,
    title: 'Depth Chart',
    path: 'charts/stock/depthChart.js',
  },
  {
    name: RoutesName.DynamicallyUpdatedData,
    component: DynamicallyUpdatedData,
    title: 'Dynamically Updated Data',
    path: 'charts/stock/dynamicallyUpdatedData.js',
  },
  {
    name: RoutesName.FlagsMarkingEvents,
    component: FlagsMarkingEvents,
    title: 'Flags Marking Events',
    path: 'charts/stock/flagsMarkingEvents.js',
  },
  {
    name: RoutesName.StockGUI,
    component: StockGUI,
    title: 'Stock GUI',
    path: 'charts/stock/gui.js',
  },
  {
    name: RoutesName.PointMarkers,
    component: PointMarkers,
    title: 'PointMarkers',
    path: 'charts/stock/pointMarkers.js',
  },
  {
    name: RoutesName.SingleLineSeries,
    component: SingleLineSeries,
    title: 'Single Line Series',
    path: 'charts/stock/singleLineSeries.js',
  },
  {
    name: RoutesName.Spline,
    component: Spline,
    title: 'Spline',
    path: 'charts/stock/spline.js',
  },
  {
    name: RoutesName.StepLine,
    component: StepLine,
    title: 'StepLine',
    path: 'charts/stock/stepLine.js',
  },
  {
    name: RoutesName.StockArea,
    component: StockArea,
    title: 'Stock Area',
    path: 'charts/stock/stockArea.js',
  },
  {
    name: RoutesName.StockAreaRange,
    component: StockAreaRange,
    title: 'Stock Area Range',
    path: 'charts/stock/stockAreaRange.js',
  },
];

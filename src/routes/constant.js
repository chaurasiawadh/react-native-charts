// import {Home} from '../home';
import {Profile} from '../profile';
import {RoutesName} from './nameConstant';
import {GaugeDualAxes} from './../views';
import {SideBar} from '../sidebar';
import {Home} from './../home';
import {DrawerRoute} from '../drawerRoutes';
import {D3Area} from './../views/charts/3D/d3Area';

export const ROUTES = [
  {
    name: RoutesName.Home,
    component: DrawerRoute,
    title: 'HOME DATA',
    path: 'charts/charts.js',
  },
  {
    name: RoutesName.D3Area,
    component: D3Area,
    title: 'PROFILE DATA',
    path: 'charts/charts.js',
  },
  {
    name: RoutesName.Side,
    component: SideBar,
    title: 'Awadhesh',
    path: 'charts/charts.js',
  },
];

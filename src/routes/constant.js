import {Home} from '../home';
import {Profile} from '../profile';
import {RoutesName} from './nameConstant';

export const ROUTES = [
  {
    name: RoutesName.Home,
    component: Home,
    title: 'HOME DATA',
    path: 'charts/charts.js',
  },
  {
    name: RoutesName.Profile,
    component: Profile,
    title: 'PROFILE DATA',
    path: 'charts/charts.js',
  },
];

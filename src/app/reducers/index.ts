/**
 * Dashboard App: Main Reducer 
 * @contrib Rajesh Thoghuluva
 * @version 1.0.0
 */
import { combineReducers } from 'redux';
import mainChartData       from './main-chart-data-reducer';
import  dashboardChartData  from './dashboard-chart-data-reducer';
import { routerReducer }   from 'ng2-redux-router';
export const rootReducer =  combineReducers({
  mainChartData :     mainChartData,
  dashboardChartData: dashboardChartData,
  router:             routerReducer
});

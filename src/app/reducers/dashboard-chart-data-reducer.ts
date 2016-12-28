import { DASHBOARD_LOAD_CHART_DATAS } from '../actions/dashboard-chart-data-actions';

export default function dashboardChartData (state = [], action) {

  switch (action.type) {
    case DASHBOARD_LOAD_CHART_DATAS:
      return Object.assign({}, action.payload.chartData);
    default:
      return state;
  }
}

/**
 * Dashboard App: Dashboard Actions
 * @contrib Rajesh Thoghuluva
 * @version 1.0.0
 */
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';

import { DashboardChartDataService } from '../services/dashboard-chart-data-service';
export const DASHBOARD_LOAD_CHART_DATAS = 'DASHBOARD_LOAD_CHART_DATAS';


@Injectable()
export class DashboardChartActions {

  constructor(private ngRedux: NgRedux<any>, private _dashboardChartDataService: DashboardChartDataService) {}

  dashboardLoadLineChartData = () => {
    this._dashboardChartDataService.loadLineChartData()
          .subscribe(data => {
            this.ngRedux.dispatch({
              type: "DASHBOARD_LOAD_CHART_DATAS",
              payload: {
                chartData: data
              }
            });
          }, error => console.log('Could not load main chart data.'));
 };

}

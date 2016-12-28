import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NgRedux } from 'ng2-redux';
import { Http } from '@angular/http';

interface MainChart{
  data: Array<string>,
  label: string
}

@Injectable()
export class DashboardChartDataService {

  constructor(private ngRedux: NgRedux<any>, private http: Http) {}

  loadLineChartData(): Observable<MainChart> {
     return this.http.get("/assets/data/dashboardChartDatas.json") // returns an observable of the response
        .map(response => response.json());

    }
}

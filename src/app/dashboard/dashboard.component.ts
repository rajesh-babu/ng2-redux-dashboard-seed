
import { Component, OnInit }    from '@angular/core';
import { select, NgRedux }      from 'ng2-redux';
import { DashboardChartActions }     from '../actions/dashboard-chart-data-actions';
import { Observable}            from 'rxjs/Observable';


@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit  {

  private lineChartData: Observable<any>;
  private barChartData: Observable<any>;
  private pieChartData: Observable<any>;
  private doughnutChartData: Observable<any>;
    constructor( private ngRedux: NgRedux<any>, private _dashboardChartActions: DashboardChartActions  ) {
      this.ngRedux
      .select(state=>state.dashboardChartData)
      .subscribe(data=>{
        this.lineChartData = ( data.hasOwnProperty("barChartData") && data.lineChartData.length) ? data.lineChartData : [{data:[], label:""}];
        this.barChartData = ( data.hasOwnProperty("barChartData") && data.barChartData.length) ? data.barChartData : [{data:[], label:""}];
        this.pieChartData = ( data.hasOwnProperty("barChartData") && data.pieChartData.length) ? data.pieChartData : [];
        this.doughnutChartData = ( data.hasOwnProperty("barChartData") && data.doughnutChartData.length) ? data.doughnutChartData : [];

      });
    }
    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

    // lineChart
    /*public lineChartData:Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];*/

    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
        animation: false,
        responsive: true
    };
    public lineChartColours:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';

    // barChart
    public barChartOptions:any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    public barChartType:string = 'bar';
    public barChartLegend:boolean = true;

    // public barChartData:any[] = [
    //     {data: [65, 59, 80, 81, 56, 55, 40], label:'Series A'},
    //     {data: [28, 48, 40, 19, 86, 27, 90], label:'Series B'}
    // ];

    // Doughnut
    public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    //public doughnutChartData:number[] = [350, 450, 100];
    public doughnutChartType:string = 'doughnut';



    // Pie
    public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    //public pieChartData:number[] = [300, 500, 100];
    public pieChartType:string = 'pie';


    ngOnInit(): void {
          this._dashboardChartActions.dashboardLoadLineChartData();
    }

}

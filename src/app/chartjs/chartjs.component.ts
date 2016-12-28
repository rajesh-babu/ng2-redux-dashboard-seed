import { Component, OnInit }    from '@angular/core';
import { Router }               from '@angular/router';
import { select, NgRedux }      from 'ng2-redux';
import { MainChartActions }     from '../actions/main-chart-data-actions';
import { MainChartDataService } from "../services/main-chart-data-service";
import { Observable}            from 'rxjs/Observable';

interface MainChart{
  data: Array<string>,
  label: string
}

@Component({
    templateUrl: './chartjs.component.html'
})
export class ChartJSComponent implements OnInit {

  //@select() objections: Observable<MainChart[]>;
  private mainChartData: Observable<any>;
    constructor( private ngRedux: NgRedux<any>, private mainChartActions: MainChartActions, private mainChartDataService: MainChartDataService  ) {
      this.ngRedux
      .select(state=>state.mainChartData)
      .subscribe(data=>{
         this.mainChartData = (data.length) ? data : [{data:[], label:""}];
      });
    }

    public brandPrimary:string =  '#20a8d8';
    public brandSuccess:string =  '#4dbd74';
    public brandInfo:string =     '#63c2de';
    public brandWarning:string =  '#f8cb00';
    public brandDanger:string =   '#f86c6b';

    // dropdown buttons
    public status: { isopen: boolean } = { isopen: false };
    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }

    //convert Hex to RGBA
    public convertHex(hex:string,opacity:number){
        hex = hex.replace('#','');
        let r = parseInt(hex.substring(0,2), 16);
        let g = parseInt(hex.substring(2,4), 16);
        let b = parseInt(hex.substring(4,6), 16);

        let rgba = 'rgba('+r+','+g+','+b+','+opacity/100+')';
        return rgba;
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }



    // mainChart


    public mainChartLabels:Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    public mainChartOptions:any = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function(value:any) {
                        return value.charAt(0);
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                }
            }]
        },
        elements: {
            line: {
                borderWidth: 2
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
        legend: {
            display: false
        }
    };
    public mainChartColours:Array<any> = [
        { //brandInfo
            backgroundColor: this.convertHex(this.brandInfo,10),
            borderColor: this.brandInfo,
            pointHoverBackgroundColor: '#fff'
        },
        { //brandSuccess
            backgroundColor: 'transparent',
            borderColor: this.brandSuccess,
            pointHoverBackgroundColor: '#fff'
        },
        { //brandDanger
            backgroundColor: 'transparent',
            borderColor: this.brandDanger,
            pointHoverBackgroundColor: '#fff',
            borderWidth: 1,
            borderDash: [8, 5]
        }
    ];
    public mainChartLegend:boolean = false;
    public mainChartType:string = 'line';


    ngOnInit(): void {
      this.mainChartActions.loadInitData();
    }
}

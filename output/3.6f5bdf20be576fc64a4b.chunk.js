webpackJsonp([3,8],{834:function(t,e,n){"use strict";var a=n(0),r=n(470),s=(n.n(r),n(838)),o=n(842),i=n(16);n.d(e,"ChartJSModule",function(){return l});var d=this&&this.__decorate||function(t,e,n,a){var r,s=arguments.length,o=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},l=function(){function t(){}return t=d([n.i(a.NgModule)({imports:[o.a,r.ChartsModule,i.CommonModule],declarations:[s.a]}),c("design:paramtypes",[])],t)}()},838:function(t,e,n){"use strict";var a=n(0),r=n(73),s=(n.n(r),n(290)),o=n(291);n.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,n,a){var r,s=arguments.length,o=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){var a=this;this.ngRedux=t,this.mainChartActions=e,this.mainChartDataService=n,this.brandPrimary="#20a8d8",this.brandSuccess="#4dbd74",this.brandInfo="#63c2de",this.brandWarning="#f8cb00",this.brandDanger="#f86c6b",this.status={isopen:!1},this.mainChartLabels=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Thursday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.mainChartOptions={responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{drawOnChartArea:!1},ticks:{callback:function(t){return t.charAt(0)}}}],yAxes:[{ticks:{beginAtZero:!0,maxTicksLimit:5,stepSize:Math.ceil(50),max:250}}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}},legend:{display:!1}},this.mainChartColours=[{backgroundColor:this.convertHex(this.brandInfo,10),borderColor:this.brandInfo,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandSuccess,pointHoverBackgroundColor:"#fff"},{backgroundColor:"transparent",borderColor:this.brandDanger,pointHoverBackgroundColor:"#fff",borderWidth:1,borderDash:[8,5]}],this.mainChartLegend=!1,this.mainChartType="line",this.ngRedux.select(function(t){return t.mainChartData}).subscribe(function(t){a.mainChartData=t.length?t:[{data:[],label:""}]})}return t.prototype.toggleDropdown=function(t){t.preventDefault(),t.stopPropagation(),this.status.isopen=!this.status.isopen},t.prototype.convertHex=function(t,e){t=t.replace("#","");var n=parseInt(t.substring(0,2),16),a=parseInt(t.substring(2,4),16),r=parseInt(t.substring(4,6),16),s="rgba("+n+","+a+","+r+","+e/100+")";return s},t.prototype.chartClicked=function(t){console.log(t)},t.prototype.chartHovered=function(t){console.log(t)},t.prototype.ngOnInit=function(){this.mainChartActions.loadInitData()},t=i([n.i(a.Component)({template:n(846)}),d("design:paramtypes",["function"==typeof(e="undefined"!=typeof r.NgRedux&&r.NgRedux)&&e||Object,"function"==typeof(c="undefined"!=typeof s.a&&s.a)&&c||Object,"function"==typeof(l="undefined"!=typeof o.a&&o.a)&&l||Object])],t);var e,c,l}()},842:function(t,e,n){"use strict";var a=n(0),r=n(175),s=n(838);n.d(e,"a",function(){return c});var o=this&&this.__decorate||function(t,e,n,a){var r,s=arguments.length,o=s<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(s<3?r(o):s>3?r(e,n,o):r(e,n))||o);return s>3&&o&&Object.defineProperty(e,n,o),o},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=[{path:"",component:s.a,data:{title:"Charts"}}],c=function(){function t(){}return t=o([n.i(a.NgModule)({imports:[r.a.forChild(d)],exports:[r.a]}),i("design:paramtypes",[])],t)}()},846:function(t,e){t.exports='<div class="animated fadeIn">\n\n    <!--/row-->\n    <div class="card">\n        <div class="card-block">\n            <div class="row">\n                <div class="col-sm-6">\n                    <h4 class="card-title mb-0">Traffic</h4>\n                    <div class="small text-muted">November 2015</div>\n                </div>\n                <div class="col-sm-6">\n                    <div class="btn-toolbar float-xs-right" role="toolbar" aria-label="Toolbar with button groups">\n                        <div class="btn-group" data-toggle="buttons" aria-label="First group">\n                            <label class="btn btn-outline-secondary">\n                                <input type="radio" name="options" id="option1">Day\n                            </label>\n                            <label class="btn btn-outline-secondary active">\n                                <input type="radio" name="options" id="option2" checked>Month\n                            </label>\n                            <label class="btn btn-outline-secondary">\n                                <input type="radio" name="options" id="option3">Year\n                            </label>\n                        </div>\n                        <div class="btn-group" role="group" aria-label="Second group">\n                            <button type="button" class="btn btn-primary"><i class="icon-cloud-download"></i>\n                            </button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <!-- <ul>\n              <li *ngFor="let object of objections | async">\n                {{object.data}}\n              </li>\n            </ul> -->\n            <div class="chart-wrapper" style="height:300px;margin-top:40px;">\n                <canvas baseChart class="chart" *ngIf="mainChartData"  [datasets]="mainChartData" [labels]="mainChartLabels" [options]="mainChartOptions" [colors]="mainChartColours" [legend]="mainChartLegend" [chartType]="mainChartType" (chartHover)="chartHovered($event)" (chartClick)="chartClicked($event)"></canvas>\n            </div>\n        </div>\n        <div class="card-footer">\n            <ul>\n                <li>\n                    <div class="text-muted">Visits</div>\n                    <strong>29.703 Users (40%)</strong>\n                    <progress class="progress progress-xs progress-success" value="40" max="100">40%</progress>\n                </li>\n                <li class="hidden-xs-down">\n                    <div class="text-muted">Unique</div>\n                    <strong>24.093 Unique Users (20%)</strong>\n                    <progress class="progress progress-xs progress-info" value="20" max="100">20%</progress>\n                </li>\n                <li>\n                    <div class="text-muted">Pageviews</div>\n                    <strong>78.706 Views (60%)</strong>\n                    <progress class="progress progress-xs progress-warning" value="60" max="100">60%</progress>\n                </li>\n                <li class="hidden-xs-down">\n                    <div class="text-muted">New Users</div>\n                    <strong>22.123 Users (80%)</strong>\n                    <progress class="progress progress-xs progress-danger" value="80" max="100">80%</progress>\n                </li>\n                <li class="hidden-xs-down">\n                    <div class="text-muted">Bounce Rate</div>\n                    <strong>40.15%</strong>\n                    <progress class="progress progress-xs progress-primary" value="40" max="100">40%</progress>\n                </li>\n            </ul>\n        </div>\n    </div>\n    <!--/.card-->\n\n    <!--/.row-->\n\n    <!--/.row-->\n</div>\n'}});
//# sourceMappingURL=3.6f5bdf20be576fc64a4b.bundle.map
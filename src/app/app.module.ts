import { NgModule }                     from '@angular/core';
import { HttpModule, JsonpModule }      from '@angular/http';
import { BrowserModule }                from '@angular/platform-browser';
import { LocationStrategy,
         HashLocationStrategy }         from '@angular/common';

import { AppComponent }                 from './app.component';
import { Ng2BootstrapModule }           from 'ng2-bootstrap/ng2-bootstrap';
import { NAV_DROPDOWN_DIRECTIVES }      from './shared/nav-dropdown.directive';

import { ChartsModule }                 from 'ng2-charts/ng2-charts';
import { SIDEBAR_TOGGLE_DIRECTIVES }    from './shared/sidebar.directive';
import { AsideToggleDirective }         from './shared/aside.directive';
import { BreadcrumbsComponent }         from './shared/breadcrumb.component';

// Routing Module
import { AppRoutingModule }             from './app.routing';

//Layouts
import { FullLayoutComponent, SimpleLayoutComponent}          from './layouts';
//Redux
import { NgReduxModule, NgRedux, DevToolsExtension }          from 'ng2-redux';
import { NgReduxRouterModule, NgReduxRouter }                 from 'ng2-redux-router';
import { rootReducer }                                        from './reducers';
import { MainChartActions, DashboardChartActions }            from './actions';
import { DashboardChartDataService, MainChartDataService }    from './services';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        ChartsModule,
        NgReduxModule.forRoot(),
        NgReduxRouterModule,
        HttpModule,
        JsonpModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },DevToolsExtension, MainChartDataService, MainChartActions, DashboardChartActions, DashboardChartDataService],
    bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<any>, devTools: DevToolsExtension, ngReduxRouter: NgReduxRouter) {
    ngRedux.configureStore(rootReducer, {},[], devTools.isEnabled() ? [ devTools.enhancer() ] : []);
    ngReduxRouter.initialize();
  }
}

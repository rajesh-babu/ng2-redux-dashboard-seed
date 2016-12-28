import { NgModule }                 from '@angular/core';


import { Page2Component }         from './page2.component';
import { Page2RoutingModule }     from './page2-routing.module';
import { CommonModule }             from '@angular/common';

@NgModule({
    imports: [
        Page2RoutingModule,
        CommonModule
    ],
    declarations: [ Page2Component ]
})
export class Page2Module { }

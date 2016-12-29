/**
 * Dashboard App: Simple-layout Component
 * @contrib Rajesh Thoghuluva
 * @version 1.0.0
 */

import { Component, OnInit }        from '@angular/core';

@Component({
    selector: 'app-dashboard',
    template: '<router-outlet></router-outlet>',
})
export class SimpleLayoutComponent implements OnInit {

    constructor() { }

    ngOnInit(): void { }
}

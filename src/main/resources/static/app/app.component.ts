import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {GmanComponent} from "./gman";


@Component({
    selector: 'my-app',
    templateUrl: './html/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/GmanDetail', component: GmanComponent, name: 'GmanDetail' }
])

export class AppComponent {

    //
    //ngOnInit() {
    //    console.log("ngOnInit");
    //}
    //ngOnDestroy() {
    //    console.log("ngOnDestroy");
    //}
    //ngDoCheck() {
    //    console.log("ngDoCheck");
    //}
    //ngOnChanges(changes) {
    //    console.log("ngOnChanges"+ changes);
    //}
    //ngAfterContentInit() {
    //    console.log("ngAfterContentInit");
    //}
    //ngAfterContentChecked() {
    //    console.log("ngAfterContentChecked");    }
    //ngAfterViewInit() {
    //    console.log("ngAfterViewInit");    }
    //ngAfterViewChecked() {
    //    console.log("ngAfterViewChecked");    }
}


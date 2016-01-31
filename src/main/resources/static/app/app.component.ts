import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {GmanComponent} from "./gman";


@Component({
    selector: 'app',
    templateUrl: '/html/app.html',
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {...}
])

export class AppComponent {

    constructor(){
        debugger;
        //this.router = router;
        //this.router.config([
        //    { path: '/gman', component : GmanComponent, name:'GmanComponent' }
        //]);
    }

    onSelect(){
        console.log("tt");
        //this.router.navigate(['GmanComponent']);

        return false;
    }

    ngOnInit() {
        console.log("AppComponent ngOnInit");
    }
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


import {Component, OnInit} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from "./app.component";

@Component({
    selector: 'my-app',
    templateUrl: './html/gman.html',
    directives: [ROUTER_DIRECTIVES]
})

//@RouteConfig([
//    { path: '/index', component: AppComponent, name: 'AppComponent' }
//])

export class GmanComponent implements OnInit{
    constructor(private _router:Router){
        this._router = _router;
        console.log("testt");
    }

    public onSelect() {
        this._router.parent.hostComponent();
        //this._router.navigate(["AppComponent"]);
        return false;
    }

    ngOnInit() {
        console.log("ngOnInit");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }
    ngDoCheck() {
        console.log("ngDoCheck");
    }
    ngOnChanges(changes) {
        console.log("ngOnChanges"+ changes);
    }
    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }
    ngAfterContentChecked() {
        console.log("ngAfterContentChecked");
    }
    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }
    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }
}

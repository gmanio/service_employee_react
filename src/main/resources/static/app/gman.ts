import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AppComponent} from "./app.component";
//import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'div',
    templateUrl: './html/gman.html'
})

@RouteConfig([
    { path: '/index', component: AppComponent, name: 'AppComponent' }
])

export class GmanComponent{
    constructor(private _router:Router){
        this._router = _router;
        //this._http = _http;
        console.log("testt");
    }

    public onSelect() {
        //this._router.parent.hostComponent();
        //this._router.navigate(["AppComponent"]);
        return false;
    }

    ngOnInit() {

        //let test = this._http.get("/id");

        //debugger;
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

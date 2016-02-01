import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: './html/home.html'
})

export class HomeComponent{
    constructor(router:Router){
        this.router = router;
    }

    public onSelect() {

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

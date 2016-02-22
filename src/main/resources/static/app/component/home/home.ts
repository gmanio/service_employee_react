import {Component,OnInit, OnDestroy} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'home',
    templateUrl: 'app/component/home/home.html',
    directives: [ROUTER_DIRECTIVES]
})

//@RouteConfig([
//    //{path: '/gman', name: 'Gman', component: GmanComponent}
//])

class HomeComponent implements OnInit, OnDestroy {
    constructor(public router : Router){
        this.router = router;
        console.log('test');
        return false;
    }

    public onSelect() {
        this.router.navigate(['Gman']);
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

export default HomeComponent;

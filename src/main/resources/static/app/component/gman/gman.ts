import {Component, OnInit, OnDestroy, ViewEncapsulation} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';

//import {Http, HTTP_PROVIDERS} from 'angular2/http';
//import {HomeComponent} from "./../home/home";
@Component({
    selector: 'app',
    styleUrls:['./app/component/gman/gman.css'],
    templateUrl: './app/component/gman/gman.html',
    directives: [ROUTER_DIRECTIVES]
})

//@RouteConfig([
//    {path: '/home', name: 'Home', component: HomeComponent}
//])

class GmanComponent implements OnInit, OnDestroy {
    public stat = 5;

    constructor(public router:Router) {
        this.router = router;
        console.log('test');
    }

    public onSelect() {
        this.router.navigate(['Home']);
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
        console.log("ngOnChanges" + changes);
    }

    ngAfterContentInit() {
        console.log("ngAfterContentInit");
    }

    ngAfterContentChecked() {
        console.log(this.stat);
        console.log("ngAfterContentChecked");
    }

    ngAfterViewInit() {
        console.log("ngAfterViewInit");
    }

    ngAfterViewChecked() {
        console.log("ngAfterViewChecked");
    }
}

export default GmanComponent;
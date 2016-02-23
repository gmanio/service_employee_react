import {Component,OnInit, OnDestroy} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import InputComponent from "./../input/input";

@Component({
    selector: 'home',
    templateUrl: 'app/component/home/home.html',
    directives: [ROUTER_DIRECTIVES, InputComponent]
})

class HomeComponent implements OnInit, OnDestroy {
    constructor(public router : Router){
        this.router = router;
        console.log('test');
    }

    public onSelect() {
        this.router.navigate(['Gman']);
        //this.router.navigate(['Input']);
        return false;
    }

    onFire(){
        debugger;
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

import {Component,OnInit, OnDestroy, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {Http} from 'angular2/http'

import {GmanComponent} from "./gman";
import {HomeComponent} from "./home";

@Component({
    selector: 'app',
    templateUrl: '/views/app.html',
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true },
    {path: '/index', name: 'Home', component: AppComponent},
])

export class AppComponent implements OnInit, OnDestroy{
    constructor(public router: Router, public http:Http) {

        this.router = router;
        this.http = http;
        //this.router.config([
        //    {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true},
        //    {path: '/home', name: 'Home', component: HomeComponent}
        //]);

        this.setEvent();
    }

    setEvent(){
        document.addEventListener('click', (evt)=>this.onDocument())
    }

    onDocument(e){
        this.router.navigate(['Gman']);
    }

    printCurrentTime() {
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        console.log(h + " : " + m + " : " + s);
    }

    renderTmpl(res) {
        this.nEnd = new Date().getTime();

        console.log(this.nEnd - this.nStart);
        debugger;
    }

    getData() {
        this.nStart = new Date().getTime();
        this.http
        .get('/id?page=100')
        .subscribe(
            (res) => this.renderTmpl(res),
            err => console.error(err),
            () => console.log('done')
        );

        return false;
    }

    onSelect(sType) {
        debugger;
        if (sType == "gman") {
            this.router.navigate(['Gman']);
        }

        if (sType == "home") {
            this.router.navigate(['Home']);
        }

        return false;
    }

    ngOnInit() {
        console.log("AppComponent ngOnInit");
    }

    ngOnDestroy() {
        console.log("ngOnDestroy");
    }
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


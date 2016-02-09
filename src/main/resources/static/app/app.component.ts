import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http'
import {GmanComponent} from "./gman";
import {HomeComponent} from "./home";

@Component({
    selector: 'app',
    templateUrl: '/views/app.html'
})


export class AppComponent {
    constructor(router:Router, http:Http) {
        this.router = router;
        this.router.config([
            {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true},
            {path: '/home', name: 'Home', component: HomeComponent}
        ]);
        this.http = http;
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
        this.http.get('/id?page=100')
            .subscribe(
                (res) => this.renderTmpl(res),
                err => console.error(err),
                () => console.log('done')
            );
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


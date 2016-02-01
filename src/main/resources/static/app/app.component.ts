import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';
import {GmanComponent} from "./gman";
import {HomeComponent} from "./home";

@Component({
    selector: 'app',
    templateUrl: '/html/app.html',
    directives: [GmanComponent, ROUTER_DIRECTIVES, RouterOutlet]
})

@RouteConfig([
    {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true},
    {path: '/home', name: 'Home', component: HomeComponent}
])

export class AppComponent {
    constructor(router:Router) {
        this.router = router;
    }

    onSelect(sType) {
        if(sType == "gman"){
            this.router.navigate(['Gman']);
        }

        if(sType == "home"){
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


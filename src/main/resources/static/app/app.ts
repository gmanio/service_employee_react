import {Component,OnInit, OnDestroy, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http'

import GmanComponent from "./component/gman/gman";
import HomeComponent from "./component/home/home";

@Component({
    selector: 'app',
    templateUrl:'./app/app.html',
    styleUrls:['./app/default.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path: '/', redirectTo: ['/Home']},
    {path: '/gman', name: 'Gman', component: GmanComponent},
    {path: '/home', name: 'Home', component: HomeComponent}
])

class AppComponent implements OnInit, OnDestroy {
    constructor(public router:Router, public http:Http) {
        this.router = router;
        this.http = http;

        this.setEvent();
    }

    setEvent() {
        this.router.navigate(['Home']);
        //document.addEventListener('click', (evt)=>{
        //    if(this.bIsHome){
        //        this.bIsHome = false;
        //        this.goesGman();
        //    }else{
        //        this.bIsHome = true;
        //        this.goesHome();
        //    }
        //})
    }

    //goesHome(){
    //    this.router.navigate(['Home']);
    //    return false;
    //}
    //
    //goesGman(){
    //    this.router.navigate(['Gman']);
    //    return false;
    //}

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
        if (sType == "gman") {
            this.router.navigate(['Gman']);
        }

        if (sType == "home") {
            this.router.navigate(['Home']);
        }

        return false;
    }

    ngOnInit() {
        console.log("init:: AppComponent");
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

export default AppComponent;
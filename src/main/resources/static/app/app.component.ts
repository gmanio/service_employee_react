import {Component} from 'angular2/core';
import {Router,ROUTER_DIRECTIVES, RouteConfig, RouterOutlet} from 'angular2/router';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http'
import {GmanComponent} from "./gman";
import {HomeComponent} from "./home";

@Component({
    selector: 'app',
    templateUrl: '/html/app.html',
    directives: [GmanComponent, RouterOutlet]
})

@RouteConfig([
    {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true},
    {path: '/home', name: 'Home', component: HomeComponent}
])

export class AppComponent {
    constructor(http: Http) {
        //this.router = router;
        this.http = http;
    }

    printCurrentTime(){
        let today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        console.log(h +" : " + m + " : " + s);
    }

    renderTmpl(res){
        this.nEnd = new Date().getTime();
        console.log(this.nEnd - this.nStart);
    }

    onSelect(sType) {
        this.nStart = new Date().getTime();
        this.http.get('/id')
            .subscribe(
                () => this.renderTmpl(),
                err => console.error(err),
                () => console.log('done')
            );
        //this.http.get('/id')
        //    .map((res:Response) => res.json())
        //    .subscribe(
        //        data => { console.log(data)},
        //        err => console.error(err),
        //        () => console.log('done')
        //    );



        //http.get('/id').map((res: Response) => res.json()).subscribe(res => this.result = res);

        //if(sType == "gman"){
        //    this.router.navigate(['Gman']);
        //}
        //
        //if(sType == "home"){
        //    this.router.navigate(['Home']);
        //}

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


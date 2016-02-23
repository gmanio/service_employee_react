import {Component, OnInit, OnDestroy} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    selector: 'gman',
    styleUrls:['./app/component/gman/gman.css'],
    templateUrl: './app/component/gman/gman.html',
    directives: [ROUTER_DIRECTIVES]
})

class GmanComponent implements OnInit, OnDestroy {
    constructor(router:Router, http:Http) {
        this.http  = http;
        this.router = router;
        console.log('test');
    }

    public onSelect() {
        this.router.navigate(['Home']);
        return false;
    }

    public getData() {
        this.http
            .get('/id?page=100')
            .subscribe(
                (res) => this.renderTmpl(res),
                err => console.error(err),
                () => console.log('done')
            );
    }

    public renderTmpl(){
        debugger;
    }

    ngOnInit() {
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
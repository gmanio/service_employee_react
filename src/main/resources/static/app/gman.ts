import {Component,OnInit, OnDestroy} from 'angular2/core';
//import {Http, HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: './views/gman.html'
})

export class GmanComponent implements OnInit, OnDestroy{
    constructor() {
        console.log('test');
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

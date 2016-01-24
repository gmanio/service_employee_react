import {Component, OnInit} from 'angular2/core';


@Component({
    selector: 'my-app',
    templateUrl: './html/gman.html'
})

export class GmanComponent implements OnInit{
    constructor(){
        console.log("testt");
    }

    public onSelect() {
        alert("test");
        debugger;
        return false;
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

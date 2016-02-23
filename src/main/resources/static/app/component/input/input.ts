import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
    selector: 'child',
    template:`<button (click)="fire()">goFire</button>`,
    //directives: [ROUTER_DIRECTIVES]
})

class InputComponent{
    @Input() name : string;
    @Output() onFire = new EventEmitter<boolean>();
    constructor(){
        //this.fire();
        console.log('input Init')
    }

    fire(){
        this.onFire.emit(true);
    }
}

export default InputComponent;
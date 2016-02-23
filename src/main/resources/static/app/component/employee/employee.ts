import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

@Component({
    selector: 'gman',
    styleUrls:['./app/component/gman/gman.css'],
    templateUrl: './app/component/gman/gman.html',
    directives: [ROUTER_DIRECTIVES]
})

class Employee{

    constructor(router:Router, http:Http){

    }
}

export default Employee;
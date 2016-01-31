var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var app_component_1 = require("./app.component");
//import {Http, HTTP_PROVIDERS} from 'angular2/http';
var GmanComponent = (function () {
    function GmanComponent(_router) {
        this._router = _router;
        this._router = _router;
        //this._http = _http;
        console.log("testt");
    }
    GmanComponent.prototype.onSelect = function () {
        //this._router.parent.hostComponent();
        //this._router.navigate(["AppComponent"]);
        return false;
    };
    GmanComponent.prototype.ngOnInit = function () {
        //let test = this._http.get("/id");
        //debugger;
        console.log("ngOnInit");
    };
    GmanComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    GmanComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    GmanComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges" + changes);
    };
    GmanComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    GmanComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    GmanComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    GmanComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    GmanComponent = __decorate([
        core_1.Component({
            selector: 'div',
            templateUrl: './html/gman.html'
        }),
        router_1.RouteConfig([
            { path: '/index', component: app_component_1.AppComponent, name: 'AppComponent' }
        ])
    ], GmanComponent);
    return GmanComponent;
})();
exports.GmanComponent = GmanComponent;
//# sourceMappingURL=gman.js.map
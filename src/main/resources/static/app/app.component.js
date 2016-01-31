var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var AppComponent = (function () {
    function AppComponent() {
        debugger;
        //this.router = router;
        //this.router.config([
        //    { path: '/gman', component : GmanComponent, name:'GmanComponent' }
        //]);
    }
    AppComponent.prototype.onSelect = function () {
        console.log("tt");
        //this.router.navigate(['GmanComponent']);
        return false;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log("AppComponent ngOnInit");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/html/app.html',
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        router_1.RouteConfig([
            {}
        ].concat())
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
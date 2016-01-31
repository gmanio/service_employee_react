var browser_1 = require('angular2/platform/browser');
var router_1 = require('angular2/router');
var app_component_1 = require('./app.component');
var core_1 = require('angular2/core');
browser_1.bootstrap(app_component_1.AppComponent, [
    router_1.ROUTER_PROVIDERS,
    router_1.PathLocationStrategy,
    core_1.provide(router_1.APP_BASE_HREF, { useValue: '/' })
]);
//# sourceMappingURL=boot.js.map
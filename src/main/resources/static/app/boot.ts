import {bootstrap} from 'angular2/platform/browser';
import {RouteConfig,ROUTER_DIRECTIVES, APP_BASE_HREF, ROUTER_PROVIDERS, PathLocationStrategy} from 'angular2/router';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide} from 'angular2/core';
import {GmanComponent} from "./gman";
import {HomeComponent} from "./home";

@RouteConfig([
    {path: '/gman', name: 'Gman', component: GmanComponent, useAsDefault: true},
    {path: '/home', name: 'Home', component: HomeComponent}
]);

bootstrap(AppComponent,[
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS
]);

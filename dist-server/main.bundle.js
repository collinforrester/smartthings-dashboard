(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../../src/api/app.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// import * as db from './db';
var base = 'http://localhost:3000';
var App = (function () {
    function App() {
    }
    App.prototype.getDevices = function () {
        return [
            { id: 1, title: 'json-server', author: 'typicode' }
        ];
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-light navbar-fixed-top navbar-expand-lg navbar-dark bg-dark\">\n\n  <a class=\"navbar-brand\" [routerLink]=\"['/']\" (click)=\"navbarCollapsed = true\">SmartThings</a>\n\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" (click)=\"navbarCollapsed = !navbarCollapsed\"\n          [attr.aria-expanded]=\"!navbarCollapsed\" aria-controls=\"navbarContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"navbar-collapse\" [ngbCollapse]=\"navbarCollapsed\" id=\"navbarContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['/events']\" (click)=\"navbarCollapsed = true\">Events</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['/devices']\" (click)=\"navbarCollapsed = true\">Devices</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" [routerLink]=\"['/about']\" (click)=\"navbarCollapsed = true\">About</a>\n      </li>\n    </ul>\n  </div>\n</header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/transfer-state.ts");
var transfer_http_1 = __webpack_require__("../../../../../src/modules/transfer-http/transfer-http.ts");
var common_1 = __webpack_require__("@angular/common");
var AppComponent = (function () {
    function AppComponent(platformId, http, cache) {
        this.platformId = platformId;
        this.http = http;
        this.cache = cache;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.cache.set('cached', true);
        if (common_1.isPlatformBrowser(this.platformId)) {
            console.log('[AppComponent]: executing in browser.');
        }
        else {
            console.log('[AppComponent]: executing on server.');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __param(0, core_1.Inject(core_1.PLATFORM_ID)),
    __metadata("design:paramtypes", [Object, typeof (_a = typeof transfer_http_1.TransferHttp !== "undefined" && transfer_http_1.TransferHttp) === "function" && _a || Object, typeof (_b = typeof transfer_state_1.TransferState !== "undefined" && transfer_state_1.TransferState) === "function" && _b || Object])
], AppComponent);
exports.AppComponent = AppComponent;
var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var service_module_1 = __webpack_require__("../../../../../src/app/service/service.module.ts");
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var http_1 = __webpack_require__("@angular/http");
var router_1 = __webpack_require__("@angular/router");
var forms_1 = __webpack_require__("@angular/forms");
// import { HomeView } from './home/home-view.component';
var transfer_http_module_1 = __webpack_require__("../../../../../src/modules/transfer-http/transfer-http.module.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/home/home.component.ts");
var ng_bootstrap_1 = __webpack_require__("@ng-bootstrap/ng-bootstrap");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            home_component_1.HomeComponent
            // HomeView
        ],
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            transfer_http_module_1.TransferHttpModule,
            service_module_1.ServiceModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                { path: '', redirectTo: '/events', pathMatch: 'full' },
                { path: 'events', component: home_component_1.HomeComponent, pathMatch: 'full' },
                { path: 'devices', loadChildren: './device/device.module#DeviceModule' }
            ]),
            ng_bootstrap_1.NgbModule.forRoot()
        ],
        providers: [],
        exports: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.server.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var platform_server_1 = __webpack_require__("@angular/platform-server");
var server_transfer_state_module_1 = __webpack_require__("../../../../../src/modules/transfer-state/server-transfer-state.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/transfer-state.ts");
var server_1 = __webpack_require__("preboot/server");
var platform_browser_1 = __webpack_require__("@angular/platform-browser");
function onPrebootClick() {
    console.log('[oreboot]: recorded click event on body.');
}
exports.onPrebootClick = onPrebootClick;
function onBootstrap(appRef, transferState) {
    return function () {
        appRef.isStable
            .subscribe(function () {
            transferState.inject();
        });
    };
}
exports.onBootstrap = onBootstrap;
var AppServerModule = (function () {
    function AppServerModule() {
    }
    return AppServerModule;
}());
AppServerModule = __decorate([
    core_1.NgModule({
        bootstrap: [app_component_1.AppComponent],
        providers: [
            {
                provide: core_1.APP_BOOTSTRAP_LISTENER,
                useFactory: onBootstrap,
                multi: true,
                deps: [
                    core_1.ApplicationRef,
                    transfer_state_1.TransferState
                ]
            },
            { provide: 'ORIGIN_URL', useValue: 'http://localhost:8000' }
        ],
        imports: [
            platform_browser_1.BrowserModule.withServerTransition({
                appId: 'smartthings'
            }),
            server_1.ServerPrebootModule.recordEvents({
                appRoot: 'app-root',
                eventSelectors: [{
                        selector: 'body',
                        events: ['click'],
                        freeze: true
                    }]
            }),
            platform_server_1.ServerModule,
            server_transfer_state_module_1.ServerTransferStateModule,
            app_module_1.AppModule
        ]
    })
], AppServerModule);
exports.AppServerModule = AppServerModule;
//# sourceMappingURL=app.server.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm\">\n    <br>\n      <form (ngSubmit)=\"onSubmit()\" class=\"form-inline\">\n        <label for=\"query\" class=\"mr-sm-2\">Search</label>\n        <input required [(ngModel)]=\"query\" type=\"text\" name='query' class=\"form-control mb-2 mr-sm-2 mb-sm-0\" id=\"query\" placeholder=\"Event text\">\n        <button type=\"submit\" class=\"mr-sm-1 btn btn-primary\">Search</button>\n        <button (click)=\"clear()\" class=\"btn btn-secondary\">Clear</button>\n      </form>\n      <br>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm\">\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>ID</th>\n          <th>Name</th>\n          <th>Value</th>\n          <th>Text</th>\n          <th>Date</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let event of events, let i = index\">\n          <th scope=\"row\">{{i + 1}}</th>\n          <td>{{event.name}}</td>\n          <td>{{event.value}}</td>\n          <td>{{event.text}}</td>\n          <td>{{event.date | date:'short'}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_service_1 = __webpack_require__("../../../../../src/app/service/event.service.ts");
var core_1 = __webpack_require__("@angular/core");
var router_1 = __webpack_require__("@angular/router");
var HomeComponent = (function () {
    function HomeComponent(EventService, router, activatedRoute) {
        this.EventService = EventService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.queryKey = 'q';
        this.query = '';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute
            .queryParams
            .subscribe(function (params) {
            if (params[_this.queryKey]) {
                _this.query = params[_this.queryKey];
            }
        });
        this.search();
    };
    HomeComponent.prototype.clear = function () {
        this.query = '';
    };
    HomeComponent.prototype.search = function () {
        var _this = this;
        this.EventService.getEvents({
            query: this.query
        })
            .subscribe(function (data) {
            _this.events = data;
        });
    };
    HomeComponent.prototype.onSubmit = function () {
        var queryParams = {};
        queryParams[this.queryKey] = this.query;
        this.router.navigate(['events'], { queryParams: queryParams });
        this.search();
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof event_service_1.EventService !== "undefined" && event_service_1.EventService) === "function" && _a || Object, typeof (_b = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _b || Object, typeof (_c = typeof router_1.ActivatedRoute !== "undefined" && router_1.ActivatedRoute) === "function" && _c || Object])
], HomeComponent);
exports.HomeComponent = HomeComponent;
var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/service/device.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var transfer_http_1 = __webpack_require__("../../../../../src/modules/transfer-http/transfer-http.ts");
var DeviceService = (function () {
    function DeviceService(http) {
        this.http = http;
    }
    DeviceService.prototype.getDevices = function () {
        return this.http.get("/api/devices");
    };
    return DeviceService;
}());
DeviceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof transfer_http_1.TransferHttp !== "undefined" && transfer_http_1.TransferHttp) === "function" && _a || Object])
], DeviceService);
exports.DeviceService = DeviceService;
var _a;
//# sourceMappingURL=device.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/event.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var transfer_http_1 = __webpack_require__("../../../../../src/modules/transfer-http/transfer-http.ts");
var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function (options) {
        if (options === void 0) { options = { query: '' }; }
        return this.http
            .get("/api/events?q=" + options.query + "&_sort=date&_order=desc&_limit=25");
    };
    return EventService;
}());
EventService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof transfer_http_1.TransferHttp !== "undefined" && transfer_http_1.TransferHttp) === "function" && _a || Object])
], EventService);
exports.EventService = EventService;
var _a;
//# sourceMappingURL=event.service.js.map

/***/ }),

/***/ "../../../../../src/app/service/service.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var common_1 = __webpack_require__("@angular/common");
var device_service_1 = __webpack_require__("../../../../../src/app/service/device.service.ts");
var event_service_1 = __webpack_require__("../../../../../src/app/service/event.service.ts");
var ServiceModule = (function () {
    function ServiceModule() {
    }
    return ServiceModule;
}());
ServiceModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [],
        providers: [device_service_1.DeviceService, event_service_1.EventService]
    })
], ServiceModule);
exports.ServiceModule = ServiceModule;
//# sourceMappingURL=service.module.js.map

/***/ }),

/***/ "../../../../../src/main.server.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__("zone.js/dist/zone-node");
__webpack_require__("reflect-metadata");
__webpack_require__("rxjs/Rx");
var express = __webpack_require__("express");
var app_server_module_1 = __webpack_require__("../../../../../src/app/app.server.module.ts");
var express_engine_1 = __webpack_require__("@nguniversal/express-engine");
var routes_1 = __webpack_require__("../../../../../src/routes.ts");
var app_1 = __webpack_require__("../../../../../src/api/app.ts");
var core_1 = __webpack_require__("@angular/core");
var jsonServer = __webpack_require__("json-server");
core_1.enableProdMode();
var app = express();
var api = new app_1.App();
var port = 8000;
var baseUrl = "http://localhost:" + port;
app.engine('html', express_engine_1.ngExpressEngine({
    bootstrap: app_server_module_1.AppServerModule
}));
app.set('view engine', 'html');
app.set('views', 'src');
app.use('/', express.static('dist', { index: false }));
routes_1.ROUTES.forEach(function (route) {
    app.get(route, function (req, res) {
        console.time("GET: " + req.originalUrl);
        res.render('../dist/index', {
            req: req,
            res: res,
        });
        console.timeEnd("GET: " + req.originalUrl);
    });
});
app.use('/api', jsonServer.router('/Users/collin/code/hdc/smartthings-dashboard/src/api/db.json'));
app.listen(8000, function () {
    console.log("Listening at " + baseUrl);
});
//# sourceMappingURL=main.server.js.map

/***/ }),

/***/ "../../../../../src/modules/transfer-http/transfer-http.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var transfer_http_1 = __webpack_require__("../../../../../src/modules/transfer-http/transfer-http.ts");
var TransferHttpModule = (function () {
    function TransferHttpModule() {
    }
    return TransferHttpModule;
}());
TransferHttpModule = __decorate([
    core_1.NgModule({
        providers: [
            transfer_http_1.TransferHttp
        ]
    })
], TransferHttpModule);
exports.TransferHttpModule = TransferHttpModule;
//# sourceMappingURL=transfer-http.module.js.map

/***/ }),

/***/ "../../../../../src/modules/transfer-http/transfer-http.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var http_1 = __webpack_require__("@angular/http");
var Observable_1 = __webpack_require__("rxjs/Observable");
var transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/transfer-state.ts");
__webpack_require__("rxjs/add/operator/map");
__webpack_require__("rxjs/add/operator/do");
__webpack_require__("rxjs/add/observable/fromPromise");
var TransferHttp = (function () {
    function TransferHttp(originUrl, http, transferState) {
        this.originUrl = originUrl;
        this.http = http;
        this.transferState = transferState;
    }
    TransferHttp.prototype.request = function (uri, options) {
        var _this = this;
        return this.getData(uri, options, function (url, options) {
            return _this.http.request(url, options);
        });
    };
    /**
     * Performs a request with `get` http method.
     */
    TransferHttp.prototype.get = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.get(url, options);
        });
    };
    /**
     * Performs a request with `post` http method.
     */
    TransferHttp.prototype.post = function (url, body, options) {
        var _this = this;
        return this.getPostData(url, body, options, function (url, options) {
            return _this.http.post(url, body.options);
        });
    };
    /**
     * Performs a request with `put` http method.
     */
    TransferHttp.prototype.put = function (url, body, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.put(url, options);
        });
    };
    /**
     * Performs a request with `delete` http method.
     */
    TransferHttp.prototype.delete = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.delete(url, options);
        });
    };
    /**
     * Performs a request with `patch` http method.
     */
    TransferHttp.prototype.patch = function (url, body, options) {
        var _this = this;
        return this.getPostData(url, body, options, function (url, options) {
            return _this.http.patch(url, body.options);
        });
    };
    /**
     * Performs a request with `head` http method.
     */
    TransferHttp.prototype.head = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.head(url, options);
        });
    };
    /**
     * Performs a request with `options` http method.
     */
    TransferHttp.prototype.options = function (url, options) {
        var _this = this;
        return this.getData(url, options, function (url, options) {
            return _this.http.options(url, options);
        });
    };
    TransferHttp.prototype.getData = function (uri, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        console.log(uri, url);
        var absoluteUrl = "" + this.originUrl + url;
        var key = absoluteUrl + JSON.stringify(options);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            if (typeof uri === 'string') {
                uri = absoluteUrl;
            }
            else {
                uri.url = absoluteUrl;
            }
            return callback(uri, options)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.setCache(key, data);
            });
        }
    };
    TransferHttp.prototype.getPostData = function (uri, body, options, callback) {
        var _this = this;
        var url = uri;
        if (typeof uri !== 'string') {
            url = uri.url;
        }
        var key = url + JSON.stringify(body) + JSON.stringify(options);
        try {
            return this.resolveData(key);
        }
        catch (e) {
            return callback(uri, body, options)
                .map(function (res) { return res.json(); })
                .do(function (data) {
                _this.setCache(key, data);
            });
        }
    };
    TransferHttp.prototype.resolveData = function (key) {
        var data = this.getFromCache(key);
        if (!data) {
            throw new Error();
        }
        return Observable_1.Observable.fromPromise(Promise.resolve(data));
    };
    TransferHttp.prototype.setCache = function (key, data) {
        return this.transferState.set(key, data);
    };
    TransferHttp.prototype.getFromCache = function (key) {
        return this.transferState.get(key);
    };
    return TransferHttp;
}());
TransferHttp = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('ORIGIN_URL')),
    __metadata("design:paramtypes", [String, typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object, typeof (_b = typeof transfer_state_1.TransferState !== "undefined" && transfer_state_1.TransferState) === "function" && _b || Object])
], TransferHttp);
exports.TransferHttp = TransferHttp;
var _a, _b;
//# sourceMappingURL=transfer-http.js.map

/***/ }),

/***/ "../../../../../src/modules/transfer-state/server-transfer-state.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var server_transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/server-transfer-state.ts");
var transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/transfer-state.ts");
var ServerTransferStateModule = (function () {
    function ServerTransferStateModule() {
    }
    return ServerTransferStateModule;
}());
ServerTransferStateModule = __decorate([
    core_1.NgModule({
        providers: [
            { provide: transfer_state_1.TransferState, useClass: server_transfer_state_1.ServerTransferState }
        ]
    })
], ServerTransferStateModule);
exports.ServerTransferStateModule = ServerTransferStateModule;
//# sourceMappingURL=server-transfer-state.module.js.map

/***/ }),

/***/ "../../../../../src/modules/transfer-state/server-transfer-state.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var transfer_state_1 = __webpack_require__("../../../../../src/modules/transfer-state/transfer-state.ts");
var platform_server_1 = __webpack_require__("@angular/platform-server");
var ServerTransferState = (function (_super) {
    __extends(ServerTransferState, _super);
    function ServerTransferState(state, rendererFactory) {
        var _this = _super.call(this) || this;
        _this.state = state;
        _this.rendererFactory = rendererFactory;
        return _this;
    }
    /**
     * Inject the State into the bottom of the <head>
     */
    ServerTransferState.prototype.inject = function () {
        try {
            var document = this.state.getDocument();
            var transferStateString = JSON.stringify(this.toJson());
            var renderer = this.rendererFactory.createRenderer(document, {
                id: '-1',
                encapsulation: core_1.ViewEncapsulation.None,
                styles: [],
                data: {}
            });
            var head = document.head;
            if (head.name !== 'head') {
                throw new Error('Please have <head> as the first element in your document');
            }
            var script = renderer.createElement('script');
            renderer.setValue(script, "window['TRANSFER_STATE'] = " + transferStateString);
            renderer.appendChild(head, script);
        }
        catch (e) {
            console.error(e);
        }
    };
    return ServerTransferState;
}(transfer_state_1.TransferState));
ServerTransferState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof platform_server_1.PlatformState !== "undefined" && platform_server_1.PlatformState) === "function" && _a || Object, typeof (_b = typeof core_1.RendererFactory2 !== "undefined" && core_1.RendererFactory2) === "function" && _b || Object])
], ServerTransferState);
exports.ServerTransferState = ServerTransferState;
var _a, _b;
//# sourceMappingURL=server-transfer-state.js.map

/***/ }),

/***/ "../../../../../src/modules/transfer-state/transfer-state.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("@angular/core");
var TransferState = (function () {
    function TransferState() {
        this._map = new Map();
    }
    TransferState.prototype.keys = function () {
        return this._map.keys();
    };
    TransferState.prototype.get = function (key) {
        return this._map.get(key);
    };
    TransferState.prototype.set = function (key, value) {
        return this._map.set(key, value);
    };
    TransferState.prototype.toJson = function () {
        var _this = this;
        var obj = {};
        Array.from(this.keys())
            .forEach(function (key) {
            obj[key] = _this.get(key);
        });
        return obj;
    };
    TransferState.prototype.initialize = function (obj) {
        var _this = this;
        Object.keys(obj)
            .forEach(function (key) {
            _this.set(key, obj[key]);
        });
    };
    TransferState.prototype.inject = function () { };
    return TransferState;
}());
TransferState = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TransferState);
exports.TransferState = TransferState;
//# sourceMappingURL=transfer-state.js.map

/***/ }),

/***/ "../../../../../src/routes.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ROUTES = [
    '/',
    '/events',
    '/devices',
    '/home'
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.server.ts");


/***/ }),

/***/ "@angular/common":
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/forms":
/***/ (function(module, exports) {

module.exports = require("@angular/forms");

/***/ }),

/***/ "@angular/http":
/***/ (function(module, exports) {

module.exports = require("@angular/http");

/***/ }),

/***/ "@angular/platform-browser":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-server":
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@ng-bootstrap/ng-bootstrap":
/***/ (function(module, exports) {

module.exports = require("@ng-bootstrap/ng-bootstrap");

/***/ }),

/***/ "@nguniversal/express-engine":
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "json-server":
/***/ (function(module, exports) {

module.exports = require("json-server");

/***/ }),

/***/ "preboot/server":
/***/ (function(module, exports) {

module.exports = require("preboot/server");

/***/ }),

/***/ "reflect-metadata":
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "rxjs/Observable":
/***/ (function(module, exports) {

module.exports = require("rxjs/Observable");

/***/ }),

/***/ "rxjs/Rx":
/***/ (function(module, exports) {

module.exports = require("rxjs/Rx");

/***/ }),

/***/ "rxjs/add/observable/fromPromise":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/observable/fromPromise");

/***/ }),

/***/ "rxjs/add/operator/do":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/do");

/***/ }),

/***/ "rxjs/add/operator/map":
/***/ (function(module, exports) {

module.exports = require("rxjs/add/operator/map");

/***/ }),

/***/ "zone.js/dist/zone-node":
/***/ (function(module, exports) {

module.exports = require("zone.js/dist/zone-node");

/***/ })

/******/ })));
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-menu></app-nav-menu>\r\n\r\n<div class=\"dimmed pusher\">\r\n  <div class=\"ui container pt-1x\" #container>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/nav-menu/nav-menu.component */ "./src/app/shared/components/nav-menu/nav-menu.component.ts");
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/projects/projects.component */ "./src/app/routes/projects/projects.component.ts");
/* harmony import */ var _routes_photography_photography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/photography/photography.component */ "./src/app/routes/photography/photography.component.ts");
/* harmony import */ var _routes_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/blog/blog.component */ "./src/app/routes/blog/blog.component.ts");
/* harmony import */ var _routes_home_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/home/timeline/timeline.component */ "./src/app/routes/home/timeline/timeline.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_5__["NavMenuComponent"],
                _routes_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _routes_projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"],
                _routes_photography_photography_component__WEBPACK_IMPORTED_MODULE_8__["PhotographyComponent"],
                _routes_blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"],
                _routes_home_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_3__["routes"], { useHash: true }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouteReuseStrategy"], useClass: _app_routes__WEBPACK_IMPORTED_MODULE_3__["CustomReuseStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routes, CustomReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomReuseStrategy", function() { return CustomReuseStrategy; });
/* harmony import */ var _routes_home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/home/home.component */ "./src/app/routes/home/home.component.ts");
/* harmony import */ var _routes_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes/projects/projects.component */ "./src/app/routes/projects/projects.component.ts");


var routes = [
    { path: 'home', component: _routes_home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'projects', component: _routes_projects_projects_component__WEBPACK_IMPORTED_MODULE_1__["ProjectsComponent"] },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
var CustomReuseStrategy = /** @class */ (function () {
    function CustomReuseStrategy() {
        this.handlers = {};
    }
    CustomReuseStrategy.prototype.shouldDetach = function (route) {
        return true;
    };
    CustomReuseStrategy.prototype.store = function (route, handle) {
        this.handlers[route.routeConfig.path] = handle;
    };
    CustomReuseStrategy.prototype.shouldAttach = function (route) {
        return !!route.routeConfig && !!this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.retrieve = function (route) {
        if (!route.routeConfig) {
            return null;
        }
        return this.handlers[route.routeConfig.path];
    };
    CustomReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        return future.routeConfig === curr.routeConfig;
    };
    return CustomReuseStrategy;
}());



/***/ }),

/***/ "./src/app/routes/blog/blog.component.css":
/*!************************************************!*\
  !*** ./src/app/routes/blog/blog.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9ibG9nL2Jsb2cuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/routes/blog/blog.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/blog/blog.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"ui center aligned icon header mt-10x\">\n  <i class=\"settings icon\"></i>\n  <div class=\"content\">\n    Coming Soon..\n  </div>\n</h2>\n"

/***/ }),

/***/ "./src/app/routes/blog/blog.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/blog/blog.component.ts ***!
  \***********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/routes/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/routes/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/home.component.css":
/*!************************************************!*\
  !*** ./src/app/routes/home/home.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.tiny-margin {\n  margin: 2px;\n}\n\n#mountainsElement {\n  width: 100%;\n  height: 100%;\n  left: 0;\n  bottom: 0;\n  overflow: hidden;\n  position: fixed;\n  opacity: .8;\n  z-index: -1;\n  background: url('mountain.svg');\n  background-repeat: repeat-x;\n  background-position: bottom;\n  background-size: 100px;\n}\n\n#sunElement {\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  left: 100px;\n  bottom: 100px;\n  opacity: .6;\n  z-index: -1;\n  background: url('sun.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: all 500ms ease-in;\n}\n\n#moonElement {\n  width: 100px;\n  height: 100px;\n  position: fixed;\n  right: 100px;\n  bottom: 100px;\n  opacity: .6;\n  z-index: -1;\n  background: url('moon.svg');\n  background-repeat: no-repeat;\n  background-size: contain;\n  transition: all 500ms ease-in;\n}\n\n#birdsElement {\n  position: fixed;\n  left: 0;\n  bottom: 20px;\n  width: 100%;\n  height: 80px;\n  opacity: .8;\n  z-index: -1;\n  background-image: url('birds.gif');\n  background-size: 100px 80px;\n  background-repeat: no-repeat;\n  will-change: background-position;\n  -webkit-animation-name: fly-cycle;\n          animation-name: fly-cycle;\n  -webkit-animation-timing-function: linear;\n          animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-duration: 15s;\n          animation-duration: 15s;\n}\n\n@-webkit-keyframes fly-cycle {\n  0% {\n    background-position-x: 125%;\n  }\n  100% {\n    background-position-x: -100px;\n  }\n}\n\n@keyframes fly-cycle {\n  0% {\n    background-position-x: 125%;\n  }\n  100% {\n    background-position-x: -100px;\n  }\n}\n\n@media only screen and (max-width: 700px) {\n  #sunElement {\n    width: 100px;\n    height: 100px;\n    left: 50px;\n  }\n\n  #moonElement {\n    width: 50px;\n    height: 50px;\n    right: 50px;\n  }\n\n  #birdsElement {\n    -webkit-animation-duration: 10s;\n            animation-duration: 10s;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsK0JBQTBEO0VBQzFELDJCQUEyQjtFQUMzQiwyQkFBMkI7RUFDM0Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLDBCQUFxRDtFQUNyRCw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsV0FBVztFQUNYLFdBQVc7RUFDWCwyQkFBc0Q7RUFDdEQsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0NBQTZEO0VBQzdELDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0VBQ2hDLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLCtCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0VBQ2I7O0VBRUE7SUFDRSwrQkFBdUI7WUFBdkIsdUJBQXVCO0VBQ3pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4udGlueS1tYXJnaW4ge1xuICBtYXJnaW46IDJweDtcbn1cblxuI21vdW50YWluc0VsZW1lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgb3BhY2l0eTogLjg7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9tb3VudGFpbi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMHB4O1xufVxuXG4jc3VuRWxlbWVudCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAxMDBweDtcbiAgYm90dG9tOiAxMDBweDtcbiAgb3BhY2l0eTogLjY7XG4gIHotaW5kZXg6IC0xO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3N2Zy9zdW4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluO1xufVxuXG4jbW9vbkVsZW1lbnQge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDEwMHB4O1xuICBib3R0b206IDEwMHB4O1xuICBvcGFjaXR5OiAuNjtcbiAgei1pbmRleDogLTE7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvc3ZnL21vb24uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluO1xufVxuXG4jYmlyZHNFbGVtZW50IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG9wYWNpdHk6IC44O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2dpZi9iaXJkcy5naWYnKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDBweCA4MHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICB3aWxsLWNoYW5nZTogYmFja2dyb3VuZC1wb3NpdGlvbjtcbiAgYW5pbWF0aW9uLW5hbWU6IGZseS1jeWNsZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XG59XG5cbkBrZXlmcmFtZXMgZmx5LWN5Y2xlIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMTI1JTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IC0xMDBweDtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICNzdW5FbGVtZW50IHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG5cbiAgI21vb25FbGVtZW50IHtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcmlnaHQ6IDUwcHg7XG4gIH1cblxuICAjYmlyZHNFbGVtZW50IHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgfVxuXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/routes/home/home.component.html":
/*!*************************************************!*\
  !*** ./src/app/routes/home/home.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sunElement\" *ngIf=\"isDaytime == true\"></div>\n<div id=\"moonElement\" *ngIf=\"isDaytime == false\"></div>\n<div id=\"birdsElement\"></div>\n<div id=\"mountainsElement\"></div>\n<div class=\"row font-color-light mt-10x\">\n  <h1 id=\"nameTypeit\" class=\"font-size-8x\"></h1>\n  <p id=\"nameSubTypeit\" class=\"font-size-4x\" style=\"min-height: 4em;\"></p>\n</div>\n<div class=\"row mt-5x\">\n  <div class=\"ui horizontal stacked segments\">\n    <div class=\"ui segment\">\n      <h4 class=\"ui center aligned icon header\">\n        <i class=\"graduation cap icon\"></i>\n        <div class=\"content\">\n          Education\n        </div>\n        <div class=\"sub header pt-2x\">\n          <p class=\"font-size-2x font-color-primary mb-1x\"><strong>Bachelor of Science, Physics</strong></p>\n          <p class=\"font-size-2x font-color-primary mb-1x\">( Minor degree in A.I. )</p>\n          <p class=\"font-size-2x font-color-secondary\"><strong>IIT Kanpur</strong></p>\n          <p><i>(2012-2017)</i></p>\n        </div>\n      </h4>\n    </div>\n    <div class=\"ui segment\">\n      <h4 class=\"ui center aligned icon header\">\n        <i class=\"heart outline icon\"></i>\n        <div class=\"content\">\n          Interests\n        </div>\n      </h4>\n      <div class=\"text-center pt-2x\">\n        <p class=\"font-size-2x mb-1x\"><strong>Software Architecture</strong></p>\n        <p class=\"font-size-2x mb-1x\"><strong>UI/UX</strong></p>\n        <p class=\"font-size-2x mb-1x\">\n          <strong>Photography</strong>\n          <a href=\"https://www.instagram.com/himanshuchoudhary_/\" target=\"_blank\" class=\"ml-1x\"><i class=\"blue circular link instagram icon\"></i></a>\n        </p>\n      </div>\n    </div>\n    <div class=\"ui segment\">\n      <h4 class=\"ui center aligned icon header\">\n        <i class=\"code icon\"></i>\n        <div class=\"content\">\n          Skills\n        </div>\n      </h4>\n      <div class=\"text-center\">\n        <div class=\"ui small label tiny-margin\"><i class=\"whmcs icon\"></i> API</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"user secret icon\"></i> OAuth2.0</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"envira icon\"></i> Spring</div>\n        <br>\n        <div class=\"ui small label tiny-margin\"><i class=\"angular icon\"></i> Angular</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"twitter icon\"></i> Bootstrap</div>\n        <br>\n        <div class=\"ui small label tiny-margin\"><i class=\"docker icon\"></i> Docker</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"git icon\"></i> Git</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"database icon\"></i> SQL</div>\n        <br>\n        <div class=\"ui small label tiny-margin\"><i class=\"python icon\"></i> Python</div>\n        <div class=\"ui small label tiny-margin\"><i class=\"images icon\"></i> Lightroom</div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row mt-5x\">\n  <div class=\"ui piled segment pt-5x pb-5x\">\n    <app-timeline></app-timeline>\n  </div>\n</div>\n<div class=\"row mt-5x pb-10x text-center\">\n  <a href=\"https://www.instagram.com/himanshuchoudhary_/\" target=\"_blank\" class=\"ui circular instagram big icon button\">\n    <i class=\"instagram icon\"></i>\n  </a>\n  <a href=\"mailto:hc12298@gmail.com\" target=\"_blank\" class=\"ui circular big icon button ml-5x\">\n    <i class=\"mail icon\"></i>\n  </a>\n  <a href=\"https://in.linkedin.com/in/himanshu-choudhary-05b617a8\" target=\"_blank\" class=\"ui circular linkedin big icon button ml-5x\">\n    <i class=\"linkedin icon\"></i>\n  </a>\n  <a href=\"https://github.com/choudharyhimanshu\" target=\"_blank\" class=\"ui circular google big icon button ml-5x\">\n    <i class=\"github icon\"></i>\n  </a>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/home/home.component.ts":
/*!***********************************************!*\
  !*** ./src/app/routes/home/home.component.ts ***!
  \***********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typeit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeit */ "./node_modules/typeit/dist/typeit.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.timeScroll = 0;
    }
    HomeComponent.prototype.updateTimeElements = function () {
        var now = new Date();
        var totalHeight = window.outerHeight;
        // const totalHeight = this.containerEle.nativeElement.offsetHeight;
        if (now.getHours() >= 5 && now.getHours() <= 18) {
            this.isDaytime = true;
            this.timeScroll = (totalHeight) * ((now.getHours() - 5 + (now.getMinutes() / 60.0)) / 15.0);
        }
        else {
            this.isDaytime = false;
            if (now.getHours() > 18) {
                this.timeScroll = (totalHeight) * ((now.getHours() - 19 + (now.getMinutes() / 60.0)) / 11.0);
            }
            else {
                this.timeScroll = (totalHeight) * ((now.getHours() + 6 + (now.getMinutes() / 60.0)) / 11.0);
            }
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        new typeit__WEBPACK_IMPORTED_MODULE_1__["default"]('#nameTypeit', {
            speed: 60,
            autoStart: false,
            html: true,
            strings: ['Hi, I am <span class="font-color-primary">Himanshu</span>.'],
            afterComplete: function (instance) {
                $('#nameTypeit').find('.ti-cursor').addClass('display-none');
                return new typeit__WEBPACK_IMPORTED_MODULE_1__["default"]('#nameSubTypeit', {
                    speed: 50,
                    autoStart: false,
                    html: true,
                    strings: [
                        'I define myself as a <strong>Software Engineer</strong> with a good sense of UI & UX.',
                        'Currently contributing in the digital transformation at <a target="_blank" href="http://www.socgensolutions.com/">Société Générale</a>.'
                    ]
                });
            }
        }).pause(500);
        setInterval(function () {
            _this.updateTimeElements();
        }, 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], HomeComponent.prototype, "containerEle", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/routes/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/routes/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/routes/home/timeline/timeline.component.css":
/*!*************************************************************!*\
  !*** ./src/app/routes/home/timeline/timeline.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.timeline {\n  font-size: 1.2em;\n}\n\n.timeline.mobile {\n  display: none;\n}\n\n.timeline .column {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.timeline .event .description {\n  padding-bottom: 50px;\n}\n\n.timeline .event.long .description {\n  padding-bottom: 80px;\n}\n\n.timeline .location {\n  font-size: .8em;\n}\n\n.timeline .line {\n  width: 0px;\n  height: 100%;\n  margin: 16px auto -1px auto;\n  border-width: 1px;\n  border-style: solid;\n}\n\n.timeline .line i {\n  position: absolute;\n  top: 0;\n  margin-left: -10px;\n}\n\n.timeline .line.dashed {\n  border-style: dashed;\n}\n\n@media only screen and (max-width: 480px) {\n\n  .timeline {\n    display: none;\n  }\n\n  .timeline.mobile {\n    display: initial;\n  }\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL2hvbWUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUdBOztFQUVFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcm91dGVzL2hvbWUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRpbWVsaW5lIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLnRpbWVsaW5lLm1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50aW1lbGluZSAuY29sdW1uIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4udGltZWxpbmUgLmV2ZW50IC5kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGltZWxpbmUgLmV2ZW50LmxvbmcgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG5cbi50aW1lbGluZSAubG9jYXRpb24ge1xuICBmb250LXNpemU6IC44ZW07XG59XG5cbi50aW1lbGluZSAubGluZSB7XG4gIHdpZHRoOiAwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAxNnB4IGF1dG8gLTFweCBhdXRvO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLnRpbWVsaW5lIC5saW5lIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4udGltZWxpbmUgLmxpbmUuZGFzaGVkIHtcbiAgYm9yZGVyLXN0eWxlOiBkYXNoZWQ7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuXG4gIC50aW1lbGluZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC50aW1lbGluZS5tb2JpbGUge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/routes/home/timeline/timeline.component.html":
/*!**************************************************************!*\
  !*** ./src/app/routes/home/timeline/timeline.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"timeline\">\n\n  <div class=\"ui grid event\">\n    <div class=\"three wide column date right aligned font-color-primary\">19<sup>th</sup> June, 2017</div>\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-primary\"></i>\n      </div>\n    </div>\n    <div class=\"twelve wide column description\">\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"http://www.socgensolutions.com/\">Société Générale</a> as a <strong>Senior Software Engineer</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Bangalore, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event long\">\n    <div class=\"three wide column date right aligned font-color-primary\">15<sup>th</sup> June, 2017</div>\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"twelve wide column description\">\n      <p class=\"mb-1x\">Graduated with a <strong>Bachelor of Science Degree in Physics</strong> and a minor in <strong>Artificial Intelligence</strong> from <a target=\"_blank\" href=\"https://iitk.ac.in/\">IIT Kanpur</a></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event\">\n    <div class=\"three wide column date right aligned font-color-primary\">25<sup>th</sup> April, 2016</div>\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"twelve wide column description\">\n      <p class=\"mb-1x\">Enrolled into a two months <strong>remote internship</strong> at <a target=\"_blank\" href=\"https://bugyal.com/\">Bugyal</a> for the role of <strong>Full Stack Developer</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event long\">\n    <div class=\"three wide column date right aligned font-color-primary\">7<sup>th</sup> May, 2015</div>\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"twelve wide column description\">\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"https://tripoto.com/\">Tripoto</a> as a <strong>Software Developer</strong> for a two months long <strong>Summer Internship</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> New Delhi, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event\">\n    <div class=\"three wide column date right aligned font-color-primary\">19<sup>th</sup> July, 2012</div>\n    <div class=\"one wide column center aligned\">\n      <div class=\"line dashed border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"twelve wide column description\">\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"https://iitk.ac.in/\">IIT Kanpur</a> as an Undergraduate student in the department of Physics</p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n</div>\n\n\n<!-- For mobile screen sizes -->\n<div class=\"timeline mobile\">\n\n  <div class=\"ui grid event\">\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-primary\"></i>\n      </div>\n    </div>\n    <div class=\"fourteen wide column description\">\n      <p class=\"font-color-primary mb-1x\">19<sup>th</sup> June, 2017</p>\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"http://www.socgensolutions.com/\">Société Générale</a> as a <strong>Senior Software Engineer</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Bangalore, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event\">\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"fourteen wide column description\">\n      <p class=\"font-color-primary mb-1x\">15<sup>th</sup> June, 2017</p>\n      <p class=\"mb-1x\">Graduated with a <strong>Bachelor of Science Degree in Physics</strong> and a minor in <strong>Artificial Intelligence</strong> from <a target=\"_blank\" href=\"https://iitk.ac.in/\">IIT Kanpur</a></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event\">\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"fourteen wide column description\">\n      <p class=\"font-color-primary mb-1x\">25<sup>th</sup> April, 2016</p>\n      <p class=\"mb-1x\">Enrolled into a two months <strong>remote internship</strong> at <a target=\"_blank\" href=\"https://bugyal.com/\">Bugyal</a> for the role of <strong>Full Stack Developer</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event long\">\n    <div class=\"one wide column center aligned\">\n      <div class=\"line border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"fourteen wide column description\">\n      <p class=\"font-color-primary mb-1x\">7<sup>th</sup> May, 2015</p>\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"https://tripoto.com/\">Tripoto</a> as a <strong>Software Developer</strong> for a two months long <strong>Summer Internship</strong></p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> New Delhi, India</p>\n    </div>\n  </div>\n\n  <div class=\"ui grid event\">\n    <div class=\"one wide column center aligned\">\n      <div class=\"line dashed border-color-secondary\">\n        <i class=\"circle icon font-color-secondary\"></i>\n      </div>\n    </div>\n    <div class=\"fourteen wide column description\">\n      <p class=\"font-color-primary mb-1x\">19<sup>th</sup> July, 2012</p>\n      <p class=\"mb-1x\">Joined <a target=\"_blank\" href=\"https://iitk.ac.in/\">IIT Kanpur</a> as an Undergraduate student in the department of Physics</p>\n      <p class=\"font-size-2x font-color-light location\"><i class=\"map marker alternate icon\"></i> Kanpur, India</p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/routes/home/timeline/timeline.component.ts":
/*!************************************************************!*\
  !*** ./src/app/routes/home/timeline/timeline.component.ts ***!
  \************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineComponent = /** @class */ (function () {
    function TimelineComponent() {
    }
    TimelineComponent.prototype.ngOnInit = function () {
    };
    TimelineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-timeline',
            template: __webpack_require__(/*! ./timeline.component.html */ "./src/app/routes/home/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.css */ "./src/app/routes/home/timeline/timeline.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TimelineComponent);
    return TimelineComponent;
}());



/***/ }),

/***/ "./src/app/routes/photography/photography.component.css":
/*!**************************************************************!*\
  !*** ./src/app/routes/photography/photography.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photos {\n  /* Prevent vertical gaps */\n  line-height: 0;\n\n  -webkit-column-count: 4;\n  -webkit-column-gap:   5px;\n  -moz-column-count:    4;\n  -moz-column-gap:      5px;\n  column-count:         4;\n  column-gap:           5px;\n}\n\n#photos img {\n  /* Just in case there are inline attributes */\n  width: 100% !important;\n  height: auto !important;\n  margin-top: 5px;\n}\n\n@media (max-width: 1200px) {\n  #photos {\n    -moz-column-count:    4;\n    column-count:         4;\n  }\n}\n\n@media (max-width: 1000px) {\n  #photos {\n    -moz-column-count:    3;\n    column-count:         3;\n  }\n}\n\n@media (max-width: 800px) {\n  #photos {\n    -moz-column-count:    2;\n    column-count:         2;\n  }\n}\n\n@media (max-width: 400px) {\n  #photos {\n    -moz-column-count:    1;\n    column-count:         1;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm91dGVzL3Bob3RvZ3JhcGh5L3Bob3RvZ3JhcGh5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsY0FBYzs7RUFFZCx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZDQUE2QztFQUM3QyxzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtJQUV2Qix1QkFBdUI7RUFDekI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsdUJBQXVCO0lBRXZCLHVCQUF1QjtFQUN6QjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx1QkFBdUI7SUFFdkIsdUJBQXVCO0VBQ3pCO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtJQUV2Qix1QkFBdUI7RUFDekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9waG90b2dyYXBoeS9waG90b2dyYXBoeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bob3RvcyB7XG4gIC8qIFByZXZlbnQgdmVydGljYWwgZ2FwcyAqL1xuICBsaW5lLWhlaWdodDogMDtcblxuICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcbiAgLXdlYmtpdC1jb2x1bW4tZ2FwOiAgIDVweDtcbiAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDQ7XG4gIC1tb3otY29sdW1uLWdhcDogICAgICA1cHg7XG4gIGNvbHVtbi1jb3VudDogICAgICAgICA0O1xuICBjb2x1bW4tZ2FwOiAgICAgICAgICAgNXB4O1xufVxuXG4jcGhvdG9zIGltZyB7XG4gIC8qIEp1c3QgaW4gY2FzZSB0aGVyZSBhcmUgaW5saW5lIGF0dHJpYnV0ZXMgKi9cbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAjcGhvdG9zIHtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogICAgNDtcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogNDtcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgNDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAjcGhvdG9zIHtcbiAgICAtbW96LWNvbHVtbi1jb3VudDogICAgMztcbiAgICAtd2Via2l0LWNvbHVtbi1jb3VudDogMztcbiAgICBjb2x1bW4tY291bnQ6ICAgICAgICAgMztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICNwaG90b3Mge1xuICAgIC1tb3otY29sdW1uLWNvdW50OiAgICAyO1xuICAgIC13ZWJraXQtY29sdW1uLWNvdW50OiAyO1xuICAgIGNvbHVtbi1jb3VudDogICAgICAgICAyO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgI3Bob3RvcyB7XG4gICAgLW1vei1jb2x1bW4tY291bnQ6ICAgIDE7XG4gICAgLXdlYmtpdC1jb2x1bW4tY291bnQ6IDE7XG4gICAgY29sdW1uLWNvdW50OiAgICAgICAgIDE7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/routes/photography/photography.component.html":
/*!***************************************************************!*\
  !*** ./src/app/routes/photography/photography.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"photos\">\n  <img class=\"pointer-cursor\" *ngFor=\"let photo of photos\" [src]=\"photo.small\" (click)=\"fullImageView(photo)\">\n</section>\n<div class=\"ui page dimmer\">\n  <div class=\"content\" *ngIf=\"selectedPhoto\">\n    <img class=\"ui massive image\" [src]=\"selectedPhoto.large\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/routes/photography/photography.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/routes/photography/photography.component.ts ***!
  \*************************************************************/
/*! exports provided: PhotographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function() { return PhotographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhotographyComponent = /** @class */ (function () {
    function PhotographyComponent() {
        this.urls = {
            imagesSmall: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].assetsBase + '/images/photography/sm/',
            imagesLarge: _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].assetsBase + '/images/photography/lg/',
        };
        this.filename = 'photo-{number}.jpg';
        this.count = 21;
        this.photos = [];
    }
    PhotographyComponent.prototype.fullImageView = function (photo) {
        this.selectedPhoto = photo;
        $('.ui.dimmer').dimmer('show');
    };
    PhotographyComponent.prototype.ngOnInit = function () {
        for (var i = 1; i <= this.count; i++) {
            this.photos.push({
                small: this.urls.imagesSmall + this.filename.replace('{number}', i.toString()),
                large: this.urls.imagesLarge + this.filename.replace('{number}', i.toString())
            });
        }
    };
    PhotographyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photography',
            template: __webpack_require__(/*! ./photography.component.html */ "./src/app/routes/photography/photography.component.html"),
            styles: [__webpack_require__(/*! ./photography.component.css */ "./src/app/routes/photography/photography.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PhotographyComponent);
    return PhotographyComponent;
}());



/***/ }),

/***/ "./src/app/routes/projects/projects.component.css":
/*!********************************************************!*\
  !*** ./src/app/routes/projects/projects.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvdXRlcy9wcm9qZWN0cy9wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/routes/projects/projects.component.html":
/*!*********************************************************!*\
  !*** ./src/app/routes/projects/projects.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"text-center pt-5x font-color-primary\">PROJECTS</h1>\n<div class=\"ui active centered inline loader mt-10x\" *ngIf=\"!projects\"></div>\n<div class=\"row center text-center mt-5x\" *ngFor=\"let project of projects\" [@projectAnimate]>\n  <p class=\"ui horizontal divider font-size-2x\">{{project.title}}</p>\n  <img class=\"ui centered medium image\" [src]=\"urls.images + project.image\">\n  <div class=\"ui grid mt-0x mb-0x\">\n    <div class=\"four wide column\"></div>\n    <div class=\"eight wide column\">{{project.description}}</div>\n    <div class=\"four wide column\"></div>\n  </div>\n  <div>\n    <span class=\"ui label\" *ngFor=\"let label of project.labels\"><i class=\"icon\" [ngClass]=\"label.icon\"></i> {{label.text}}</span>\n  </div>\n  <div class=\"mt-1x\">\n    <a [href]=\"project.url\" target=\"_blank\" class=\"ui primary basic button\" [ngClass]=\"{'disabled' : !project.url}\"><i class=\"globe icon\"></i>Visit Website</a>\n    <a [href]=\"project.git\" target=\"_blank\" class=\"ui secondary basic button\" [ngClass]=\"{'disabled' : !project.git}\"><i class=\"github icon\"></i>GIT</a>\n  </div>\n</div>\n<div class=\"pb-5x\"></div>\n"

/***/ }),

/***/ "./src/app/routes/projects/projects.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/routes/projects/projects.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(http) {
        this.http = http;
        this.urls = {
            images: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].assetsBase + '/images/projects/',
            content: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].contentBase + '/projects.json'
        };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.urls.content).subscribe(function (response) {
            _this.projects = response;
        });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/routes/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/routes/projects/projects.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('projectAnimate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1500)
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.ui.sidebar.menu, .toc.menu {\r\n  display: none;\r\n}\r\n\r\n@media only screen and (max-width: 700px) {\r\n  .ui.fixed.menu {\r\n    display: none !important;\r\n  }\r\n\r\n  .ui.sidebar.menu, .toc.menu {\r\n    display: block;\r\n  }\r\n}\r\n\r\na.disabled {\r\n  color: gray;\r\n  cursor: not-allowed;\r\n  text-decoration: underline;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7QUFDRjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udWkuc2lkZWJhci5tZW51LCAudG9jLm1lbnUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuICAudWkuZml4ZWQubWVudSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudWkuc2lkZWJhci5tZW51LCAudG9jLm1lbnUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5hLmRpc2FibGVkIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Following Menu -->\n<div class=\"ui large top fixed menu\">\n  <div class=\"ui container\">\n    <a class=\"item\" *ngFor=\"let tab of tabs\" routerLink=\"{{tab.url}}\" [ngClass]=\"{'active' : tab.url == activeUrl}\" [class.disabled]=\"tab.disabled\">{{tab.label}}</a>\n    <a class=\"item\" href=\"/assets/resume.pdf\" target=\"_blank\">Resume</a>\n    <div class=\"right menu items\">\n      <span class=\"item\">HIMANSHU</span>\n      <span class=\"item p-0x pl-1x\"><img class=\"ui middle aligned mini circular image\" src=\"assets/christian.jpg\"></span>\n    </div>\n  </div>\n</div>\n\n<!-- Sidebar Menu -->\n<div class=\"ui vertical sidebar menu\">\n  <a class=\"item\" *ngFor=\"let tab of tabs\" (click)=\"toggleSidebar()\" routerLink=\"/{{tab.id}}\" [ngClass]=\"{'active' : tab.url == activeUrl}\">{{tab.label}}</a>\n  <a class=\"item\" href=\"/assets/resume.pdf\" target=\"_blank\">Resume</a>\n</div>\n\n<div class=\"toc menu p-1x\">\n  <a class=\"item link\">\n    <i class=\"sidebar large icon\"></i>\n  </a>\n  <span class=\"pull-right\"><img class=\"ui middle aligned mini circular image\" src=\"assets/christian.jpg\"></span>\n</div>\n"

/***/ }),

/***/ "./src/app/shared/components/nav-menu/nav-menu.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavMenuComponent = /** @class */ (function () {
    function NavMenuComponent(router) {
        this.router = router;
        this.tabs = [
            { id: 'home', url: '/home', label: 'Home', disabled: false },
            { id: 'projects', url: '/projects', label: 'Projects', disabled: false },
            { id: 'blog', url: '/blog', label: 'Blog', disabled: true },
        ];
    }
    NavMenuComponent.prototype.toggleSidebar = function () {
        $('.ui.sidebar')
            .sidebar('toggle');
    };
    NavMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.activeUrl = event.urlAfterRedirects;
            }
        });
    };
    NavMenuComponent.prototype.ngAfterViewInit = function () {
        $('.ui.sidebar')
            .sidebar('attach events', '.toc .item.link');
    };
    NavMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav-menu',
            template: __webpack_require__(/*! ./nav-menu.component.html */ "./src/app/shared/components/nav-menu/nav-menu.component.html"),
            styles: [__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/shared/components/nav-menu/nav-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], NavMenuComponent);
    return NavMenuComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    assetsBase: 'assets',
    contentBase: 'content'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/himanshuchoudhary/Work/projects/homepage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
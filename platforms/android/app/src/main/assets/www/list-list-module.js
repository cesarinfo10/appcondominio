(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-list-module"],{

/***/ "./src/app/list/list.module.ts":
/*!*************************************!*\
  !*** ./src/app/list/list.module.ts ***!
  \*************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/list/list.page.ts");







var ListPageModule = /** @class */ (function () {
    function ListPageModule() {
    }
    ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]
                    }
                ])
            ],
            declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
        })
    ], ListPageModule);
    return ListPageModule;
}());



/***/ }),

/***/ "./src/app/list/list.page.html":
/*!*************************************!*\
  !*** ./src/app/list/list.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row class='colorCol'>\n    <ion-col class=\"cablinea\">\n      <div>\n       CLIENTE\n      </div>\n    </ion-col>\n    <ion-col class=\"cablinea\">\n      <div>\n        DETALLE\n      </div>\n    </ion-col>\n    <ion-col class=\"cablinea\">\n      <div>\n        TORRE\n      </div>\n    </ion-col>\n    <ion-col class=\"cablinea\">\n      <div>\n        OK\n      </div>\n    </ion-col>\n     <ion-col class=\"cablinea\">\n      <div>\n        IMG\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let detalle of detalles\">\n    <ion-col class=\"linea\">\n      <div>\n       {{detalle.Clientes}}\n      </div>\n    </ion-col>\n    <ion-col class=\"linea\">\n      <div>\n        {{detalle.descripcion}}\n      </div>\n    </ion-col>\n    <ion-col class=\"linea\">\n      <div>\n        {{detalle.TORRES}}\n      </div>\n    </ion-col>\n        <ion-col class=\"linea\">\n      <div>\n        {{detalle.solucions}}\n      </div>\n    </ion-col>\n      <ion-col class=\"linea\">\n      <div>\n       <img src=\"{{detalle.rutaFoto}}\" width=63 height=63 *ngIf=\"detalle.rutaFoto\">\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n \n</ion-content>\n"

/***/ }),

/***/ "./src/app/list/list.page.scss":
/*!*************************************!*\
  !*** ./src/app/list/list.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".colorCol {\n  background: #1f618d; }\n\nion-content {\n  --background: #2a3e52; }\n\nion-col {\n  color: #ffffff; }\n\n.linea {\n  border-bottom: solid 1px grey;\n  padding-bottom: 20%;\n  width: 100%;\n  height: 50px; }\n\n.cablinea {\n  border-bottom: solid 1px grey;\n  padding-bottom: 10%;\n  width: 100%;\n  height: 50px;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFtQixFQUFBOztBQUV2QjtFQUNJLHFCQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUVJLDZCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLFlBQVcsRUFBQTs7QUFFYjtFQUVFLDZCQUE0QjtFQUM1QixtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLFlBQVc7RUFDWCxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3JDb2x7XG4gICAgYmFja2dyb3VuZDogIzFmNjE4ZDtcbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG5cbn1cbmlvbi1jb2x7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4ubGluZWF7XG4gIFxuICAgIGJvcmRlci1ib3R0b206c29saWQgMXB4IGdyZXk7XG4gICAgcGFkZGluZy1ib3R0b206IDIwJTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDo1MHB4O1xuICB9XG4gIC5jYWJsaW5lYXtcbiAgXG4gICAgYm9yZGVyLWJvdHRvbTpzb2xpZCAxcHggZ3JleTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTAlO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/list/list.page.ts":
/*!***********************************!*\
  !*** ./src/app/list/list.page.ts ***!
  \***********************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_detalles_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/detalles.service */ "./src/app/servicios/detalles.service.ts");



var ListPage = /** @class */ (function () {
    function ListPage(detalle) {
        this.detalle = detalle;
    }
    ListPage.prototype.ngOnInit = function () {
        var _this = this;
        this.detalle.consultServis()
            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                console.log(data);
                this.detalles = data;
                return [2 /*return*/];
            });
        }); });
    };
    ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.page.html */ "./src/app/list/list.page.html"),
            styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/list/list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_detalles_service__WEBPACK_IMPORTED_MODULE_2__["DetallesService"]])
    ], ListPage);
    return ListPage;
}());



/***/ }),

/***/ "./src/app/servicios/detalles.service.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/detalles.service.ts ***!
  \***********************************************/
/*! exports provided: DetallesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetallesService", function() { return DetallesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");




var DetallesService = /** @class */ (function () {
    function DetallesService(http) {
        this.http = http;
    }
    // ==============================================================
    // CONSULTA TODOS LOS SERVICIOS
    // ==============================================================
    DetallesService.prototype.consultServis = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_config_url_servicios__WEBPACK_IMPORTED_MODULE_3__["URL_SERVIS"] + '/appcondominio/servicios/servicios.php?getAllServicios')
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    DetallesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DetallesService);
    return DetallesService;
}());



/***/ })

}]);
//# sourceMappingURL=list-list-module.js.map
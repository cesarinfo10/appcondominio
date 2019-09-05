(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detenerronda-detenerronda-module"],{

/***/ "./src/app/detenerronda/detenerronda.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/detenerronda/detenerronda.module.ts ***!
  \*****************************************************/
/*! exports provided: DetenerrondaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetenerrondaPageModule", function() { return DetenerrondaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detenerronda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detenerronda.page */ "./src/app/detenerronda/detenerronda.page.ts");







var routes = [
    {
        path: '',
        component: _detenerronda_page__WEBPACK_IMPORTED_MODULE_6__["DetenerrondaPage"]
    }
];
var DetenerrondaPageModule = /** @class */ (function () {
    function DetenerrondaPageModule() {
    }
    DetenerrondaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detenerronda_page__WEBPACK_IMPORTED_MODULE_6__["DetenerrondaPage"]]
        })
    ], DetenerrondaPageModule);
    return DetenerrondaPageModule;
}());



/***/ }),

/***/ "./src/app/detenerronda/detenerronda.page.html":
/*!*****************************************************!*\
  !*** ./src/app/detenerronda/detenerronda.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>App-Condominio</ion-card-subtitle>\n    <ion-card-title>Detener Ronda</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n<ion-button expand=\"full\" color=\"danger\" (click)=\"detenerRonda()\">Detener</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detenerronda/detenerronda.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/detenerronda/detenerronda.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvZGV0ZW5lcnJvbmRhL2RldGVuZXJyb25kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBQSxFQUFzQjs7QUFFMUI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRlbmVycm9uZGEvZGV0ZW5lcnJvbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG59XG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNSU7ICovXG59XG4ubWFyZ2ludG9we1xuICAgIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/detenerronda/detenerronda.page.ts":
/*!***************************************************!*\
  !*** ./src/app/detenerronda/detenerronda.page.ts ***!
  \***************************************************/
/*! exports provided: DetenerrondaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetenerrondaPage", function() { return DetenerrondaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var DetenerrondaPage = /** @class */ (function () {
    function DetenerrondaPage(alertController) {
        this.alertController = alertController;
    }
    DetenerrondaPage.prototype.ngOnInit = function () {
    };
    DetenerrondaPage.prototype.detenerRonda = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atención!',
                            message: 'Su ronda se detuvo correctamente.',
                            buttons: ['Ok']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetenerrondaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detenerronda',
            template: __webpack_require__(/*! ./detenerronda.page.html */ "./src/app/detenerronda/detenerronda.page.html"),
            styles: [__webpack_require__(/*! ./detenerronda.page.scss */ "./src/app/detenerronda/detenerronda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], DetenerrondaPage);
    return DetenerrondaPage;
}());



/***/ })

}]);
//# sourceMappingURL=detenerronda-detenerronda-module.js.map
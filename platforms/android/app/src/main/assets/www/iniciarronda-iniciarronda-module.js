(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["iniciarronda-iniciarronda-module"],{

/***/ "./src/app/iniciarronda/iniciarronda.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/iniciarronda/iniciarronda.module.ts ***!
  \*****************************************************/
/*! exports provided: IniciarrondaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarrondaPageModule", function() { return IniciarrondaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _iniciarronda_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iniciarronda.page */ "./src/app/iniciarronda/iniciarronda.page.ts");







var routes = [
    {
        path: '',
        component: _iniciarronda_page__WEBPACK_IMPORTED_MODULE_6__["IniciarrondaPage"]
    }
];
var IniciarrondaPageModule = /** @class */ (function () {
    function IniciarrondaPageModule() {
    }
    IniciarrondaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_iniciarronda_page__WEBPACK_IMPORTED_MODULE_6__["IniciarrondaPage"]]
        })
    ], IniciarrondaPageModule);
    return IniciarrondaPageModule;
}());



/***/ }),

/***/ "./src/app/iniciarronda/iniciarronda.page.html":
/*!*****************************************************!*\
  !*** ./src/app/iniciarronda/iniciarronda.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>App-Condominio</ion-card-subtitle>\n    <ion-card-title>Iniciar Ronda</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n<ion-button expand=\"full\" color=\"light\" (click)=\"iniciarRonda()\">Iniciar</ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/iniciarronda/iniciarronda.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/iniciarronda/iniciarronda.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvaW5pY2lhcnJvbmRhL2luaWNpYXJyb25kYS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBQSxFQUFzQjs7QUFFMUI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmljaWFycm9uZGEvaW5pY2lhcnJvbmRhLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG59XG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNSU7ICovXG59XG4ubWFyZ2ludG9we1xuICAgIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/iniciarronda/iniciarronda.page.ts":
/*!***************************************************!*\
  !*** ./src/app/iniciarronda/iniciarronda.page.ts ***!
  \***************************************************/
/*! exports provided: IniciarrondaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IniciarrondaPage", function() { return IniciarrondaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var IniciarrondaPage = /** @class */ (function () {
    function IniciarrondaPage(alertController) {
        this.alertController = alertController;
    }
    IniciarrondaPage.prototype.ngOnInit = function () {
    };
    IniciarrondaPage.prototype.iniciarRonda = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Atención!',
                            message: 'Inicio su ronda correctamente.',
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
    IniciarrondaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-iniciarronda',
            template: __webpack_require__(/*! ./iniciarronda.page.html */ "./src/app/iniciarronda/iniciarronda.page.html"),
            styles: [__webpack_require__(/*! ./iniciarronda.page.scss */ "./src/app/iniciarronda/iniciarronda.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], IniciarrondaPage);
    return IniciarrondaPage;
}());



/***/ })

}]);
//# sourceMappingURL=iniciarronda-iniciarronda-module.js.map
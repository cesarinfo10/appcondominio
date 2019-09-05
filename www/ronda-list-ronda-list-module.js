(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ronda-list-ronda-list-module"],{

/***/ "./src/app/ronda-list/ronda-list.module.ts":
/*!*************************************************!*\
  !*** ./src/app/ronda-list/ronda-list.module.ts ***!
  \*************************************************/
/*! exports provided: RondaListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RondaListPageModule", function() { return RondaListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ronda_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ronda-list.page */ "./src/app/ronda-list/ronda-list.page.ts");







var routes = [
    {
        path: '',
        component: _ronda_list_page__WEBPACK_IMPORTED_MODULE_6__["RondaListPage"]
    }
];
var RondaListPageModule = /** @class */ (function () {
    function RondaListPageModule() {
    }
    RondaListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ronda_list_page__WEBPACK_IMPORTED_MODULE_6__["RondaListPage"]]
        })
    ], RondaListPageModule);
    return RondaListPageModule;
}());



/***/ }),

/***/ "./src/app/ronda-list/ronda-list.page.html":
/*!*************************************************!*\
  !*** ./src/app/ronda-list/ronda-list.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<ion-card>\n  <ion-card-header>\n   Lista de ronda  <ion-icon name=\"disc\" color=\"secondary\"></ion-icon>\n  </ion-card-header>\n\n<ion-item>\n  <ion-label>Torre 1</ion-label>\n  <ion-checkbox color=\"secondary\" checked=\"true\"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-label>Torre 2</ion-label>\n  <ion-checkbox color=\"secondary\" checked=\"true\"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-label>Torre 3</ion-label>\n  <ion-checkbox color=\"secondary\" checked=\"true\"></ion-checkbox>\n</ion-item>\n<ion-item>\n  <ion-label>Torre 4</ion-label>\n  <ion-checkbox color=\"dark\" checked=\"true\"></ion-checkbox>\n</ion-item>\n\n<ion-item>\n  <ion-label>Torre 5</ion-label>\n  <ion-checkbox color=\"dark\" checked=\"true\"></ion-checkbox>\n</ion-item>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/ronda-list/ronda-list.page.scss":
/*!*************************************************!*\
  !*** ./src/app/ronda-list/ronda-list.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvcm9uZGEtbGlzdC9yb25kYS1saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFBLEVBQXNCIiwiZmlsZSI6InNyYy9hcHAvcm9uZGEtbGlzdC9yb25kYS1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG59XG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNSU7ICovXG59Il19 */"

/***/ }),

/***/ "./src/app/ronda-list/ronda-list.page.ts":
/*!***********************************************!*\
  !*** ./src/app/ronda-list/ronda-list.page.ts ***!
  \***********************************************/
/*! exports provided: RondaListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RondaListPage", function() { return RondaListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RondaListPage = /** @class */ (function () {
    function RondaListPage() {
    }
    RondaListPage.prototype.ngOnInit = function () {
    };
    RondaListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ronda-list',
            template: __webpack_require__(/*! ./ronda-list.page.html */ "./src/app/ronda-list/ronda-list.page.html"),
            styles: [__webpack_require__(/*! ./ronda-list.page.scss */ "./src/app/ronda-list/ronda-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RondaListPage);
    return RondaListPage;
}());



/***/ })

}]);
//# sourceMappingURL=ronda-list-ronda-list-module.js.map
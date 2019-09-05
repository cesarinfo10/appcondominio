(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scanpunto-scanpunto-module"],{

/***/ "./src/app/scanpunto/scanpunto.module.ts":
/*!***********************************************!*\
  !*** ./src/app/scanpunto/scanpunto.module.ts ***!
  \***********************************************/
/*! exports provided: ScanpuntoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanpuntoPageModule", function() { return ScanpuntoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _scanpunto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scanpunto.page */ "./src/app/scanpunto/scanpunto.page.ts");







var routes = [
    {
        path: '',
        component: _scanpunto_page__WEBPACK_IMPORTED_MODULE_6__["ScanpuntoPage"]
    }
];
var ScanpuntoPageModule = /** @class */ (function () {
    function ScanpuntoPageModule() {
    }
    ScanpuntoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_scanpunto_page__WEBPACK_IMPORTED_MODULE_6__["ScanpuntoPage"]]
        })
    ], ScanpuntoPageModule);
    return ScanpuntoPageModule;
}());



/***/ }),

/***/ "./src/app/scanpunto/scanpunto.page.html":
/*!***********************************************!*\
  !*** ./src/app/scanpunto/scanpunto.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>App-Condominio</ion-card-subtitle>\n    <ion-card-title>Scanner Punto</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n<ion-button color=\"light\" expand=\"full\" (click)=\"scan()\">Scanrer Code <ion-icon name=\"barcode\"></ion-icon></ion-button>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/scanpunto/scanpunto.page.scss":
/*!***********************************************!*\
  !*** ./src/app/scanpunto/scanpunto.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvc2NhbnB1bnRvL3NjYW5wdW50by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBQSxFQUFzQiIsImZpbGUiOiJzcmMvYXBwL3NjYW5wdW50by9zY2FucHVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzJhM2U1Mjtcbn1cbmlvbi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC8qIG1hcmdpbi10b3A6IDI1JTsgKi9cbn0gIl19 */"

/***/ }),

/***/ "./src/app/scanpunto/scanpunto.page.ts":
/*!*********************************************!*\
  !*** ./src/app/scanpunto/scanpunto.page.ts ***!
  \*********************************************/
/*! exports provided: ScanpuntoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanpuntoPage", function() { return ScanpuntoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");



var ScanpuntoPage = /** @class */ (function () {
    function ScanpuntoPage(barcodeScanner) {
        this.barcodeScanner = barcodeScanner;
    }
    ScanpuntoPage.prototype.ngOnInit = function () {
    };
    ScanpuntoPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.resultadoSacan = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    ScanpuntoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scanpunto',
            template: __webpack_require__(/*! ./scanpunto.page.html */ "./src/app/scanpunto/scanpunto.page.html"),
            styles: [__webpack_require__(/*! ./scanpunto.page.scss */ "./src/app/scanpunto/scanpunto.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"]])
    ], ScanpuntoPage);
    return ScanpuntoPage;
}());



/***/ })

}]);
//# sourceMappingURL=scanpunto-scanpunto-module.js.map
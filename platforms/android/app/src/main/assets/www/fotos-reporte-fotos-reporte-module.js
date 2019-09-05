(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fotos-reporte-fotos-reporte-module"],{

/***/ "./src/app/fotos-reporte/fotos-reporte.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/fotos-reporte/fotos-reporte.module.ts ***!
  \*******************************************************/
/*! exports provided: FotosReportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosReportePageModule", function() { return FotosReportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fotos_reporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fotos-reporte.page */ "./src/app/fotos-reporte/fotos-reporte.page.ts");







var routes = [
    {
        path: '',
        component: _fotos_reporte_page__WEBPACK_IMPORTED_MODULE_6__["FotosReportePage"]
    }
];
var FotosReportePageModule = /** @class */ (function () {
    function FotosReportePageModule() {
    }
    FotosReportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fotos_reporte_page__WEBPACK_IMPORTED_MODULE_6__["FotosReportePage"]]
        })
    ], FotosReportePageModule);
    return FotosReportePageModule;
}());



/***/ }),

/***/ "./src/app/fotos-reporte/fotos-reporte.page.html":
/*!*******************************************************!*\
  !*** ./src/app/fotos-reporte/fotos-reporte.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Recuerde ingresar los datos antes de tomar la foto</ion-card-subtitle>\n    <ion-card-title>Tomar Foto</ion-card-title>\n  </ion-card-header>\n\n  <ion-card-content>\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-card>\n     <img [src]=\"image\" *ngIf=\"image\"/>\n     \n    </ion-card>  \n  </ion-col>\n</ion-row>\n</ion-card-content>\n <br/> \n  \n    <ion-item>\n\n   <ion-button color=\"dark\" style=\"width:100%\"expand=\"full\" fill=\"outline\" class=\"margintop\" (click)=\"camara()\">Toma una foto <ion-icon name=\"camera\"></ion-icon> </ion-button>\n<br/>\n        <ion-button color=\"dark\" expand=\"full\" fill=\"outline\" class=\"margintop\" (click)=\"uploadimagen()\" *ngIf=\"image\">Subir Imagen <ion-icon name=\"camera\"></ion-icon> </ion-button>\n  </ion-item>\n  \n</ion-card>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/fotos-reporte/fotos-reporte.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/fotos-reporte/fotos-reporte.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvZm90b3MtcmVwb3J0ZS9mb3Rvcy1yZXBvcnRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFBLEVBQXNCOztBQUUxQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2ZvdG9zLXJlcG9ydGUvZm90b3MtcmVwb3J0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmEzZTUyO1xufVxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLyogbWFyZ2luLXRvcDogMjUlOyAqL1xufVxuLm1hcmdpbnRvcHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/fotos-reporte/fotos-reporte.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/fotos-reporte/fotos-reporte.page.ts ***!
  \*****************************************************/
/*! exports provided: FotosReportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FotosReportePage", function() { return FotosReportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");





var FotosReportePage = /** @class */ (function () {
    function FotosReportePage(camera, http) {
        this.camera = camera;
        this.http = http;
        this.tempImages = [];
    }
    FotosReportePage.prototype.setrIMGvar = function (value) {
        this.urlImage = value;
    };
    FotosReportePage.prototype.camara = function () {
        var _this = this;
        var options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 1000,
            targetHeight: 1000,
            quality: 100,
            correctOrientation: true,
        };
        this.camera.getPicture(options)
            .then(function (imageData) {
            _this.image = "data:image/jpeg;base64," + imageData;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    FotosReportePage.prototype.uploadimagen = function () {
        var _this = this;
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_4__["URL_SERVIS"] + '/appcondominio/assets/detalle_reporte/images.php';
        // tslint:disable-next-line:prefer-const
        var postData = new FormData();
        postData.append('file', this.image);
        // tslint:disable-next-line:prefer-const
        // tslint:disable-next-line:typedef-whitespace
        // tslint:disable-next-line:prefer-const
        var data = this.http.post(url, postData);
        data.subscribe(function (result) {
            console.log(result.image_url);
            _this.setrIMGvar(result.image_url);
        });
    };
    FotosReportePage.prototype.ngOnInit = function () {
    };
    FotosReportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fotos-reporte',
            template: __webpack_require__(/*! ./fotos-reporte.page.html */ "./src/app/fotos-reporte/fotos-reporte.page.html"),
            styles: [__webpack_require__(/*! ./fotos-reporte.page.scss */ "./src/app/fotos-reporte/fotos-reporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], FotosReportePage);
    return FotosReportePage;
}());



/***/ })

}]);
//# sourceMappingURL=fotos-reporte-fotos-reporte-module.js.map
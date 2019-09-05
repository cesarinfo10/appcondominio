(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-reporte-detalle-reporte-module"],{

/***/ "./src/app/detalle-reporte/detalle-reporte.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/detalle-reporte/detalle-reporte.module.ts ***!
  \***********************************************************/
/*! exports provided: DetalleReportePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReportePageModule", function() { return DetalleReportePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_reporte_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-reporte.page */ "./src/app/detalle-reporte/detalle-reporte.page.ts");







var routes = [
    {
        path: '',
        component: _detalle_reporte_page__WEBPACK_IMPORTED_MODULE_6__["DetalleReportePage"]
    }
];
var DetalleReportePageModule = /** @class */ (function () {
    function DetalleReportePageModule() {
    }
    DetalleReportePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalle_reporte_page__WEBPACK_IMPORTED_MODULE_6__["DetalleReportePage"]]
        })
    ], DetalleReportePageModule);
    return DetalleReportePageModule;
}());



/***/ }),

/***/ "./src/app/detalle-reporte/detalle-reporte.page.html":
/*!***********************************************************!*\
  !*** ./src/app/detalle-reporte/detalle-reporte.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Detalle de reporte</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n  <ion-item>\n    <ion-label>Seleccione </ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" [(ngModel)]=\"idUsuario\" placeholder=\"Usuario\" (ionChange)=\"buscarUsuario()\" >\n      <ion-select-option *ngFor=\"let user of usuarios;\" (click)=\"buscarUsuario()\" value=\"{{user.USUARIO}}\">{{user.USUARIO}} | {{user.APELLIDO}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class=\"textolabel\" position=\"floating\">Torre Usuario</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"torre\" name=\"torre\"></ion-input>\n    <ion-input type=\"hidden\" [(ngModel)]=\"IDtorre\" name=\"IDtorre\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label class=\"textolabel\" position=\"floating\">Unidad Usuario</ion-label>\n    <ion-input type=\"text\" [(ngModel)]=\"unidad\" name=\"unidad\"></ion-input>\n  </ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Descripción</ion-label>\n  <ion-textarea [(ngModel)]=\"descripcion\" name=\"descripcion\"></ion-textarea>\n</ion-item>\n<br/>\n<ion-button color=\"light\" expand=\"full\" (click)=\"scan()\">Scanrer Code <ion-icon name=\"barcode\"></ion-icon></ion-button>\n\n<ion-item>\n  <ion-input [(ngModel)]=\"resultadoSacan\" name=\"resultadoSacan\"></ion-input>\n</ion-item>\n  </ion-card-content>\n</ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"enviarReporteAdd()\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"save\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/detalle-reporte/detalle-reporte.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/detalle-reporte/detalle-reporte.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvZGV0YWxsZS1yZXBvcnRlL2RldGFsbGUtcmVwb3J0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBYSxFQUFBOztBQUVqQjtFQUNJLG1CQUFtQjtFQUNuQixxQkFBQSxFQUFzQjs7QUFFMUI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZXRhbGxlLXJlcG9ydGUvZGV0YWxsZS1yZXBvcnRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG59XG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNSU7ICovXG59XG4ubWFyZ2ludG9we1xuICAgIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/detalle-reporte/detalle-reporte.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/detalle-reporte/detalle-reporte.page.ts ***!
  \*********************************************************/
/*! exports provided: DetalleReportePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleReportePage", function() { return DetalleReportePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../servicios/usuario.service */ "./src/app/servicios/usuario.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");








var DetalleReportePage = /** @class */ (function () {
    function DetalleReportePage(barcodeScanner, alertController, camera, servicio, http) {
        var _this = this;
        this.barcodeScanner = barcodeScanner;
        this.alertController = alertController;
        this.camera = camera;
        this.servicio = servicio;
        this.http = http;
        this.tempImages = [];
        this.resultadoSacan = '';
        this.servicio.consultTodosUsuarios()
            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // tslint:disable-next-line:no-string-literal
                this.usuarios = data;
                return [2 /*return*/];
            });
        }); });
    }
    DetalleReportePage.prototype.ngOnInit = function () {
    };
    DetalleReportePage.prototype.setrIMGvar = function (value) {
        this.urlImage = value;
    };
    DetalleReportePage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.resultadoSacan = barcodeData.text;
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    DetalleReportePage.prototype.camara = function () {
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
    DetalleReportePage.prototype.uploadimagen = function () {
        var _this = this;
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_7__["URL_SERVIS"] + '/appcondominio/assets/detalle_reporte/images.php';
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
    DetalleReportePage.prototype.buscarUsuario = function () {
        var _this = this;
        console.log(this.idUsuario);
        this.servicio.cunsultaUserReporte(this.idUsuario)
            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // tslint:disable-next-line:no-string-literal
                this.APELLIDO = data['APELLIDO'];
                // tslint:disable-next-line:no-string-literal
                this.torre = data['TORRES'];
                // tslint:disable-next-line:no-string-literal
                this.unidad = data['UNIDAD'];
                // tslint:disable-next-line:no-string-literal
                this.IDtorre = data['TORRE'];
                return [2 /*return*/];
            });
        }); });
    };
    // Enviar Reporte
    DetalleReportePage.prototype.enviarReporteAdd = function () {
        var _this = this;
        this.servicio.detalleReporteAdd(this.idUsuario, this.IDtorre, this.unidad, this.descripcion, this.resultadoSacan, this.urlImage)
            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(data);
                        this.limpiarCampos();
                        return [4 /*yield*/, this.alertController.create({
                                header: 'Operación exitosa!',
                                message: 'Los datos se insertaron correctamente.',
                                buttons: ['Cerrar']
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); })
            .catch(function (error) {
            console.log(error + 'no se pudo insertar datos');
        });
    };
    DetalleReportePage.prototype.limpiarCampos = function () {
        this.torre = '';
        this.unidad = '';
        this.descripcion = '';
        this.resultadoSacan = '';
        this.image = '';
    };
    DetalleReportePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-reporte',
            template: __webpack_require__(/*! ./detalle-reporte.page.html */ "./src/app/detalle-reporte/detalle-reporte.page.html"),
            styles: [__webpack_require__(/*! ./detalle-reporte.page.scss */ "./src/app/detalle-reporte/detalle-reporte.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], DetalleReportePage);
    return DetalleReportePage;
}());



/***/ })

}]);
//# sourceMappingURL=detalle-reporte-detalle-reporte-module.js.map
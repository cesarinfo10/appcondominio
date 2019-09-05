(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detalle-solucion-detalle-solucion-module"],{

/***/ "./src/app/detalle-solucion/detalle-solucion.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/detalle-solucion/detalle-solucion.module.ts ***!
  \*************************************************************/
/*! exports provided: DetalleSolucionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSolucionPageModule", function() { return DetalleSolucionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _detalle_solucion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detalle-solucion.page */ "./src/app/detalle-solucion/detalle-solucion.page.ts");







var routes = [
    {
        path: '',
        component: _detalle_solucion_page__WEBPACK_IMPORTED_MODULE_6__["DetalleSolucionPage"]
    }
];
var DetalleSolucionPageModule = /** @class */ (function () {
    function DetalleSolucionPageModule() {
    }
    DetalleSolucionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_detalle_solucion_page__WEBPACK_IMPORTED_MODULE_6__["DetalleSolucionPage"]]
        })
    ], DetalleSolucionPageModule);
    return DetalleSolucionPageModule;
}());



/***/ }),

/***/ "./src/app/detalle-solucion/detalle-solucion.page.html":
/*!*************************************************************!*\
  !*** ./src/app/detalle-solucion/detalle-solucion.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n  <ion-card-header>\n    <ion-card-subtitle>Detalle de solución</ion-card-subtitle>\n  </ion-card-header>\n\n  <ion-card-content>\n    <ion-item>\n    <ion-label>Seleccione </ion-label>\n    <ion-select [interfaceOptions]=\"customActionSheetOptions\" interface=\"action-sheet\" [(ngModel)]=\"usuario\" placeholder=\"Usuario\" >\n      <ion-select-option *ngFor=\"let user of usuarios;\" (click)=\"buscarUsuario()\" value=\"{{user.USUARIO}}\">{{user.USUARIO}}</ion-select-option>\n    </ion-select>\n  </ion-item>\n\n  <ion-item>\n  <ion-label>Desde</ion-label>\n<ion-datetime \n            [(ngModel)]=\"desde\" name=\"desde\"\n            placeholder=\"Seleccione Fecha\" \n            display-format=\"DD MM YYYY\" \n            doneText=\"Seleccionar\"\n            cancelText=\"Cancelar\"></ion-datetime>\n  </ion-item>\n\n  <ion-item>\n  <ion-label>Hasta</ion-label>\n<ion-datetime \n            [(ngModel)]=\"hasta\" name=\"hasta\"\n            placeholder=\"Seleccione Fecha\" \n            display-format=\"DD MM YYYY\" \n            doneText=\"Seleccionar\"\n            cancelText=\"Cancelar\"></ion-datetime>\n  </ion-item>\n\n<ion-item>\n  <ion-label position=\"floating\">Descripción</ion-label>\n  <ion-textarea [(ngModel)]=\"descripcion\" name=\"descripcion\"></ion-textarea>\n</ion-item> \n\n  <ion-button color=\"dark\" expand=\"full\" fill=\"outline\" class=\"margintop\" (click)=\"camara()\">Toma una foto <ion-icon name=\"camera\"></ion-icon> </ion-button>\n\n<br/>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-card>\n     <img [src]=\"image\" *ngIf=\"image\"/>\n     \n    </ion-card>  \n  </ion-col>\n</ion-row>\n <br/> \n        <ion-button color=\"dark\" expand=\"full\" fill=\"outline\" class=\"margintop\" (click)=\"uploadimagen()\" *ngIf=\"image\">Subir Imagen <ion-icon name=\"camera\"></ion-icon> </ion-button>\n\n  </ion-card-content>\n</ion-card>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" (click)=\"SolucionAdd()\">\n    <ion-fab-button color=\"primary\">\n      <ion-icon name=\"save\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detalle-solucion/detalle-solucion.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/detalle-solucion/detalle-solucion.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvZGV0YWxsZS1zb2x1Y2lvbi9kZXRhbGxlLXNvbHVjaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFBLEVBQXNCOztBQUUxQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldGFsbGUtc29sdWNpb24vZGV0YWxsZS1zb2x1Y2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmEzZTUyO1xufVxuaW9uLWNhcmQge1xuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLyogbWFyZ2luLXRvcDogMjUlOyAqL1xufVxuLm1hcmdpbnRvcHtcbiAgICBtYXJnaW4tdG9wOiA1JTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/detalle-solucion/detalle-solucion.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/detalle-solucion/detalle-solucion.page.ts ***!
  \***********************************************************/
/*! exports provided: DetalleSolucionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetalleSolucionPage", function() { return DetalleSolucionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../servicios/usuario.service */ "./src/app/servicios/usuario.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _config_url_servicios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config/url.servicios */ "./src/app/config/url.servicios.ts");







var DetalleSolucionPage = /** @class */ (function () {
    function DetalleSolucionPage(alertController, camera, servicio, http) {
        var _this = this;
        this.alertController = alertController;
        this.camera = camera;
        this.servicio = servicio;
        this.http = http;
        this.servicio.consultTodosUsuarios()
            .then(function (data) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                // tslint:disable-next-line:no-string-literal
                this.usuarios = data;
                return [2 /*return*/];
            });
        }); });
    }
    DetalleSolucionPage.prototype.ngOnInit = function () {
    };
    DetalleSolucionPage.prototype.setrIMGvar = function (value) {
        this.urlImage = value;
    };
    DetalleSolucionPage.prototype.camara = function () {
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
    DetalleSolucionPage.prototype.uploadimagen = function () {
        var _this = this;
        var url = _config_url_servicios__WEBPACK_IMPORTED_MODULE_6__["URL_SERVIS"] + '/appcondominio/assets/detalle_reporte/images.php';
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
    // Enviar Reporte
    DetalleSolucionPage.prototype.SolucionAdd = function () {
        var _this = this;
        this.servicio.enviarSolucionAdd(this.usuario, this.desde, this.hasta, this.descripcion, this.urlImage)
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
    DetalleSolucionPage.prototype.limpiarCampos = function () {
        this.usuario = 'Usuario';
        this.desde = '';
        this.descripcion = '';
        this.hasta = '';
        this.image = '';
    };
    DetalleSolucionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detalle-solucion',
            template: __webpack_require__(/*! ./detalle-solucion.page.html */ "./src/app/detalle-solucion/detalle-solucion.page.html"),
            styles: [__webpack_require__(/*! ./detalle-solucion.page.scss */ "./src/app/detalle-solucion/detalle-solucion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
            _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], DetalleSolucionPage);
    return DetalleSolucionPage;
}());



/***/ })

}]);
//# sourceMappingURL=detalle-solucion-detalle-solucion-module.js.map
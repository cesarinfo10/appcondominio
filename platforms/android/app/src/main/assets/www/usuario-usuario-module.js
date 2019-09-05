(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["usuario-usuario-module"],{

/***/ "./src/app/usuario/usuario.module.ts":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.module.ts ***!
  \*******************************************/
/*! exports provided: UsuarioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPageModule", function() { return UsuarioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario.page */ "./src/app/usuario/usuario.page.ts");







var routes = [
    {
        path: '',
        component: _usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]
    }
];
var UsuarioPageModule = /** @class */ (function () {
    function UsuarioPageModule() {
    }
    UsuarioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_usuario_page__WEBPACK_IMPORTED_MODULE_6__["UsuarioPage"]]
        })
    ], UsuarioPageModule);
    return UsuarioPageModule;
}());



/***/ }),

/***/ "./src/app/usuario/usuario.page.html":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n                            <!-- Dark Logo icon -->\n      <img src=\"assets/logo-icon.png\" alt=\"homepage\" class=\"dark-logo\" />\n      <img src=\"assets/logo-text.png\" alt=\"homepage\" class=\"dark-logo\" />\n                         <!-- Light Logo text -->    \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-card>\n\n  <ion-item>\n    <ion-avatar item-start>\n      <img src=\"assets/principal/1.jpg\">\n    </ion-avatar>\n\n    <h2> {{datosUser}}</h2>\n  </ion-item>\n\n  <ion-card-content>\n    <ion-list>\n  <ion-item>\n    <ion-label>Nombre: {{datosUser}} {{apellido}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Correo:{{email}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Tipo usuario: {{tu}}</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label>Activo: {{activo}}</ion-label>\n  </ion-item>\n</ion-list>\n  </ion-card-content>\n\n</ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/usuario/usuario.page.scss":
/*!*******************************************!*\
  !*** ./src/app/usuario/usuario.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".social-cards ion-col {\n  padding: 0; }\n\nion-content {\n  --background: #2a3e52; }\n\nion-card {\n  background: #ffffff;\n  /* margin-top: 25%; */ }\n\n.margintop {\n  margin-top: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYXN2L0RvY3VtZW50cy9pb25pYy9hcHBjb25kb21pbmlvL3NyYy9hcHAvdXN1YXJpby91c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLFVBQVUsRUFBQTs7QUFFWjtFQUNFLHFCQUFhLEVBQUE7O0FBRWpCO0VBQ0ksbUJBQW1CO0VBQ25CLHFCQUFBLEVBQXNCOztBQUUxQjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgLnNvY2lhbC1jYXJkcyBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIGlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTNlNTI7XG59XG5pb24tY2FyZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAvKiBtYXJnaW4tdG9wOiAyNSU7ICovXG59XG4ubWFyZ2ludG9we1xuICAgIG1hcmdpbi10b3A6IDUlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/usuario/usuario.page.ts":
/*!*****************************************!*\
  !*** ./src/app/usuario/usuario.page.ts ***!
  \*****************************************/
/*! exports provided: UsuarioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioPage", function() { return UsuarioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _servicios_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../servicios/usuario.service */ "./src/app/servicios/usuario.service.ts");



var UsuarioPage = /** @class */ (function () {
    function UsuarioPage(usuario) {
        var _this = this;
        this.usuario = usuario;
        // ==============================================================
        // CONSULTA DE USUARIO (SESIÓN)
        // ==============================================================
        this.usuario.consultUsuario()
            .then(function (data) {
            // tslint:disable-next-line:no-string-literal
            _this.datosUser = data['NOMBRE'];
            // tslint:disable-next-line:no-string-literal
            _this.apellido = data['APELLIDO'];
            // tslint:disable-next-line:no-string-literal
            _this.email = data['CORREO'];
            // tslint:disable-next-line:no-string-literal
            _this.tu = data['DESCRIPCION'];
            // tslint:disable-next-line:no-string-literal
            if (data['ACTIVO'] === '1') {
                _this.activo = 'Activo';
            }
            else {
                _this.activo = 'Inactivo';
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    }
    UsuarioPage.prototype.ngOnInit = function () {
    };
    UsuarioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.page.html */ "./src/app/usuario/usuario.page.html"),
            styles: [__webpack_require__(/*! ./usuario.page.scss */ "./src/app/usuario/usuario.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_servicios_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]])
    ], UsuarioPage);
    return UsuarioPage;
}());



/***/ })

}]);
//# sourceMappingURL=usuario-usuario-module.js.map
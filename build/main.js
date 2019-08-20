webpackJsonp([15],{

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasetalleresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BasetalleresPage = /** @class */ (function () {
    function BasetalleresPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BasetalleresPage.prototype.ionViewDidLoad = function () { };
    BasetalleresPage.prototype.addEvent = function (a, event) {
        var dateOk = this.convertDate(event.targetElement.value);
        event.targetElement.value = dateOk;
        console.log(a);
        console.log(dateOk);
    };
    BasetalleresPage.prototype.convertDate = function (dateString) {
        var p = dateString.split(/\D/g);
        return [p[1], p[0], p[2]].join("/");
    };
    BasetalleresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-basetalleres",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/basetalleres/basetalleres.html"*/'<ion-header>\n  <header [headerTitle]="\'Calendario\'"></header>\n</ion-header>\n\n<ion-content padding>\n\n\n\n  <h1>Descargar base de datos</h1>\n\n\n  <ion-grid padding class="dates">\n    <h3>Descargar base de talleres visitados</h3>\n\n    <ion-row>\n\n      <ion-col col-4>\n        <mat-form-field>\n          <input (dateInput)="addEvent(\'input\', $event)" matInput [matDatepicker]="picker"\n            placeholder="Desde fecha de alta">\n          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </ion-col>\n\n      <ion-col col-4>\n        <mat-form-field>\n          <input (dateInput)="addEvent(\'input\', $event)" matInput [matDatepicker]="pickerHasta"\n            placeholder="Hasta fecha de alta">\n          <mat-datepicker-toggle matSuffix [for]="pickerHasta"></mat-datepicker-toggle>\n          <mat-datepicker #pickerHasta></mat-datepicker>\n        </mat-form-field>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n  <button ion-button>Descargar</button>\n\n\n\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/basetalleres/basetalleres.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], BasetalleresPage);
    return BasetalleresPage;
}());

//# sourceMappingURL=basetalleres.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForzarcitaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendario_calendario__ = __webpack_require__(71);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForzarcitaPage = /** @class */ (function () {
    function ForzarcitaPage(navCtrl, navParams, alertCtrl, datePipe, modalCtrl, apiAdm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.modalCtrl = modalCtrl;
        this.apiAdm = apiAdm;
        this.citas = [];
        this.repetir = false;
        // Ingreso taller 1
        this.tallerNombre = ""; // ok
        this.telefono = null; // ok
        this.calle = ""; // ok
        this.numero = null; // ok
        this.colonia = ""; // ok
        this.delegacion = ""; // ok
        this.estado = ""; // ok
        this.isInGoogle = false;
        this.direccion = "";
        // Ingreso taller 2
        this.motivos = "";
        this.abierto = null;
        this.aceptaPreguntas = null;
        // Preguntas 1
        this.numCambAceite = null; // ok
        this.numMecanicos = null; // ok
        this.numeroFosas = null; // ok
        this.stockTambores = null; // ok
        this.numEquLubricacion = null; // ok
        this.fotoInterior = "";
        this.fotoExterior = "";
        this.contactoEntrenamiento = ""; // ok
        this.telefonoEntrenamiento = null; // ok
        this.emailEntrenamiento = ""; // ok
        this.contactoComercial = ""; // ok
        this.telefonoComercial = null; // ok
        this.emailComercial = ""; // ok
        // Agendar cita
        this.diaPreferido = "";
        this.confirmarNombreContacto = "";
        this.confirmarTelefonoTaller = null;
        this.posponerMotivo = "";
        this.otroMotivo = "";
        // -- solo para mostrar
        this.diaPreferidoForShow = "DD/MM/AAAA"; // <--
    }
    // IMPORTANTE: Falta la dirección, fecha y hora a este form
    ForzarcitaPage.prototype.ionViewWillEnter = function () {
        console.log("entra a forzar", this.apiAdm.params);
        if (this.apiAdm.params != null &&
            this.apiAdm.params.desde == "calendario") {
            var fechadata = this.apiAdm.params.data;
            //console.log("fecha data", fechadata);
            this.diaPreferido = fechadata.selectedDateSend;
        }
    };
    ForzarcitaPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ForzarcitaPage");
    };
    ForzarcitaPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ForzarcitaPage.prototype.repContacto = function () {
        console.log(this.repetir);
        if (this.repetir) {
            this.contactoComercial = this.contactoEntrenamiento;
            this.telefonoComercial = this.telefonoEntrenamiento;
            this.emailComercial = this.emailEntrenamiento;
        }
    };
    ForzarcitaPage.prototype.save = function () {
        // let status = "Pendiente";
        // if (value == 1) {
        //   status = "Pendiente";
        // } else {
        //   status = "Pospuesto";
        // }
        var _this = this;
        this.apiAdm
            .guardarTaller(
        // Ingreso taller 1
        this.tallerNombre, this.telefono, this.calle, this.numero, this.colonia, this.delegacion, this.estado, this.isInGoogle, this.direccion, 
        // Ingreso taller 2
        this.motivos, this.abierto, this.aceptaPreguntas, 
        // Preguntas 1
        this.numCambAceite, this.numMecanicos, this.numeroFosas, this.stockTambores, this.numEquLubricacion, this.fotoInterior, this.fotoExterior, this.contactoEntrenamiento, this.telefonoEntrenamiento, this.emailEntrenamiento, this.contactoComercial, this.telefonoComercial, this.emailComercial
        // // Agendar cita
        // this.horaCita,
        // this.diaPreferido,
        // this.confirmarNombreContacto,
        // this.confirmarTelefonoTaller,
        // this.posponerMotivo,
        // this.otroMotivo,
        // status
        )
            .subscribe(function (x) {
            console.log("Guardado: ", JSON.parse(x["_body"])["data"]);
            var status = "1";
            _this.apiAdm
                .guardarVisita(JSON.parse(x["_body"])["data"], _this.horaCita, _this.diaPreferido, _this.confirmarNombre, _this.confirmarTelefono, status, "", "", "")
                .subscribe(function (x) {
                _this.agendarAlert();
            });
            // if (value == 1) {
            //   this.agendarAlert();
            // } else {
            //   this.citaPospuesta();
            // }
        });
    };
    // ***********************************************************
    // ---------------- ALERTS
    // ***********************************************************
    ForzarcitaPage.prototype.agendarAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: "Taller agendado correctamente. Muchas gracias.",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    ForzarcitaPage.prototype.goToCalendario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calendario_calendario__["a" /* CalendarioPage */], true);
    };
    ForzarcitaPage.prototype.dateForShow = function (date) {
        if (date) {
            // Date for show
            var dateForShow = new Date(date.replace(/-/g, "/"));
            var dateForShowB = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
            return dateForShowB;
        }
        else {
            return "DD/MM/AAAA";
        }
    };
    ForzarcitaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-forzarcita",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/forzarcita/forzarcita.html"*/'<ion-header>\n    <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content padding>\n\n\n    <h2>FORZAR CITA - ALTA TALLER</h2>\n\n\n    <ion-grid class="main-grid">\n\n        <ion-row>\n            <!-- COLUMNA IZQUIERDA -->\n            <ion-col col-6 class="col-left">\n                <!-- --- -->\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Nombre comercial</ion-label>\n                            <ion-input [(ngModel)]="tallerNombre" type="text" required></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-8>\n                        <ion-item>\n                            <ion-label floating>Calle</ion-label>\n                            <ion-input [(ngModel)]="calle" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-4>\n                        <ion-item>\n                            <ion-label floating>Número</ion-label>\n                            <ion-input [(ngModel)]="numero" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>Colonia</ion-label>\n                            <ion-input [(ngModel)]="colonia" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>Delegación</ion-label>\n                            <ion-input [(ngModel)]="delegacion" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Estado</ion-label>\n                            <ion-select [(ngModel)]="estado" interface="popover">\n                                <ion-option>A</ion-option>\n                                <ion-option>B</ion-option>\n                            </ion-select>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Teléfono</ion-label>\n                            <ion-input [(ngModel)]="telefono" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Contacto entrenamiento</ion-label>\n                            <ion-input [(ngModel)]="contactoEntrenamiento" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>Teléfono entrenamiento</ion-label>\n                            <ion-input [(ngModel)]="telefonoEntrenamiento" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>Email entrenamiento</ion-label>\n                            <ion-input [(ngModel)]="emailEntrenamiento" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <!-- --- -->\n            </ion-col>\n\n\n\n            <!-- COLUMNA DERECHA -->\n            <ion-col col-6 class="col-right">\n                <!-- --- -->\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Número de cambios de aceite a la semana</ion-label>\n                            <ion-input [(ngModel)]="numCambAceite" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Número de mecánicos</ion-label>\n                            <ion-input [(ngModel)]="numMecanicos" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Número de fosas y/o rampas/porterías</ion-label>\n                            <ion-input [(ngModel)]="numeroFosas" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Stock de tambores</ion-label>\n                            <ion-input [(ngModel)]="stockTambores" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Número de equipos de lubricación</ion-label>\n                            <ion-input [(ngModel)]="numEquLubricacion" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n\n                <ion-row>\n\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label>Repetir contacto anterior</ion-label>\n                            <ion-checkbox (click)="repContacto()" [(ngModel)]="repetir"></ion-checkbox>\n                        </ion-item>\n                    </ion-col>\n\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Contacto comercial/comprador</ion-label>\n                            <ion-input [(ngModel)]="contactoComercial" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>Teléfono comercial/comprador</ion-label>\n                            <ion-input [(ngModel)]="telefonoComercial" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-6>\n                        <ion-item>\n                            <ion-label floating>E-mail comercial/comprador</ion-label>\n                            <ion-input [(ngModel)]="emailComercial" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n                <!-- --- -->\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-12>\n                <h2>Cita</h2>\n            </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n            <ion-col col-6 class="col-left">\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Hora cita</ion-label>\n                            <ion-input [(ngModel)]="horaCita" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-row>\n                            <ion-col col-7 class="text">\n                                <span class="span-grey">Día preferido:\n                                </span><strong>{{ dateForShow(diaPreferido) }}</strong>\n                            </ion-col>\n                            <ion-col col-5 class="btn">\n                                <button class="btn-castrol-grey2" (click)="goToCalendario()">CALENDARIO</button>\n                            </ion-col>\n                        </ion-row>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n            <ion-col col-6 class="col-right">\n                <ion-row>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Confirmar nombre contacto</ion-label>\n                            <ion-input [(ngModel)]="confirmarNombre" type="text"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                    <ion-col col-12>\n                        <ion-item>\n                            <ion-label floating>Confirmar teléfono contacto</ion-label>\n                            <ion-input [(ngModel)]="confirmarTelefono" type="tel"></ion-input>\n                        </ion-item>\n                    </ion-col>\n                </ion-row>\n            </ion-col>\n        </ion-row>\n\n    </ion-grid>\n\n    <ion-grid center text-center class="buttons-grid">\n        <ion-row center text-center>\n            <ion-col center text-center>\n                <button block class="btn-castrol-rojo" (click)="goBack()">Paso atrás</button>\n            </ion-col>\n            <ion-col>\n                <button block class="btn-castrol-verde" (click)="save()">Guardar</button>\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n<ion-footer>\n    <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/forzarcita/forzarcita.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */]])
    ], ForzarcitaPage);
    return ForzarcitaPage;
}());

//# sourceMappingURL=forzarcita.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPermisosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarPermisosPage = /** @class */ (function () {
    function EditarPermisosPage(navCtrl, navParams, apiAdm, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.usuario = {};
    }
    EditarPermisosPage.prototype.ionViewDidLoad = function () {
        this.usuario = this.navParams.get("user");
        // ----
        this.usuarioid = this.usuario.usuarioid;
        this.nombreusuario = this.usuario.nombreusuario;
        this.email = this.usuario.email;
        this.rol = this.usuario.rol;
        this.estado = this.usuario.estado;
        this.activo = this.usuario.activo;
        this.password = this.usuario.password;
        //
        console.log(this.usuario);
    };
    EditarPermisosPage.prototype.editar = function () {
        var _this = this;
        this.apiAdm
            .editarUsuario(this.usuarioid, this.nombreusuario, this.email, this.rol, this.password, this.estado, this.activo)
            .subscribe(function (x) {
            _this.alertEditado();
            console.log(x);
        });
    };
    EditarPermisosPage.prototype.alertEditado = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "Usuario editado con éxito.",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditarPermisosPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EditarPermisosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-editar-permisos",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/editar-permisos/editar-permisos.html"*/'<ion-header>\n  <header [headerTitle]="\'\'"></header>\n</ion-header>\n\n<ion-content>\n\n\n  <div class="main-title">\n    <h2 padding>EDITAR PERMISOS DE USUARIO</h2>\n  </div>\n\n\n  <ion-grid class="usuarios-grid">\n\n    <ion-row class="main-row-usuarios">\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Nombre de usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="nombreusuario"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="text" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Rol</ion-label>\n          <ion-select [(ngModel)]="rol">\n            <ion-option value="2">Scouting</ion-option>\n            <ion-option value="3">Brigada</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Ciudad</ion-label>\n          <ion-input type="text" [(ngModel)]="estado"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Activo</ion-label>\n          <ion-select [(ngModel)]="activo">\n            <ion-option value="1">Activo</ion-option>\n            <ion-option value="0">Inactivo</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid center text-center class="buttons-grid">\n    <ion-row center text-center>\n      <ion-col center text-center>\n        <button class="btn-castrol-rojo" block (click)="goBack()">Volver sin guardar</button>\n      </ion-col>\n      <ion-col>\n        <button class="btn-castrol-verde" block (click)="editar()">Guardar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/editar-permisos/editar-permisos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarPermisosPage);
    return EditarPermisosPage;
}());

//# sourceMappingURL=editar-permisos.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescargarTalleresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DescargarTalleresPage = /** @class */ (function () {
    function DescargarTalleresPage(navCtrl, navParams, datePipe, apiAdm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePipe = datePipe;
        this.apiAdm = apiAdm;
        this.filtro = 1;
    }
    DescargarTalleresPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DescargarTalleresPage");
    };
    DescargarTalleresPage.prototype.addEvent = function (event) {
        // Selected
        var fechaDesde = event.targetElement.value;
        fechaDesde = new Date(fechaDesde);
        this.fechaDesde = this.datePipe.transform(fechaDesde, "yyyy-MM-dd");
        // Como se muestra en el DOM
        var dateForShow = new Date(event.targetElement.value);
        event.targetElement.value = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
    };
    DescargarTalleresPage.prototype.addEventB = function (event) {
        // Selected
        var fechaHasta = event.targetElement.value;
        fechaHasta = new Date(fechaHasta);
        this.fechaHasta = this.datePipe.transform(fechaHasta, "yyyy-MM-dd");
        // Como se muestra en el DOM
        var dateForShow = new Date(event.targetElement.value);
        event.targetElement.value = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
    };
    DescargarTalleresPage.prototype.descargar = function () {
        console.log(this.fechaDesde, " ", this.fechaHasta);
        // this.apiAdm
        //   .descargarTalleres(this.fechaDesde, this.fechaHasta)
        //   .subscribe(x => {
        //     console.log("Descargado: ", x);
        //   });
        window.open("https://castrol.tenesfiebre.com/apirest/downloadexcel.php?fechadesde=" +
            this.fechaDesde +
            "&fechahasta=" +
            this.fechaHasta +
            "&filtro=" +
            this.filtro);
    };
    DescargarTalleresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-descargar-talleres",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/descargar-talleres/descargar-talleres.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content>\n\n\n  <div class="main-title">\n\n    <h2>DESCARGAR BASE DE DATOS</h2>\n\n  </div>\n\n\n  <ion-grid class="main">\n\n    <h3>Descargar base de talleres visitados</h3>\n\n    <ion-row class="row-fechas">\n\n      <ion-col col-6>\n        <mat-form-field>\n          <input (dateInput)="addEvent($event)" matInput [matDatepicker]="picker" placeholder="Desde fecha de alta">\n          <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n          <mat-datepicker #picker></mat-datepicker>\n        </mat-form-field>\n      </ion-col>\n\n      <ion-col col-6>\n        <mat-form-field>\n          <input (dateInput)="addEventB($event)" matInput [matDatepicker]="pickerB" placeholder="Hasta fecha de alta">\n          <mat-datepicker-toggle matSuffix [for]="pickerB"></mat-datepicker-toggle>\n          <mat-datepicker #pickerB></mat-datepicker>\n        </mat-form-field>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-list radio-group [(ngModel)]="filtro">\n          <ion-item>\n            <ion-label>Todos</ion-label>\n            <ion-radio value="1"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>Se encontraron cerrados</ion-label>\n            <ion-radio value="2"></ion-radio>\n          </ion-item>\n          <ion-item>\n            <ion-label>No quisieron responder</ion-label>\n            <ion-radio value="3"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </ion-col>\n\n    </ion-row>\n    <ion-row center text-center class="row-buttons">\n      <ion-col center text-center>\n        <button block class="btn-castrol-verde" (click)="descargar()">DESCARGAR</button>\n      </ion-col>\n      <!-- <ion-col>\n          <button class="btn-castrol-verde" [disabled]="selectedDate?.length != 10" block\n            (click)="guardarFecha()">CONTINUAR</button>\n        </ion-col> -->\n    </ion-row>\n\n  </ion-grid>\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/descargar-talleres/descargar-talleres.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__["a" /* ApiAdmProvider */]])
    ], DescargarTalleresPage);
    return DescargarTalleresPage;
}());

//# sourceMappingURL=descargar-talleres.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReagendarcitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__confirmacion_confirmacion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_map__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReagendarcitasPage = /** @class */ (function () {
    function ReagendarcitasPage(navCtrl, navParams, apiAdm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.citasReagendar = [];
    }
    ReagendarcitasPage.prototype.ionViewDidLoad = function () {
        this.getReagendar();
    };
    ReagendarcitasPage.prototype.getReagendar = function () {
        var _this = this;
        this.apiAdm.getReagendar().subscribe(function (x) {
            _this.citasReagendar = x["data"];
            console.log(x["data"]);
        });
    };
    ReagendarcitasPage.prototype.reagendar = function (cita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__confirmacion_confirmacion__["a" /* ConfirmacionPage */], {
            cita: cita,
            reagendar: true
        });
    };
    ReagendarcitasPage.prototype.modificar = function (cita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__confirmacion_confirmacion__["a" /* ConfirmacionPage */], {
            cita: this.citasReagendar,
            // citas: this.fullCitas,
            editionMode: true
        });
    };
    ReagendarcitasPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__map_map__["a" /* MapPage */], {
            citas: this.citasReagendar
        });
    };
    // ---
    // ***********************************************************
    // ---------------- Set Status
    // ***********************************************************
    ReagendarcitasPage.prototype.setStatus = function (num) {
        switch (num) {
            case 1:
                return "Pendiente";
            case 2:
                return "Pospuesto";
            case 3:
                return "No acepta preguntas";
            case 4:
                return "Cerrado";
            default:
                break;
        }
    };
    ReagendarcitasPage.prototype.setConfirm = function (num) {
        switch (num) {
            case "1":
                return "Pendiente";
            case "2":
                return "Confirmó";
            case "3":
                return "Canceló";
            default:
                break;
        }
    };
    ReagendarcitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-reagendarcitas",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/reagendarcitas/reagendarcitas.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content padding>\n\n  <h2>REAGENDAR CITAS</h2>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4>\n        <button class="btn-castrol-verde btn-invert" (click)="goToMap()">Ver mapa</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="table-citas">\n    <h3 padding>Citas a reagendar</h3>\n    <div class="cita-row-div" *ngFor="let cita of citasReagendar">\n      <ion-row>\n        <ion-col>\n          <span class="citaId"># {{ cita.tallerid }}</span> {{ cita.tallernombre }}\n        </ion-col>\n        <!-- <ion-col col-3></ion-col> -->\n        <!-- <ion-col col-1>{{ cita.litros }}</ion-col> -->\n        <ion-col>Tel. {{ cita.telefono }}</ion-col>\n        <ion-col class="status-red">\n          Cancelado</ion-col>\n        <ion-col>{{ cita.diapreferido }}, {{  cita.horacita }} hs.</ion-col>\n        <ion-col col-2 text-center class="confirmar" class="btn-castrol-verde" (click)="reagendar(cita)">\n          Reagendar\n        </ion-col>\n        <ion-col col-2 text-center class="confirmar" class="btn-castrol-rojo" (click)="descartar(cita)">\n          Descartar\n        </ion-col>\n      </ion-row>\n    </div>\n    <!-- <h3 padding>Citas reagendadas</h3>\n    <div class="cita-row-div" *ngFor="let cita of citasReagendar">\n      <ion-row *ngIf="cita.confirmado == \'1\'">\n        <ion-col> <span class="citaId"># {{ cita.tallerid }}</span> {{ cita.tallernombre }} </ion-col>\n        <ion-col>Tel. {{ cita.telefono }}</ion-col>\n        <ion-col class="status-green">{{ setConfirm(cita.confirmado) }}</ion-col>\n        <ion-col>{{ cita.diapreferido }}, {{  cita.horacita }} hs.</ion-col>\n        <ion-col class="modificar btn-castrol-rojo" (click)="modificar(cita)">Modificar</ion-col>\n      </ion-row>\n    </div> -->\n\n  </ion-grid>\n\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/reagendarcitas/reagendarcitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */]])
    ], ReagendarcitasPage);
    return ReagendarcitasPage;
}());

//# sourceMappingURL=reagendarcitas.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisosbkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_permisosbk_editar_permisosbk__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PermisosbkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PermisosbkPage = /** @class */ (function () {
    function PermisosbkPage(navCtrl, navParams, apiAdm, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.usuarios = [];
        this.read = true;
    }
    PermisosbkPage.prototype.ionViewWillEnter = function () {
        this.getUsers();
    };
    PermisosbkPage.prototype.getUsers = function () {
        var _this = this;
        this.apiAdm.getUsersBackOffice().subscribe(function (x) {
            _this.usuarios = x["data"];
            console.log(x["data"]);
        });
    };
    PermisosbkPage.prototype.alta = function (num) {
        var _this = this;
        this.apiAdm
            .altaUsuario(this.usuarioScout, this.passwordScout, this.emailScout, this.estado, "1", 1)
            .subscribe(function (x) {
            _this.done();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
        });
    };
    // ALERTS
    PermisosbkPage.prototype.done = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "¡Usuario creado con éxito!",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.estado = "";
                        // ----
                        _this.usuarioScout = "";
                        _this.passwordScout = "";
                        _this.emailScout = "";
                        // ----
                        _this.usuarioBrig = "";
                        _this.passwordBrig = "";
                        _this.emailBrig = "";
                        // this.navCtrl.setRoot(GestioncitasPage);
                    }
                }
            ]
        });
        prompt.present();
    };
    PermisosbkPage.prototype.setRol = function (num) {
        switch (num) {
            case "2":
                return "Scouting";
            case "3":
                return "Brigada";
            default:
                break;
        }
    };
    PermisosbkPage.prototype.setActivo = function (num) {
        switch (num) {
            case "1":
                return "Activo";
            case "0":
                return "Inactivo";
            default:
                break;
        }
    };
    PermisosbkPage.prototype.borrarUsuario = function (user) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "¿Está seguro que desea borrar el usuario " + user.nombreusuario + "?",
            buttons: [
                {
                    text: "Sí",
                    handler: function (data) {
                        _this.apiAdm.borrarUsuario(user).subscribe(function (x) {
                            _this.alertBorrado();
                        });
                    }
                },
                {
                    text: "Cancelar",
                    handler: function (data) { }
                }
            ]
        });
        prompt.present();
    };
    PermisosbkPage.prototype.alertBorrado = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "Usuario borrado con éxito.",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.ionViewWillEnter();
                    }
                }
            ]
        });
        prompt.present();
    };
    PermisosbkPage.prototype.editarUsuario = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_permisosbk_editar_permisosbk__["a" /* EditarPermisosbkPage */], {
            user: user
        });
    };
    PermisosbkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-permisosbk',template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/permisosbk/permisosbk.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content>\n\n  <div class="main-title">\n    <h2 padding>GESTIÓN DE USUARIOS</h2>\n  </div>\n\n  <div padding class="bajada">\n    <h4>Listado de administradores de backoffice</h4>\n  </div>\n\n  <ion-grid class="usuarios-grid">\n    <ion-row class="main-row-usuarios">\n      <ion-col>Nombre de usuario</ion-col>\n      <ion-col>Email</ion-col>\n      <ion-col>Rol</ion-col>\n      <ion-col>Ciudad</ion-col>     \n      <ion-col>Acciones</ion-col>\n    </ion-row>\n    <ion-row class="sec-row-usuarios" *ngFor="let user of usuarios">\n      <ion-col>\n        {{ user.nombreusuario }}\n      </ion-col>\n      <ion-col> {{ user.email }} </ion-col>\n      <ion-col> Administrador Backoffice </ion-col>\n      <ion-col> {{ user.estado }} </ion-col>      \n      <ion-col class="actions">\n        <span (click)="editarUsuario(user)">Editar</span> |\n        <span (click)="borrarUsuario(user)">Borrar</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="bajada" padding>\n    <h4>Agregar nuevos usuarios</h4>\n  </div>\n\n  <ion-grid center class="main-grid">\n    <ion-row left>\n      <ion-col col-4>\n        <ion-item>\n          <!-- <ion-label>Estado</ion-label>\n          <ion-select [(ngModel)]="estado" interface="popover">\n            <ion-option value="NL">Nuevo León</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n          </ion-select> -->\n          <ion-label>Ciudad</ion-label>\n          <ion-input [(ngModel)]="estado" type="text" value="México DF" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <!-- COLUMNA IZQUIERDA -->\n      <ion-col col-6 class="col-izquierda">\n        <!-- --- -->\n        <ion-row>\n          <h3>Administrador</h3>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Nombre de usuario</ion-label>\n              <ion-input [(ngModel)]="usuarioScout" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Clave</ion-label>\n              <ion-input [(ngModel)]="passwordScout" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>E-mail para recupero</ion-label>\n              <ion-input [(ngModel)]="emailScout" type="email"></ion-input>\n            </ion-item>\n          </ion-col>\n         \n          <ion-col col-12 class="button-permisos">\n            <div>\n              <button class="btn-castrol-verde" block center (click)="alta(2)">Guardar</button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- --- -->\n      </ion-col>\n      <!-- COLUMNA DERECHA -->\n      <ion-col col-6 class="col-derecha">\n        <!-- --- -->\n        \n        <!-- --- -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/permisosbk/permisosbk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PermisosbkPage);
    return PermisosbkPage;
}());

//# sourceMappingURL=permisosbk.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditarPermisosbkPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditarPermisosbkPage = /** @class */ (function () {
    function EditarPermisosbkPage(navCtrl, navParams, apiAdm, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.usuario = {};
    }
    EditarPermisosbkPage.prototype.ionViewDidLoad = function () {
        this.usuario = this.navParams.get("user");
        // ----
        this.usuarioid = this.usuario.usuarioid;
        this.nombreusuario = this.usuario.nombreusuario;
        this.email = this.usuario.email;
        this.rol = this.usuario.rol;
        this.estado = this.usuario.estado;
        this.activo = this.usuario.activo;
        this.password = this.usuario.password;
        //
        console.log(this.usuario);
    };
    EditarPermisosbkPage.prototype.editar = function () {
        var _this = this;
        this.apiAdm
            .editarUsuario(this.usuarioid, this.nombreusuario, this.email, "1", this.password, this.estado, "1")
            .subscribe(function (x) {
            _this.alertEditado();
            console.log(x);
        });
    };
    EditarPermisosbkPage.prototype.alertEditado = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "Usuario editado con éxito.",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        prompt.present();
    };
    EditarPermisosbkPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    EditarPermisosbkPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editar-permisosbk',template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/editar-permisosbk/editar-permisosbk.html"*/'<ion-header>\n  <header [headerTitle]="\'\'"></header>\n</ion-header>\n\n<ion-content>\n\n\n  <div class="main-title">\n    <h2 padding>EDITAR PERMISOS DE USUARIO</h2>\n  </div>\n\n\n  <ion-grid class="usuarios-grid">\n\n    <ion-row class="main-row-usuarios">\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Nombre de usuario</ion-label>\n          <ion-input type="text" [(ngModel)]="nombreusuario"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="text" [(ngModel)]="email"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="text" [(ngModel)]="password"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-6>\n        <ion-item>\n          <ion-label floating>Ciudad</ion-label>\n          <ion-input type="text" [(ngModel)]="estado"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid center text-center class="buttons-grid">\n    <ion-row center text-center>\n      <ion-col center text-center>\n        <button class="btn-castrol-rojo" block (click)="goBack()">Volver sin guardar</button>\n      </ion-col>\n      <ion-col>\n        <button class="btn-castrol-verde" block (click)="editar()">Guardar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/editar-permisosbk/editar-permisosbk.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], EditarPermisosbkPage);
    return EditarPermisosbkPage;
}());

//# sourceMappingURL=editar-permisosbk.js.map

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/basetalleres/basetalleres.module": [
		385,
		14
	],
	"../pages/calendario/calendario.module": [
		399,
		13
	],
	"../pages/cambiarclave/cambiarclave.module": [
		386,
		12
	],
	"../pages/confirmacion/confirmacion.module": [
		387,
		11
	],
	"../pages/descargar-talleres/descargar-talleres.module": [
		388,
		10
	],
	"../pages/editar-permisos/editar-permisos.module": [
		389,
		9
	],
	"../pages/editar-permisosbk/editar-permisosbk.module": [
		390,
		8
	],
	"../pages/forzarcita/forzarcita.module": [
		391,
		7
	],
	"../pages/gestioncitas/gestioncitas.module": [
		392,
		6
	],
	"../pages/login/login.module": [
		393,
		5
	],
	"../pages/map/map.module": [
		394,
		4
	],
	"../pages/permisos/permisos.module": [
		395,
		3
	],
	"../pages/permisosbk/permisosbk.module": [
		396,
		2
	],
	"../pages/reagendarcitas/reagendarcitas.module": [
		397,
		1
	],
	"../pages/sidemenu/sidemenu.module": [
		398,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GoogleMapsProvider = /** @class */ (function () {
    function GoogleMapsProvider(http, geolocation) {
        this.http = http;
        this.geolocation = geolocation;
        this.markers = [];
        this.apiKey = "AIzaSyAF2VM1_XBDzkcEH5f37EBWpjGtnF15lbQ";
        this.infoWindow = [];
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"]("Error");
        this.currentMessage = this.messageSource.asObservable();
    }
    GoogleMapsProvider.prototype.initMap = function (mapElement) {
        var _this = this;
        var mapProduct = mapElement;
        return new Promise(function (resolve) {
            _this.geolocation.getCurrentPosition().then(function (position) {
                var myPosition = new google.maps.LatLng(
                // position.coords.latitude,
                // position.coords.longitude
                -34.6008031, -58.5011004);
                var mapOptions = {
                    center: myPosition,
                    zoom: 12,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    streetViewControl: false,
                    disableDefaultUI: false,
                    fullscreenControl: false,
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    rotateControl: false,
                    styles: [
                        { featureType: "poi", stylers: [{ visibility: "off" }] }
                        // { featureType: "transit", stylers: [{ visibility: "off" }] },
                        // {
                        //   featureType: "landscape.natural",
                        //   stylers: [{ visibility: "off" }]
                        // }
                    ]
                };
                _this.map = new google.maps.Map(mapProduct, mapOptions);
                resolve(true);
            }, 
            // Here is the error catching that needs to be added
            function (err) {
                console.log(" Error : " + JSON.stringify(err));
            });
        });
    };
    GoogleMapsProvider.prototype.parseLocation = function (citas) {
        var _this = this;
        var geocoder = new google.maps.Geocoder();
        var coords = [];
        if (citas) {
            var _loop_1 = function (cita) {
                direccion = cita.direccion;
                geocoder.geocode({ address: direccion }, function (results, status) {
                    console.log(results[0]);
                    if (results[0]) {
                        coords = results[0].geometry.location;
                        _this.addMarker(coords, cita);
                    }
                });
            };
            var direccion;
            for (var _i = 0, citas_1 = citas; _i < citas_1.length; _i++) {
                var cita = citas_1[_i];
                _loop_1(cita);
            }
        }
        else {
            console.log("Error, no hay array");
        }
    };
    GoogleMapsProvider.prototype.addMarker = function (coords, cita) {
        var dirs = {
            lat: coords.lat(),
            lng: coords.lng()
        };
        // --------------
        var markerColor;
        if (cita.isingoogle === "1") {
            markerColor = "marker-verde.png";
        }
        else {
            markerColor = "marker-rojo.png";
        }
        // --------------
        var status = this.setStatus(cita.status);
        // --------------
        var marker = new google.maps.Marker({
            position: dirs,
            map: this.map,
            // animation: google.maps.Animation.DROP,
            // icon: "../../assets/imgs/" + markerColor,
            icon: "./assets/imgs/" + markerColor,
            // Info de los talleres
            tallerid: cita.tallerid,
            visitaid: cita.visitaid,
            tallernombre: cita.tallernombre,
            direccion: cita.direccion,
            telefono: cita.telefono,
            nombrecontacto: cita.contactocomercial,
            status: status,
            diapreferido: cita.diapreferido,
            horacita: cita.horacita
        });
        marker.setMap(this.map);
        this.addInfoWindow(marker);
    };
    GoogleMapsProvider.prototype.addInfoWindow = function (marker) {
        var _this = this;
        // for (let mar of marker) {
        var infoWindowContent = '<div id="content"><h4>' +
            marker.tallernombre +
            "</h4>" +
            "<p>" +
            marker.direccion +
            "</p>" +
            "<p>" +
            marker.telefono +
            "</p>" +
            "<p>" +
            marker.nombrecontacto +
            "</p>" +
            "<p>" +
            marker.status +
            "</p>" +
            "<p>" +
            marker.diapreferido +
            "</p>" +
            "</div>";
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener("click", function () {
            _this.closeAllInfoWindows();
            infoWindow.open(_this.map, marker);
            // ----
            _this.messageSource = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](infoWindow.anchor);
            _this.currentMessage = _this.messageSource.asObservable();
        });
        // ----
        this.infoWindow.push(infoWindow);
    };
    //
    GoogleMapsProvider.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    GoogleMapsProvider.prototype.closeAllInfoWindows = function () {
        for (var _i = 0, _a = this.infoWindow; _i < _a.length; _i++) {
            var window_1 = _a[_i];
            window_1.close();
        }
    };
    GoogleMapsProvider.prototype.setStatus = function (num) {
        switch (num) {
            case "1":
                return "Pendiente";
            case "2":
                return "Pospuesto";
            case "3":
                return "No acepta preguntas";
            case "4":
                return "Cerrado";
            default:
                break;
        }
    };
    GoogleMapsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */]])
    ], GoogleMapsProvider);
    return GoogleMapsProvider;
}());

//# sourceMappingURL=google-maps.js.map

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiAdmProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiAdmProvider = /** @class */ (function () {
    function ApiAdmProvider(http, httpPost) {
        this.http = http;
        this.httpPost = httpPost;
        // ********** API LINK
        // api_url: string = "http://ctrlztest.com.ar/castrol/apirest/";
        this.api_url = "https://castrol.tenesfiebre.com/apirest/";
        this.api_url_local = "../../assets/json/";
    }
    // ***********************************************************
    // ---------------- LOGIN / LOGIN PASS
    // ***********************************************************
    ApiAdmProvider.prototype.login = function (usuario, password) {
        return this.http.get(this.api_url + "login.php?usuario=" + usuario + "&clave=" + password);
    };
    ApiAdmProvider.prototype.recuperarClave = function (data) {
        var api = this.api_url + "recuperarclave.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({
            email: data
        });
        console.log(body);
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
        //return this.http.get(this.api_url + "recuperarclave.php?email=" + data);
    };
    // ***********************************************************
    // ---------------- GET - Gestion de citas
    // ***********************************************************
    // getCitas(): Observable<any> {
    //   return this.http.get(this.api_url + "arrancaeladmin.php");
    // }
    ApiAdmProvider.prototype.getCitas = function () {
        return this.http.get(this.api_url + "traervisitasadmin.php"
        //this.api_url_local + "traercitas.json"
        );
    };
    ApiAdmProvider.prototype.getBrigadasVisitas = function () {
        return this.http.get(this.api_url + "traerbrigadasyvisitas.php"
        //  this.api_url_local + "traercitas.json"
        );
    };
    // ***********************************************************
    // ---------------- Post - Gestion de citas
    // ***********************************************************
    ApiAdmProvider.prototype.confirmarCita = function (visitaid, horaCita, diaPreferido, confirmado, brigadaid) {
        var api = this.api_url + "confirmarvisita.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({
            visitaid: visitaid,
            confirmado: confirmado,
            horacita: horaCita,
            diapreferido: diaPreferido,
            brigadaid: brigadaid
        });
        console.log("confirmacion.php: ", body);
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
    };
    // ***********************************************************
    // ---------------- Cambiar clave
    // ***********************************************************
    ApiAdmProvider.prototype.cambiarClave = function (claveAnterior, nuevaClave) {
        var api = this.api_url + "cambiarpassword.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({
            usuarioid: this.dataUser.usuarioid,
            claveanterior: claveAnterior,
            nuevaclave: nuevaClave
        });
        console.log(body);
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
    };
    // ***********************************************************
    // ---------------- Alta usuario
    // ***********************************************************
    ApiAdmProvider.prototype.altaUsuario = function (usuario, password, email, estado, activo, num) {
        var api = this.api_url + "altausuario.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = {
            // Ingreso taller 1
            nombreusuario: usuario,
            password: password,
            email: email,
            estado: estado,
            activo: activo,
            rol: num
        };
        console.log("alta", body);
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
    };
    // ***********************************************************
    // ---------------- CALENDARIO
    // ***********************************************************
    ApiAdmProvider.prototype.getFechasOcupadas = function () {
        return this.http.get(this.api_url + "traerfechas.php");
    };
    // ***********************************************************
    // ---------------- Guardar taller
    // ***********************************************************
    ApiAdmProvider.prototype.boolToNumber = function (value) {
        if (value == true) {
            return 1;
        }
        else if (value == false) {
            return 0;
        }
    };
    ApiAdmProvider.prototype.guardarVisita = function (
        // Agendar cita
        tallerId, horaCita, diaPreferido, confirmarNombreContacto, confirmarTelefonoTaller, posponerMotivo, otroMotivo, status, turno) {
        var api = this.api_url + "crearvisita.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = [
            {
                // Agendar cita
                tallerid: tallerId,
                horacita: horaCita,
                diapreferido: diaPreferido,
                confirmarnombrecontacto: confirmarNombreContacto,
                confirmartelefonotaller: confirmarTelefonoTaller,
                posponermotivo: posponerMotivo,
                otromotivo: otroMotivo,
                status: status,
                turno: turno
            }
        ];
        for (var i = 0; i < body.length; i++) {
            var obj = body[i];
            for (var key in obj) {
                // var name = key;
                // var value = obj[key];
                if (typeof obj[key] == "boolean") {
                    obj[key] = this.boolToNumber(obj[key]);
                }
            }
        }
        var bodyB = JSON.stringify(body[0]);
        console.log("Body 1: ", bodyB);
        return this.httpPost.post(api, bodyB, {
            headers: headers,
            withCredentials: true
        });
    };
    ApiAdmProvider.prototype.guardarTaller = function (
        // Ingreso taller 1
        tallerNombre, telefono, calle, numero, colonia, delegacion, estado, isInGoogle, direccion, 
        // Ingreso taller 2
        motivos, abierto, aceptaPreguntas, 
        // Preguntas 1
        numCambAceite, numMecanicos, numeroFosas, stockTambores, numEquLubricacion, fotoInterior, fotoExterior, contactoEntrenamiento, telefonoEntrenamiento, emailEntrenamiento, contactoComercial, telefonoComercial, emailComercial) {
        var api = this.api_url + "creartaller.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = [
            {
                // Ingreso taller 1
                tallernombre: tallerNombre,
                telefono: telefono,
                calle: calle,
                numero: numero,
                colonia: colonia,
                delegacion: delegacion,
                estado: estado,
                isingoogle: isInGoogle,
                direccion: direccion,
                // Ingreso taller 2
                motivos: motivos,
                abierto: abierto,
                aceptapreguntas: aceptaPreguntas,
                // Preguntas 1
                numcambaceite: numCambAceite,
                nummecanicos: numMecanicos,
                numeroFosas: numeroFosas,
                stocktambores: stockTambores,
                numequlubricacion: numEquLubricacion,
                fotointerior: fotoInterior,
                fotoexterior: fotoExterior,
                contactoentrenamiento: contactoEntrenamiento,
                telefonoentrenamiento: telefonoEntrenamiento,
                emailentrenamiento: emailEntrenamiento,
                contactocomercial: contactoComercial,
                telefonocomercial: telefonoComercial,
                emailcomercial: emailComercial
            }
        ];
        for (var i = 0; i < body.length; i++) {
            var obj = body[i];
            for (var key in obj) {
                // var name = key;
                // var value = obj[key];
                if (typeof obj[key] == "boolean") {
                    obj[key] = this.boolToNumber(obj[key]);
                }
            }
        }
        var bodyB = JSON.stringify(body[0]);
        console.log("Body 1: ", bodyB);
        return this.httpPost.post(api, bodyB, {
            headers: headers,
            withCredentials: true
        });
    };
    ApiAdmProvider.prototype.getUsers = function () {
        return this.http.get(this.api_url + "traerusuarios.php");
    };
    ApiAdmProvider.prototype.getUsersBackOffice = function () {
        return this.http.get(this.api_url + "traerusuariosback.php");
    };
    ApiAdmProvider.prototype.borrarUsuario = function (usuario) {
        var api = this.api_url + "borrarusuario.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({
            usuarioid: usuario.usuarioid
        });
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
    };
    ApiAdmProvider.prototype.editarUsuario = function (usuarioid, nombreusuario, email, rol, clave, estado, activo) {
        var api = this.api_url + "actualizarusuario.php";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT");
        headers.append("Accept", "application/json");
        headers.append("content-type", "application/json");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var body = JSON.stringify({
            usuarioid: usuarioid,
            nombreusuario: nombreusuario,
            email: email,
            rol: rol,
            clave: clave,
            estado: estado,
            activo: activo
        });
        console.log("body", body);
        return this.httpPost.post(api, body, {
            headers: headers,
            withCredentials: true
        });
    };
    ApiAdmProvider.prototype.getReagendar = function () {
        return this.http.get(this.api_url + "traervisitasareagendar.php");
    };
    ApiAdmProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ApiAdmProvider);
    return ApiAdmProvider;
}());

//# sourceMappingURL=api-adm.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(277);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_header_header__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_datetime_datetime__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_gestioncitas_gestioncitas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_permisos_permisos__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_basetalleres_basetalleres__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_confirmacion_confirmacion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forzarcita_forzarcita__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__material_module__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_cambiarclave_cambiarclave__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_common_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_http__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_google_maps_google_maps__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_map_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_descargar_talleres_descargar_talleres__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_editar_permisos_editar_permisos__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_reagendarcitas_reagendarcitas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_permisosbk_permisosbk__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_editar_permisosbk_editar_permisosbk__ = __webpack_require__(153);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                // ---- Pages Admin
                __WEBPACK_IMPORTED_MODULE_10__pages_gestioncitas_gestioncitas__["a" /* GestioncitasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_permisos_permisos__["a" /* PermisosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_basetalleres_basetalleres__["a" /* BasetalleresPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirmacion_confirmacion__["a" /* ConfirmacionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forzarcita_forzarcita__["a" /* ForzarcitaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_basetalleres_basetalleres__["a" /* BasetalleresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cambiarclave_cambiarclave__["a" /* CambiarclavePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_descargar_talleres_descargar_talleres__["a" /* DescargarTalleresPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_permisos_editar_permisos__["a" /* EditarPermisosPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reagendarcitas_reagendarcitas__["a" /* ReagendarcitasPage */],
                // ---- Components
                __WEBPACK_IMPORTED_MODULE_7__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_datetime_datetime__["a" /* DatetimeComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_permisosbk_permisosbk__["a" /* PermisosbkPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editar_permisosbk_editar_permisosbk__["a" /* EditarPermisosbkPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/basetalleres/basetalleres.module#BasetalleresPageModule', name: 'BasetalleresPage', segment: 'basetalleres', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cambiarclave/cambiarclave.module#CambiarclavePageModule', name: 'CambiarclavePage', segment: 'cambiarclave', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/confirmacion/confirmacion.module#ConfirmacionPageModule', name: 'ConfirmacionPage', segment: 'confirmacion', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/descargar-talleres/descargar-talleres.module#DescargarTalleresPageModule', name: 'DescargarTalleresPage', segment: 'descargar-talleres', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-permisos/editar-permisos.module#EditarPermisosPageModule', name: 'EditarPermisosPage', segment: 'editar-permisos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editar-permisosbk/editar-permisosbk.module#EditarPermisosbkPageModule', name: 'EditarPermisosbkPage', segment: 'editar-permisosbk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forzarcita/forzarcita.module#ForzarcitaPageModule', name: 'ForzarcitaPage', segment: 'forzarcita', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gestioncitas/gestioncitas.module#GestioncitasPageModule', name: 'GestioncitasPage', segment: 'gestioncitas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/map/map.module#MapPageModule', name: 'MapPage', segment: 'map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permisos/permisos.module#PermisosPageModule', name: 'PermisosPage', segment: 'permisos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/permisosbk/permisosbk.module#PermisosbkPageModule', name: 'PermisosbkPage', segment: 'permisosbk', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reagendarcitas/reagendarcitas.module#ReagendarcitasPageModule', name: 'ReagendarcitasPage', segment: 'reagendarcitas', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sidemenu/sidemenu.module#SidemenuPageModule', name: 'SidemenuPage', segment: 'sidemenu', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calendario/calendario.module#CalendarioPageModule', name: 'CalendarioPage', segment: 'calendario', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_20__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_21__angular_http__["c" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */],
                // ---- Pages Admin
                __WEBPACK_IMPORTED_MODULE_10__pages_gestioncitas_gestioncitas__["a" /* GestioncitasPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_permisos_permisos__["a" /* PermisosPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_basetalleres_basetalleres__["a" /* BasetalleresPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_confirmacion_confirmacion__["a" /* ConfirmacionPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forzarcita_forzarcita__["a" /* ForzarcitaPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_basetalleres_basetalleres__["a" /* BasetalleresPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_calendario_calendario__["a" /* CalendarioPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_cambiarclave_cambiarclave__["a" /* CambiarclavePage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_descargar_talleres_descargar_talleres__["a" /* DescargarTalleresPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_sidemenu_sidemenu__["a" /* SidemenuPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_editar_permisos_editar_permisos__["a" /* EditarPermisosPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_reagendarcitas_reagendarcitas__["a" /* ReagendarcitasPage */],
                // ---- Components
                __WEBPACK_IMPORTED_MODULE_7__components_header_header__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_datetime_datetime__["a" /* DatetimeComponent */],
                __WEBPACK_IMPORTED_MODULE_31__pages_permisosbk_permisosbk__["a" /* PermisosbkPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_editar_permisosbk_editar_permisosbk__["a" /* EditarPermisosbkPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_date_picker__["a" /* DatePicker */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common__["d" /* DatePipe */],
                __WEBPACK_IMPORTED_MODULE_23__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_geolocation__["a" /* Geolocation */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_gestioncitas_gestioncitas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cambiarclave_cambiarclave__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_permisos_permisos__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_basetalleres_basetalleres__ = __webpack_require__(147);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        // used for an example of ngFor and navigation
        this.pages = [
            { title: "Gestión de citas", component: __WEBPACK_IMPORTED_MODULE_5__pages_gestioncitas_gestioncitas__["a" /* GestioncitasPage */] },
            { title: "Cambiar clave", component: __WEBPACK_IMPORTED_MODULE_6__pages_cambiarclave_cambiarclave__["a" /* CambiarclavePage */] },
            { title: "Editar permisos", component: __WEBPACK_IMPORTED_MODULE_7__pages_permisos_permisos__["a" /* PermisosPage */] },
            { title: "Descargar Base de Talleres", component: __WEBPACK_IMPORTED_MODULE_8__pages_basetalleres_basetalleres__["a" /* BasetalleresPage */] },
            { title: "Salir", component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/app/app.html"*/'<!-- <ion-menu [content]="content">\n    <ion-header class="sidemenu-header">\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="sidemenu-content">\n        <ion-list>\n            <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n                {{p.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n\n</ion-menu> -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "headerTitle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "user", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "header",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/header/header.html"*/'<ion-navbar>\n  <!-- hiddeBackButton -->\n  <div class="row-header">\n\n    <div class="icon-menu">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </div>\n\n\n    <div class="title">\n      <p>Bienvenido <strong>{{ user }}</strong> </p>\n    </div>\n\n    <div class="logo">\n      <div class="container">\n        <img src="assets/imgs/logo.png" alt="">\n      </div>\n    </div>\n\n\n  </div>\n\n\n</ion-navbar>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/header/header.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());

//# sourceMappingURL=header.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_cambiarclave_cambiarclave__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FooterComponent.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */]);
    };
    FooterComponent.prototype.cambiarClave = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_cambiarclave_cambiarclave__["a" /* CambiarclavePage */]);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "footer",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/footer/footer.html"*/'<!-- [hidden]="keyboard.isOpen()" -->\n<ion-grid center text-center>\n\n  <ion-row center text-center>\n\n\n  </ion-row>\n\n</ion-grid>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/footer/footer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
    ], FooterComponent);
    return FooterComponent;
}());

//# sourceMappingURL=footer.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatetimeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the DatetimeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var DatetimeComponent = /** @class */ (function () {
    function DatetimeComponent() {
        console.log('Hello DatetimeComponent Component');
        this.text = 'Hello World';
    }
    DatetimeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'datetime',template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/datetime/datetime.html"*/'<ion-row center>\n  <ion-col>\n    <p text-center><strong>DD/MM/AA</strong> HH:MM</p>\n  </ion-col>\n</ion-row>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/components/datetime/datetime.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], DatetimeComponent);
    return DatetimeComponent;
}());

//# sourceMappingURL=datetime.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__(382);
// material.module.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { NgModule } from "@angular/core";
// import { MatDatepickerModule } from "@angular/material";
// @NgModule({
//   imports: [MatDatepickerModule],
//   exports: [MatDatepickerModule]
// })
// export class MaterialModule {}
// material.module.ts



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatDatepickerModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=material.module.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidemenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambiarclave_cambiarclave__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gestioncitas_gestioncitas__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permisos_permisos__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__descargar_talleres_descargar_talleres__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reagendarcitas_reagendarcitas__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__permisosbk_permisosbk__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_api_adm_api_adm__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SidemenuPage = /** @class */ (function () {
    function SidemenuPage(navCtrl, apiAdm, navParams) {
        this.navCtrl = navCtrl;
        this.apiAdm = apiAdm;
        this.navParams = navParams;
        this.regularUser = true;
        this.dataUser = [];
    }
    SidemenuPage_1 = SidemenuPage;
    SidemenuPage.prototype.ionViewWillEnter = function () {
        if (this.apiAdm.params == "superadmin") {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_8__permisosbk_permisosbk__["a" /* PermisosbkPage */];
            this.regularUser = false;
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_4__gestioncitas_gestioncitas__["a" /* GestioncitasPage */];
            this.regularUser = true;
        }
    };
    SidemenuPage.prototype.ionViewDidLoad = function () {
        this.usuario = this.navParams.get("usuario");
        this.usuarioid = this.navParams.get("usuarioid");
    };
    SidemenuPage.prototype.goToGestion = function () {
        this.navCtrl.setRoot(SidemenuPage_1);
    };
    SidemenuPage.prototype.goToCambiarClave = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cambiarclave_cambiarclave__["a" /* CambiarclavePage */]);
    };
    SidemenuPage.prototype.goToEditarPermisos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__permisos_permisos__["a" /* PermisosPage */]);
    };
    SidemenuPage.prototype.descargarTalleres = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__descargar_talleres_descargar_talleres__["a" /* DescargarTalleresPage */]);
    };
    SidemenuPage.prototype.goToReagendar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__reagendarcitas_reagendarcitas__["a" /* ReagendarcitasPage */]);
    };
    SidemenuPage.prototype.logOut = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], SidemenuPage.prototype, "nav", void 0);
    SidemenuPage = SidemenuPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-sidemenu",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/sidemenu/sidemenu.html"*/'<ion-menu id="sidemenu" [content]="content">\n\n  <ion-header>\n    <ion-grid class="side-menu-header">\n      <ion-row class="head">\n        <ion-col>\n          <h4>MENÚ</h4>\n        </ion-col>\n        <ion-col>\n          <img src="assets/imgs/logo.png" alt="">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-header>\n\n  <ion-content class="sidemenu-content">\n\n    <ion-grid class="side-menu-grid">\n\n      <ion-row class="no-border-top" *ngIf="regularUser" menuClose>\n        <ion-col>\n          <p>Gestión de citas</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="no-border-top" *ngIf="regularUser" (click)="goToReagendar()" menuClose>\n        <ion-col>\n          <p>Reagendar citas</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row (click)="goToCambiarClave()" *ngIf="regularUser" menuClose>\n        <ion-col>\n          <p>Cambiar clave</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row (click)="goToEditarPermisos()" *ngIf="regularUser" menuClose>\n        <ion-col>\n          <p>Gestión de usuarios</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row (click)="descargarTalleres()" *ngIf="regularUser" menuClose>\n        <ion-col>\n          <p>Descargar base de talleres</p>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class="no-border-bottom" (click)="logOut()" menuClose>\n        <ion-col>\n          <p>Salir</p>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content main swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/sidemenu/sidemenu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_9__providers_api_adm_api_adm__["a" /* ApiAdmProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], SidemenuPage);
    return SidemenuPage;
    var SidemenuPage_1;
}());

//# sourceMappingURL=sidemenu.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CambiarclavePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CambiarclavePage = /** @class */ (function () {
    function CambiarclavePage(navCtrl, navParams, alertCtrl, apiAdm) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.apiAdm = apiAdm;
    }
    CambiarclavePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CambiarclavePage");
    };
    CambiarclavePage.prototype.goToLogin = function () {
        var _this = this;
        if (this.nuevaClave === this.repetirClave) {
            this.apiAdm
                .cambiarClave(this.claveAnterior, this.nuevaClave)
                .subscribe(function (x) {
                _this.succes();
            });
        }
        else {
            this.errorPass();
        }
    };
    CambiarclavePage.prototype.goBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__["a" /* SidemenuPage */]);
    };
    // *****************************************
    // ******* POP UPS
    // *****************************************
    CambiarclavePage.prototype.errorPass = function () {
        var alert = this.alertCtrl.create({
            title: "",
            message: "La contraseña no coincide",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        console.log("Ok");
                    }
                }
            ]
        });
        alert.present();
    };
    CambiarclavePage.prototype.succes = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "",
            message: "Tu clave fue modificada con éxito",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    CambiarclavePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-cambiarclave",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/cambiarclave/cambiarclave.html"*/'<ion-header>\n  <header [headerTitle]="\'Cambiar mi clave\'"></header>\n</ion-header>\n\n\n<ion-content>\n\n\n  <ion-grid class="logo-grid" center text-center>\n    <ion-row center text-center>\n      <ion-col col-12 center text-center>\n        <h2>SISTEMA DE SEGUIMIENTO DE BRIGADAS</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="main" center text-center>\n    <ion-row center text-center>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-input placeholder="Clave anterior"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-input placeholder="Nueva clave"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-input placeholder="Repetir clave"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid class="buttons-grid">\n    <ion-row>\n\n      <ion-col col-12>\n        <button (click)="goBack()" center block class="btn-castrol-rojo">CANCELAR</button>\n      </ion-col>\n\n      <ion-col col-12>\n        <button (click)="goToLogin()" center block class=" btn-castrol-verde">GUARDAR</button>\n      </ion-col>\n\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer center text-center>\n  <p>POLÍTICAS DE USO</p>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/cambiarclave/cambiarclave.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__["a" /* ApiAdmProvider */]])
    ], CambiarclavePage);
    return CambiarclavePage;
}());

//# sourceMappingURL=cambiarclave.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cambiarclave_cambiarclave__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, apiAdm, storage, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user == "superadmin" && this.pass == "adminsuper123") {
            this.apiAdm.params = "superadmin";
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__["a" /* SidemenuPage */]);
        }
        else {
            this.apiAdm.login(this.user, this.pass).subscribe(function (x) {
                var dataUser = x["data"];
                if (dataUser.usuarioid != "0") {
                    // 1 - admin
                    // 2 - scout
                    // 3 - brig
                    if (dataUser.rol == 1) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                        _this.setDataUser(x["data"]);
                    }
                    else {
                        _this.errorPermisos();
                    }
                    // -------
                }
                else {
                    _this.error();
                }
            });
        }
    };
    LoginPage.prototype.cambiarClave = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cambiarclave_cambiarclave__["a" /* CambiarclavePage */]);
    };
    LoginPage.prototype.setDataUser = function (dataUser) {
        this.storage.set("_user_", dataUser);
        console.log("API // User setted storage: ", dataUser);
    };
    // *****************************************
    // ******* POP UPS
    // *****************************************
    LoginPage.prototype.error = function () {
        var alert = this.alertCtrl.create({
            title: "",
            message: "Usuario o contraseña incorrectos",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        console.log("Ok");
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.errorPermisos = function () {
        var alert = this.alertCtrl.create({
            title: "",
            message: "No tiene permisos para esta aplicación. Consulte con el administrador.",
            buttons: [
                {
                    text: "Ok",
                    handler: function () {
                        console.log("Ok");
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.recuperarClave = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: "Recuperar clave",
            message: "Ingresá tu email para recuperar tu clave",
            inputs: [
                {
                    name: "Email",
                    placeholder: "info@castrol.com"
                }
            ],
            buttons: [
                {
                    text: "Cancelar",
                    handler: function (data) {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Ok",
                    handler: function (data) {
                        if (data) {
                            console.log("data", data);
                            _this.apiAdm.recuperarClave(data.Email).subscribe(function (x) {
                                _this.emailRecuperoOk();
                            });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    LoginPage.prototype.emailRecuperoOk = function () {
        var alert = this.alertCtrl.create({
            title: "",
            message: "Revisá tu correo para recuperar tu clave. Muchas gracias.",
            buttons: [
                {
                    text: "Ok",
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/login/login.html"*/'<ion-content padding>\n\n\n  <ion-grid class="logo-grid" center text-center>\n    <ion-row center text-center>\n      <ion-col col-12 center text-center>\n        <img src="assets/imgs/logo.png" alt="Castrol">\n      </ion-col>\n      <ion-col col-12 center text-center>\n        <h2>BIENVENIDO</h2>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-grid class="login" center text-center>\n\n    <ion-row center text-center>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-input value="admin" [(ngModel)]="user" placeholder="Usuario" type="text"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <ion-item>\n          <ion-input value="admin" [(ngModel)]="pass" placeholder="Clave" type="password"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12>\n        <button (click)="login()" center block class="btn-castrol-rojo">INGRESAR</button>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row class="lostPass">\n      <ion-col>\n        <span (click)="recuperarClave()">He perdido mi clave</span>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n</ion-content>\n\n<ion-footer center text-center>\n  <ion-row>\n    <ion-col>\n      <p>POLÍTICAS DE USO</p>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmacionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__calendario_calendario__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ConfirmacionPage = /** @class */ (function () {
    function ConfirmacionPage(navCtrl, navParams, datePipe, apiAdm, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.datePipe = datePipe;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.cita = [];
        this.fullCitas = [];
        this.title = "CONFIRMACIÓN";
        this.hora = 12;
        this.minutos = 30;
        this.brigadas = [];
        this.validarGuardar = false;
    }
    ConfirmacionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.apiAdm.params != null &&
            this.apiAdm.params.desde == "calendario") {
            var fechadata = this.apiAdm.params.data;
            //console.log("fecha data", fechadata);
            this.diaPreferido = fechadata.selectedDateSend;
        }
        this.apiAdm.getBrigadasVisitas().subscribe(function (x) {
            _this.brigadas = x["data"];
        });
    };
    ConfirmacionPage.prototype.ionViewDidLoad = function () {
        this.cita = this.navParams.get("cita");
        this.fullCitas = this.navParams.get("citas");
        this.reagendar = this.navParams.get("reagendar");
        // ----
        this.editionMode = this.navParams.get("editionMode");
        this.orderedDate = this.order(this.cita.diapreferido);
        this.getNavParams();
        if (this.editionMode) {
            this.title = "MODIFICACIÓN";
            this.hora = this.getHora(this.cita.horacita, 1);
            this.minutos = this.getHora(this.cita.horacita, 0);
            console.log(this.hora, " ", this.minutos);
            this.brigadaSeleccionada = this.cita.brigadaid;
            this.validarGuardar = true;
            console.log("bri sele", this.brigadaSeleccionada);
        }
    };
    ConfirmacionPage.prototype.getNavParams = function () {
        // params de confirmación
        this.visitaId = this.cita.visitaid;
        this.turno = this.cita.turno;
        this.confirmado = this.cita.confirmado;
        this.diaPreferido = this.cita.diapreferido;
        // Date for show
        var dateForShow = new Date(this.cita.diapreferido.replace(/-/g, "/"));
        this.diapreferidoForShow = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
    };
    ConfirmacionPage.prototype.radioSeleccionado = function () {
        this.validarGuardar = true;
    };
    // ***********************************************************
    // ---------------- Navegación
    // ***********************************************************
    ConfirmacionPage.prototype.goToCalendar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__calendario_calendario__["a" /* CalendarioPage */], {
            botones: true,
            cita: this.cita
        });
    };
    ConfirmacionPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */], {
            citas: this.fullCitas,
            diaElegido: this.diaPreferido,
            dayMap: true
        });
    };
    ConfirmacionPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    ConfirmacionPage.prototype.confirm = function () {
        var _this = this;
        console.log("brigada selected", this.brigadaSeleccionada);
        var confirmado = "1";
        this.horaCita = this.hora.toString() + ":" + this.minutos.toString();
        this.apiAdm
            .confirmarCita(this.visitaId, this.horaCita, this.diaPreferido, confirmado, this.brigadaSeleccionada)
            .subscribe(function (x) {
            console.log("CONFIRMADO: ", x);
            _this.done();
        });
    };
    // ***********************************************************
    // ---------------- Calendario
    // ***********************************************************
    ConfirmacionPage.prototype.addEvent = function (event) {
        // --- Como se muestra en el DOM el día que selecciono
        var selected = event.targetElement.value;
        var selectedDate = new Date(selected);
        var selectedDateDMY = this.datePipe.transform(selectedDate, "dd/MM/yyyy");
        event.targetElement.value = selectedDateDMY;
        // --- Día seleccionado para guardar
        var selectedDateYMD = this.datePipe.transform(selectedDate, "yyyy-MM-dd");
        this.diaPreferido = selectedDateYMD;
    };
    ConfirmacionPage.prototype.dateToNum = function (fecha) {
        var date = new Date(fecha);
        var datenum = this.datePipe.transform(date, "yyyyMMdd");
        return +datenum;
    };
    ConfirmacionPage.prototype.order = function (fecha) {
        var newDate = new Date(fecha.replace(/-/g, "/"));
        var ordered = this.datePipe.transform(newDate, "dd/MM/yyyy");
        return ordered;
    };
    // ***********************************************************
    // ---------------- Alerts
    // ***********************************************************
    ConfirmacionPage.prototype.done = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "¡Cita confirmada con éxito!",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        console.log("Saved clicked");
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__sidemenu_sidemenu__["a" /* SidemenuPage */]);
                    }
                }
            ]
        });
        prompt.present();
    };
    // Edición
    ConfirmacionPage.prototype.getHora = function (horario, num) {
        for (var i = 0; i < horario.length; i++) {
            var element = horario[i];
            var a = horario[0];
            var b = horario[1];
            var c = horario[2];
            var d = horario[3];
            var e = horario[4];
        }
        if (num == 1) {
            return a + b;
        }
        else {
            return d + e;
        }
    };
    // ***********************************************************
    // ---------------- Set Status
    // ***********************************************************
    ConfirmacionPage.prototype.setStatus = function (num) {
        switch (num) {
            case 1:
                return "Pendiente";
            case 2:
                return "Pospuesto";
            case 3:
                return "No acepta preguntas";
            case 4:
                return "Cerrado";
            default:
                break;
        }
    };
    ConfirmacionPage.prototype.setConfirm = function (num) {
        switch (num) {
            case "1":
                return "Pendiente";
            case "2":
                return "Confirmado";
            case "3":
                return "Cancelado";
            default:
                break;
        }
    };
    ConfirmacionPage.prototype.setTurno = function (turno) {
        switch (turno) {
            case "1":
                return "Mañana";
            case "2":
                return "Tarde";
            case "3":
                return "Noche";
            default:
                break;
        }
    };
    ConfirmacionPage.prototype.dateForShow = function (date) {
        if (date) {
            // Date for show
            var dateForShow = new Date(date.replace(/-/g, "/"));
            var dateForShowB = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
            return dateForShowB;
        }
        else {
            return "DD/MM/AAAA";
        }
    };
    ConfirmacionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-confirmacion",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/confirmacion/confirmacion.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content>\n\n  <div class="main-title">\n    <h2>SISTEMA DE GESTIÓN DE CITAS-{{ title }}</h2>\n  </div>\n\n  <ion-list padding>\n\n    <h3 class="orderedDate">{{ orderedDate }}</h3>\n\n    <ion-grid center text-center class="table-citas">\n      <ion-row center text-center class="cita-row">\n        <ion-col> <span class="citaId"># {{ cita.tallerid }} </span> {{ cita.tallernombre }} </ion-col>\n        <ion-col>{{ cita.telefono }}</ion-col>\n        <!-- <ion-col col-2>{{ cita.tamanio }}</ion-col> -->\n        <ion-col\n          [ngClass]="{\'status-red\': cita.confirmado == \'3\', \'status-yell\': cita.confirmado == \'1\', \'status-green\': cita.confirmado == \'2\' }">\n          {{ setConfirm(cita.confirmado) }}</ion-col>\n        <ion-col *ngIf="!reagendar">{{ setTurno(cita.horacita) }}</ion-col>\n        <ion-col *ngIf="reagendar">{{  cita.horacita }} hs.</ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid class="fecha-table">\n\n      <ion-row>\n        <ion-col>\n          <h3>Fecha a confirmar</h3>\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row class="fecha-row" left text-left>\n\n        <!-- <ion-col col-6 left text-left class="seleccionar-dia">\n          <mat-form-field>\n            <input (dateInput)="addEvent($event)" matInput [matDatepicker]="picker" placeholder="Seleccionar día">\n            {{diapreferidoForShow}}"\n            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </ion-col> -->\n        <ion-col col-6 class="text">\n          <span class="span-grey">Día preferido:\n          </span><strong>{{ dateForShow(diaPreferido) }}</strong>\n        </ion-col>\n\n        <ion-col col-6 left text-left>\n          <button class="btn-castrol-grey" (click)="goToCalendar()">Ver disponibilidad de agenda</button>\n        </ion-col>\n\n        <ion-col col-6 class="horario" left text-left>\n\n          <ion-row>\n            <ion-col col-2>\n              <span>Horario</span>\n            </ion-col>\n\n            <ion-col col-4>\n              <ion-item>\n                <ion-select [(ngModel)]="hora" interface="popover">\n                  <ion-option value="01">01</ion-option>\n                  <ion-option value="02">02</ion-option>\n                  <ion-option value="03">03</ion-option>\n                  <ion-option value="04">04</ion-option>\n                  <ion-option value="05">05</ion-option>\n                  <ion-option value="06">06</ion-option>\n                  <ion-option value="07">07</ion-option>\n                  <ion-option value="08">08</ion-option>\n                  <ion-option value="09">09</ion-option>\n                  <ion-option value="10">10</ion-option>\n                  <ion-option value="11">11</ion-option>\n                  <ion-option value="12">12</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-4>\n              <ion-item>\n                <ion-select [(ngModel)]="minutos" interface="popover">\n                  <ion-option value="00">00</ion-option>\n                  <ion-option value="15">15</ion-option>\n                  <ion-option value="30">30</ion-option>\n                  <ion-option value="45">45</ion-option>\n                </ion-select>\n              </ion-item>\n            </ion-col>\n\n            <ion-col col-2>\n              <span>horas</span>\n            </ion-col>\n          </ion-row>\n\n        </ion-col>\n\n\n        <ion-col col-6 left text-left>\n          <button block class="btn-castrol-grey" (click)="goToMap()">Ver mapa del día</button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n  </ion-list>\n  <ion-list padding>\n\n    <h3 class="orderedDate">Brigadas</h3>\n\n    <ion-grid center text-center class="table-citas" radio-group [(ngModel)]="brigadaSeleccionada">\n      \n      <ion-row center text-center class="cita-brigada-row">\n         \n        <ion-col *ngFor="let brigada of brigadas">\n          <ion-grid center text-center class="table-citas">\n            <ion-row center text-center class="cita-row">\n              <ion-col>\n                {{ brigada.nombreusuario }}\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  Fecha\n                </ion-col>\n                <ion-col>\n                  Cantidad\n                </ion-col>\n              </ion-row>\n            <ion-row *ngFor="let fecha of brigada.fechas">\n              <ion-col>\n                {{ fecha.diapreferido }}\n              </ion-col>\n              <ion-col>\n                {{ fecha.cantidad }}\n              </ion-col>\n            </ion-row>\n            <ion-row center text-center class="cita-row">\n              <ion-col>\n                  <ion-radio  (ionSelect)="radioSeleccionado()" value="{{brigada.usuarioid}}" ></ion-radio>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n          \n      </ion-row>\n    \n    </ion-grid>\n  </ion-list>\n\n  <ion-grid center text-center class="buttons-grid">\n    <ion-row center text-center>\n      <ion-col center text-center>\n        <button class="btn-castrol-rojo" block (click)="goBack()">Volver sin guardar</button>\n      </ion-col>\n      <ion-col>\n        <button class="btn-castrol-verde" [disabled]="!validarGuardar" block (click)="confirm()">Confirmar</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/confirmacion/confirmacion.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_3__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ConfirmacionPage);
    return ConfirmacionPage;
}());

//# sourceMappingURL=confirmacion.js.map

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { dateDataSortValue } from "ionic-angular/umd/util/datetime-util";
var CalendarioPage = /** @class */ (function () {
    function CalendarioPage(navCtrl, navParams, apiAdm, 
        // private calendar: Calendar,
        alertCtrl, datePipe, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.datePipe = datePipe;
        this.viewCtrl = viewCtrl;
        this.date = new Date();
        this.verBotones = false;
        this.monthNames = [
            "ENERO",
            "FEBRERO",
            "MARZO",
            "ABRIL",
            "MAYO",
            "JUNIO",
            "JULIO",
            "AGOSTO",
            "SEPTIEMBRE",
            "OCTUBRE",
            "NOVIEMBRE",
            "DICIEMBRE"
        ];
        // --- listado de citas
        this.eventList = [];
        // ***********************************************************
        // ---------------- APIS
        // ***********************************************************
        this.fechasocupadas = [];
    }
    CalendarioPage.prototype.ionViewWillEnter = function () {
        this.verBotones = this.navParams.get("botones");
        this.cita = this.navParams.get("cita");
        console.log(this.cita);
        this.getDaysOfMonth();
        this.goToLastMonth();
        this.goToNextMonth();
        this.getFechasOcupadas();
        this.getDiaDestacadoAdmin();
    };
    CalendarioPage.prototype.ionViewDidLoad = function () {
        // this.getDiaDestacado();
    };
    // ***********************************************************
    // ---------------- ARMADO DEL CALENDARIO
    // ***********************************************************
    // Next, create the function for push calendar date items to the arrays that will be displaying the full calendar date.
    CalendarioPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (var i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        var nextNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0).getDate();
        for (var i = 0; i < 6 - lastDayThisMonth; i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length +
            this.daysInThisMonth.length +
            this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (var i = 7 - lastDayThisMonth; i < 7 - lastDayThisMonth + 7; i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    // Now, add the function for previous month button action.
    CalendarioPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    // Also for the next month button action.
    CalendarioPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
        this.selectedDay = null;
    };
    CalendarioPage.prototype.getFechasOcupadas = function () {
        var _this = this;
        this.apiAdm.getFechasOcupadas().subscribe(function (x) {
            _this.eventList = x["data"];
            // console.log(this.eventList);
        });
    };
    // *************************************************
    // ---------------- CHECKEO DE EVENTOS EN EL MES
    // *************************************************
    CalendarioPage.prototype.checkEvent = function (day) {
        var myDate = this.getFullDate(day);
        var thisDate = this.datePipe.transform(myDate, "yyyy-MM-dd");
        var hasEvent = 0;
        this.eventList.forEach(function (event) {
            if (event.fecha == thisDate && event.cantidadcitas <= 7) {
                hasEvent = 1;
            }
            else if (event.fecha == thisDate && event.cantidadcitas >= 8) {
                hasEvent = 2;
            }
        });
        return hasEvent;
    };
    CalendarioPage.prototype.selectDate = function (day) {
        // dia pref para admin
        var diaPreferidoNumA = new Date(this.cita.diapreferido.replace(/-/g, "/"));
        var diaPreferidoNum = this.datePipe.transform(diaPreferidoNumA, "yyyyMMdd");
        // --- Día seleccionado
        var newDate = new Date(this.getFullDate(day));
        var selected = this.datePipe.transform(newDate, "yyyyMMdd");
        // --- Ayer del día destacado
        var diaDestacadoAyer = this.getPreviousDay(this.diaDestacado, 1);
        var diaDestacadoAyerOrder = this.datePipe.transform(diaDestacadoAyer, "yyyyMMdd");
        // --- Dos semanas permitidas DESDE EL DIAPREFERIDO (a diferencia del scouter)
        var dosSemanas = this.getNextDay(this.diaDestacado, 19);
        var dosSemanasOrder = this.datePipe.transform(dosSemanas, "yyyyMMdd");
        // -- Dias posibles para seleccionar
        if (+selected <= +dosSemanasOrder && +selected > +diaPreferidoNum) {
            console.log("Llegó: ", newDate.getDay());
            // --- Descarta fines de semana
            if (newDate.getDay() !== 6 && newDate.getDay() !== 0) {
                this.selectedDay = newDate.getDate();
                this.selectedDate = this.datePipe.transform(newDate, "dd-MM-yyyy");
                this.selectedDateSend = this.datePipe.transform(newDate, "yyyy-MM-dd");
            }
            else {
                this.selectedDate = "Debe ser un día hábil";
            }
        }
        else {
            this.selectedDate =
                "Debe ser hasta dos semanas y 3 días hábiles después del día " +
                    this.diaDestacado.getDate() +
                    " de este mes";
        }
    };
    // ***********************************************************
    // ---------------- SELECT DE DIAS HÁBILES Y DESTACADO
    // ***********************************************************
    CalendarioPage.prototype.getDiaDestacado = function () {
        var newDate = new Date();
        var a = this.getNextDay(newDate, 7);
        this.diaDestacado = a;
        this.diaDestacadoA = a.getDate();
    };
    CalendarioPage.prototype.getDiaDestacadoAdmin = function () {
        var newDate = new Date(this.cita.diapreferido.replace(/-/g, "/"));
        this.diaDestacado = newDate;
        this.diaDestacadoA = newDate.getDate();
    };
    CalendarioPage.prototype.getFullDate = function (day) {
        var currentYear = this.date.getFullYear();
        var currentMonth = this.date.getMonth() + 1;
        var currentDay = day;
        var fullDate = currentYear + "-" + currentMonth + "-" + currentDay;
        return fullDate;
    };
    CalendarioPage.prototype.getNextDay = function (date, num) {
        var nextDay = new Date();
        nextDay.setDate(date.getDate() + num);
        return nextDay;
    };
    CalendarioPage.prototype.getPreviousDay = function (date, num) {
        var previous = new Date();
        previous.setDate(date.getDate() - num);
        return previous;
    };
    CalendarioPage.prototype.showDiaDestacado = function (day) {
        if (this.diaDestacadoA == day &&
            this.checkOnlyThisMonth(this.diaDestacado)) {
            return true;
        }
        else {
            return false;
        }
    };
    CalendarioPage.prototype.checkOnlyThisMonth = function (diahabil) {
        var a = new Date().getMonth();
        var b = this.date.getMonth();
        var c = diahabil.getMonth();
        if (a == b && b == c) {
            return true;
        }
        else {
            return false;
        }
    };
    // checkFinde(day) {
    //   // sabado = 6
    //   // domingo = 0
    //   // lunes = 1
    //   // martes = 2
    //   // miercoles = 3
    //   // jueves = 4
    //   // viernes = 5
    //   var fullDate = new Date(this.getFullDate(day));
    //   let resolve;
    //   switch (fullDate.getDay()) {
    //     case 0: // domingo
    //       resolve = false;
    //       break;
    //     case 1: // lunes
    //       resolve = false;
    //       break;
    //     case 2: // martes
    //       resolve = false;
    //       break;
    //     case 3: // miercoles
    //       resolve = false;
    //       break;
    //     case 4: // jueves
    //       resolve = false;
    //       break;
    //     case 5: // viernes
    //       resolve = true;
    //       break;
    //     case 6: // sábado
    //       resolve = true;
    //       break;
    //     default:
    //       break;
    //   }
    //   // console.log("Resolve: ", resolve);
    //   // console.log("Fecha: ", fullDate);
    //   // console.log("Día, ", fullDate.getDay());
    //   return resolve;
    // }
    // ***********************************************************
    // ---------------- BOTONES
    // ***********************************************************
    CalendarioPage.prototype.aceptarFecha = function () {
        var data = {
            selectedDateSend: this.selectedDateSend,
            selectedDate: this.selectedDate
        };
        console.log("calen data", data);
        this.apiAdm.params = { data: data, desde: "calendario" };
        this.navCtrl.pop();
    };
    CalendarioPage.prototype.guardarFecha = function () {
        var data = {
            selectedDateSend: this.selectedDateSend,
            selectedDate: this.selectedDate
        };
        this.viewCtrl.dismiss(data);
    };
    CalendarioPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    CalendarioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-calendario",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/calendario/calendario.html"*/'<ion-header>\n  <header [headerTitle]="\'Calendario\'"></header>\n</ion-header>\n\n<ion-content>\n\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col class="flechita" col-2 (click)="goToLastMonth()">\n        <ion-icon name="ios-arrow-back"></ion-icon>\n      </ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col class="flechita" col-2 (click)="goToNextMonth()">\n        <ion-icon name="ios-arrow-forward"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <ion-grid class="referencias">\n    <ion-row>\n      <ion-col>\n        <span class="circulo-azul"></span>\n        <span class="span-grey">7 citas o menos\n        </span>\n      </ion-col>\n      <ion-col>\n        <span class="circulo-rojo"></span>\n        <span class="span-grey">7 citas o más\n        </span>\n      </ion-col>\n      <ion-col>\n        <span class="circulo-dorado"></span>\n        <span class="span-grey">Día seleccionado\n        </span>\n      </ion-col>\n      <ion-col>\n        <span class="circulo-verde"></span>\n        <span class="span-grey">Día de hoy/Día Preferido por el taller\n        </span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Dom</ion-col>\n        <ion-col>Lun</ion-col>\n        <ion-col>Mar</ion-col>\n        <ion-col>Mie</ion-col>\n        <ion-col>Jue</ion-col>\n        <ion-col>Vie</ion-col>\n        <ion-col>Sab</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month days-margin" (click)="goToLastMonth()">\n          {{lastDay}}\n        </ion-col>\n\n        <ion-col class="days-margin" col-1 *ngFor="let day of daysInThisMonth">\n          <span (click)="selectDate(day)" class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">\n            <span (click)="selectDate(day)"\n              [ngClass]="{\'event-bullet-blue\': checkEvent(day) == 1, \'event-bullet-red\': checkEvent(day) == 2, \'destacado\': showDiaDestacado(day), \'selected-date\': selectedDay === day }">{{day}}</span>\n            <!-- [ngClass]="{\'selected-date\': checkSelected(day) == selectedDay }" -->\n            <br>\n            <!-- <span (click)="selectDate(day)" class="padding-event"\n              [ngClass]="{\'event-bullet-blue\': checkEvent(day) == 1, \'event-bullet-red\': checkEvent(day) == 2 }"></span> -->\n          </ng-template>\n        </ion-col>\n\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month days-margin" (click)="goToNextMonth()">\n          {{nextDay}}\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n\n    <div class="selected-event" *ngIf="isSelected">\n      <ion-list>\n        <ion-item *ngFor="let se of selectedEvent">\n          <ion-buttons end>\n            <button ion-button clear icon-only (click)="deleteEvent(se)">\n              <ion-icon name="close"></ion-icon>\n            </button>\n          </ion-buttons>\n          <h2>{{se.title}}</h2>\n          <h3>{{se.message}}</h3>\n          <p>Start Date: {{se.startDate}}<br>\n            Start Date: {{se.endDate}}</p>\n        </ion-item>\n      </ion-list>\n    </div>\n\n\n    <ion-grid center text-center class="buttons-grid">\n\n      <ion-row center text-center>\n        <ion-col>\n          <p><strong>Fecha seleccionada:</strong> {{ selectedDate }} </p>\n\n          <span><strong>Cantidad de citas:</strong></span>\n          <span *ngFor="let event of eventList">\n            <span *ngIf="event.fecha == selectedDateSend">{{ event.cantidadcitas }}</span>\n          </span>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n  <ion-grid class="buttons-grid" *ngIf="verBotones">\n    <ion-row center text-center>\n      <ion-col center text-center>\n        <button block class="btn-castrol-rojo" (click)="goBack()">CANCELAR</button>\n      </ion-col>\n      <ion-col>\n        <button class="btn-castrol-verde" [disabled]="selectedDate?.length != 10" block\n          (click)="aceptarFecha()">ACEPTAR</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n<!-- <ion-footer>\n  <footer></footer>\n</ion-footer> -->'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/calendario/calendario.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CalendarioPage);
    return CalendarioPage;
}());

//# sourceMappingURL=calendario.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_google_maps_google_maps__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirmacion_confirmacion__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, navParams, app, maps, datePipe, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.maps = maps;
        this.datePipe = datePipe;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.citas = [];
        this.fullCitas = [];
    }
    MapPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.citas = this.navParams.get("citas");
        this.dayMap = this.navParams.get("dayMap");
        this.diaElegido = this.navParams.get("diaElegido");
        if (this.dayMap) {
            this.citas = this.filterByDay();
        }
        console.log("MAPA: ", this.citas);
        this.platform.ready().then(function () {
            // *****
            _this.maps.initMap(_this.mapElement.nativeElement).then(function (mapOk) {
                _this.maps.parseLocation(_this.citas);
                // .then(dirs => {});
            });
            // ****
        });
    };
    MapPage.prototype.filterByDay = function () {
        var _this = this;
        var filtrado = this.citas.filter(function (item) {
            // transforma en numero la fecha que me llega de la base
            item.diapreferido = item.diapreferido.replace(/-/g, "/");
            item.diapreferido = new Date(item.diapreferido);
            // ------------------
            var c = new Date(_this.diaElegido.replace(/-/g, "/"));
            console.log("1, ", item.diapreferido);
            console.log("2, ", c);
            return item.diapreferido >= c && item.diapreferido <= c;
        });
        console.log("Filtrados, ", filtrado);
        return filtrado;
    };
    MapPage.prototype.go = function () {
        var _this = this;
        this.maps.currentMessage.subscribe(function (citaMarker) {
            if (citaMarker == "Error") {
                alert("Debe seleccionar una cita antes de confirmarla");
            }
            else {
                var fullCita = {
                    tallerid: citaMarker.tallerid,
                    visitaid: citaMarker.visitaid,
                    tallernombre: citaMarker.tallernombre,
                    direccion: citaMarker.direccion,
                    telefono: citaMarker.telefono,
                    nombrecontacto: citaMarker.contactocomercial,
                    status: citaMarker.status,
                    diapreferido: citaMarker.diapreferido,
                    horacita: citaMarker.horacita
                };
                console.log(citaMarker);
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__confirmacion_confirmacion__["a" /* ConfirmacionPage */], {
                    cita: fullCita
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("map"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-map",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/map/map.html"*/'<ion-header>\n  <header [headerTitle]="\'Mapa\'"></header>\n</ion-header>\n\n<ion-content padding>\n\n  <div class="btn">\n    <button class="btn-castrol-verde" (click)="go()">Llamar al taller seleccionado</button>\n  </div>\n\n  <div #map id="map" allow="geolocation"></div>\n\n</ion-content>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/map/map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_2__providers_google_maps_google_maps__["a" /* GoogleMapsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestioncitasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirmacion_confirmacion__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__forzarcita_forzarcita__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__calendario_calendario__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GestioncitasPage = /** @class */ (function () {
    function GestioncitasPage(navCtrl, navParams, apiAdm, datePipe, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.datePipe = datePipe;
        this.storage = storage;
        this.dataUser = {};
        // title: any = "Bienvenido " + this.dataUser.nombre;
        this.date = new Date();
        this.citas = [];
        this.fullCitas = [];
        this.citasForFilter = [];
    }
    GestioncitasPage.prototype.ionViewDidLoad = function () {
        this.getCitas();
        this.getStorage();
    };
    GestioncitasPage.prototype.getCitas = function () {
        var _this = this;
        this.apiAdm.getCitas().subscribe(function (x) {
            if (Array.isArray(x["data"])) {
                console.log("DATA: ", x["data"]);
                _this.citas = _this.filterBy3Days(x["data"]);
                _this.citasForFilter = x["data"];
                _this.fullCitas = x["data"];
            }
        });
    };
    // ***********************************************************
    // ---------------- Calendario
    // ***********************************************************
    GestioncitasPage.prototype.addEvent = function (a, event) {
        // Filtra según fecha que se selecciona
        var date = this.dateToNum(event.targetElement.value);
        this.citas = this.filterByDate(date);
        // Como se muestra en el DOM
        var dateForShow = new Date(event.targetElement.value);
        event.targetElement.value = this.datePipe.transform(dateForShow, "dd/MM/yyyy");
    };
    GestioncitasPage.prototype.numbTable = function (i) {
        // numeracion de las tablas
        var index = this.citas.findIndex(function (x) { return x.tallerId === i; });
        return index + 1;
    };
    GestioncitasPage.prototype.dateToNum = function (fecha) {
        var date = new Date(fecha);
        var datenum = this.datePipe.transform(date, "yyyyMMdd");
        return +datenum;
    };
    // ***********************************************************
    // ---------------- Filtros
    // ***********************************************************
    GestioncitasPage.prototype.filterByDate = function (fecha) {
        var _this = this;
        var filtrado = this.fullCitas.filter(function (item) {
            // transforma en numero la fecha que me llega de la base
            var a = new Date(item.diapreferido.replace(/-/g, "/"));
            var b = _this.datePipe.transform(a, "yyyyMMdd");
            var toDate = +b;
            return toDate == fecha;
        });
        return filtrado;
    };
    GestioncitasPage.prototype.filterBy3Days = function (array) {
        // sabado = 6
        // domingo = 0
        // lunes = 1
        // martes = 2
        // miercoles = 3
        // jueves = 4
        // viernes = 5
        var filtrado;
        // Re-trasnformo la fecha para que me quede a las 00:00:00, sino no me funciona bien el filtro
        var date = this.datePipe.transform(this.date, "yyyy-MM-dd");
        var myDate = new Date(date.replace(/-/g, "/"));
        // ------------------------------------- DOMINGO, LUNES, MARTES
        if (this.date.getDay() == 0 ||
            this.date.getDay() == 1 ||
            this.date.getDay() == 2) {
            // devolvé data de 3 días siguientes
            var next3_1 = this.getNextDay(this.date, 3);
            filtrado = array.filter(function (item) {
                var diapreferidoDate = new Date(item.diapreferido.replace(/-/g, "/"));
                return diapreferidoDate >= next3_1 && diapreferidoDate <= next3_1;
            });
        }
        // -------------------------------------
        // ------------------------------------- SÁBADO
        if (this.date.getDay() == 6) {
            // devolvé data de 4 días siguientes
            var next4_1 = this.getNextDay(this.date, 4);
            filtrado = array.filter(function (item) {
                var diapreferidoDate = new Date(item.diapreferido.replace(/-/g, "/"));
                return diapreferidoDate >= next4_1 && diapreferidoDate <= next4_1;
            });
        }
        // ------------------------------------- MIERCOLES, JUEVES Y VIERNES
        if (this.date.getDay() == 3 ||
            this.date.getDay() == 4 ||
            this.date.getDay() == 5) {
            // devolvé data de 5 días siguientes
            var next5 = this.getNextDay(this.date, 5);
            filtrado = array.filter(function (item) {
                var diapreferidoDate = new Date(item.diapreferido.replace(/-/g, "/"));
                // return diapreferidoDate <= next5 && diapreferidoDate >= myDate;
                return diapreferidoDate >= next5 && diapreferidoDate <= next5;
            });
        }
        // -------------------------------------
        console.log("Filt: ", filtrado);
        // let dia3
        // filtrado.filter(item => {
        // })
        return filtrado;
    };
    GestioncitasPage.prototype.getNextDay = function (date, num) {
        var nextDay = new Date();
        nextDay.setDate(date.getDate() + num);
        var formatDateA = this.datePipe.transform(nextDay, "yyyy-MM-dd");
        var formatDateB = new Date(formatDateA.replace(/-/g, "/"));
        return formatDateB;
    };
    // ***********************************************************
    // ---------------- Set Status
    // ***********************************************************
    GestioncitasPage.prototype.setStatus = function (num) {
        switch (num) {
            case 1:
                return "Pendiente";
            case 2:
                return "Pospuesto";
            case 3:
                return "No acepta preguntas";
            case 4:
                return "Cerrado";
            default:
                break;
        }
    };
    GestioncitasPage.prototype.setConfirm = function (num) {
        switch (num) {
            case "1":
                return "Pendiente";
            case "2":
                return "Confirmó";
            case "3":
                return "Canceló";
            default:
                break;
        }
    };
    GestioncitasPage.prototype.setTurno = function (turno) {
        switch (turno) {
            case "1":
                return "Mañana";
            case "2":
                return "Tarde";
            case "3":
                return "Noche";
            default:
                break;
        }
    };
    // ***********************************************************
    // ---------------- Nav
    // ***********************************************************
    GestioncitasPage.prototype.confirmar = function (cita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmacion_confirmacion__["a" /* ConfirmacionPage */], {
            cita: cita,
            citas: this.fullCitas
        });
    };
    GestioncitasPage.prototype.modificar = function (cita) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirmacion_confirmacion__["a" /* ConfirmacionPage */], {
            cita: cita,
            citas: this.fullCitas,
            editionMode: true
        });
    };
    GestioncitasPage.prototype.forzar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__forzarcita_forzarcita__["a" /* ForzarcitaPage */]);
    };
    GestioncitasPage.prototype.goToCalendar = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__calendario_calendario__["a" /* CalendarioPage */]);
    };
    GestioncitasPage.prototype.goToMap = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */], {
            citas: this.fullCitas
        });
    };
    GestioncitasPage.prototype.getStorage = function () {
        var _this = this;
        this.storage.get("_user_").then(function (val) {
            _this.dataUser = val;
            console.log("Storage: ", val);
        });
    };
    GestioncitasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-gestioncitas",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/gestioncitas/gestioncitas.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'" [user]="dataUser.nombre"></header>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list padding class="main">\n\n    <h2>SISTEMA DE GESTIÓN DE CITAS</h2>\n\n    <ion-grid class="buttons-grid">\n\n      <ion-row>\n        <ion-col col-4>\n          <mat-form-field>\n            <input (dateInput)="addEvent(\'input\', $event)" matInput [matDatepicker]="picker"\n              placeholder="Seleccionar día">\n            <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>\n            <mat-datepicker #picker></mat-datepicker>\n          </mat-form-field>\n        </ion-col>\n        <ion-col col-4>\n          <button class="btn-castrol-verde btn-invert" (click)="goToMap()">Ver mapa</button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-4>\n          <button class="btn-castrol-verde" (click)="goToCalendar()">Ver citas sin día</button>\n        </ion-col>\n        <ion-col col-4>\n          <button class="btn-castrol-verde" (click)="forzar()">Forzar cita</button>\n        </ion-col>\n      </ion-row>\n\n    </ion-grid>\n\n\n\n    <ion-grid class="table-citas">\n      <h3 padding>Preagendados</h3>\n\n      <div class="cita-row-div" *ngFor="let cita of citas;">\n        <ion-row *ngIf="cita.confirmado == 0 || cita.confirmado == 2">\n          <ion-col col-4> <span class="citaId"># {{ cita.tallerid }}</span> {{ cita.tallernombre }} </ion-col>\n          <!-- <ion-col col-3></ion-col> -->\n          <!-- <ion-col col-1>{{ cita.litros }}</ion-col> -->\n          <ion-col col-3>Tel. {{ cita.telefono }}</ion-col>\n          <ion-col col-2 [ngClass]="{\'status-red\': cita.confirmado == 2, \'status-yell\': cita.confirmado == 0 }">\n            {{ setConfirm(cita.confirmado) }}</ion-col>\n          <ion-col col-1>{{  setTurno(cita.turno) }}</ion-col>\n          <ion-col col-2 class="confirmar btn-castrol-verde" (click)="confirmar(cita)">Confirmar</ion-col>\n        </ion-row>\n      </div>\n\n      <h3 padding>Confirmados del día</h3>\n\n      <div class="cita-row-div" *ngFor="let cita of citas">\n        <ion-row *ngIf="cita.confirmado == 1">\n          <ion-col col-3> <span class="citaId"># {{ cita.tallerid }}</span> {{ cita.tallernombre }} </ion-col>\n          <!-- <ion-col col-1>{{ cita.litros }}</ion-col> -->\n          <ion-col col-3>Tel. {{ cita.telefono }}</ion-col>\n          <ion-col col-2 class="status-green">{{ setConfirm(cita.confirmado) }}</ion-col>\n          <ion-col col-2>{{ cita.diapreferido }} / {{ cita.horacita }} hs.</ion-col>\n          <ion-col col-2 class="modificar btn-castrol-rojo" (click)="modificar(cita)">Modificar</ion-col>\n        </ion-row>\n      </div>\n\n    </ion-grid>\n\n  </ion-list>\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/gestioncitas/gestioncitas.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* DatePipe */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], GestioncitasPage);
    return GestioncitasPage;
}());

//# sourceMappingURL=gestioncitas.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermisosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__editar_permisos_editar_permisos__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermisosPage = /** @class */ (function () {
    function PermisosPage(navCtrl, navParams, apiAdm, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apiAdm = apiAdm;
        this.alertCtrl = alertCtrl;
        this.usuarios = [];
        this.read = true;
    }
    PermisosPage.prototype.ionViewWillEnter = function () {
        this.getUsers();
    };
    PermisosPage.prototype.getUsers = function () {
        var _this = this;
        this.apiAdm.getUsers().subscribe(function (x) {
            _this.usuarios = x["data"];
            console.log(x["data"]);
        });
    };
    PermisosPage.prototype.alta = function (num) {
        var _this = this;
        if (num == 2) {
            // SCOUTER
            this.apiAdm
                .altaUsuario(this.usuarioScout, this.passwordScout, this.emailScout, this.estado, this.activoScout, num)
                .subscribe(function (x) {
                _this.done();
            });
        }
        else {
            // BRIGADA
            this.apiAdm
                .altaUsuario(this.usuarioBrig, this.passwordBrig, this.emailBrig, this.estado, this.activoBrig, num)
                .subscribe(function (x) {
                _this.done();
            });
        }
        this.getUsers();
    };
    // ALERTS
    PermisosPage.prototype.done = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "¡Usuario creado con éxito!",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.estado = "";
                        // ----
                        _this.usuarioScout = "";
                        _this.passwordScout = "";
                        _this.emailScout = "";
                        // ----
                        _this.usuarioBrig = "";
                        _this.passwordBrig = "";
                        _this.emailBrig = "";
                        // this.navCtrl.setRoot(GestioncitasPage);
                    }
                }
            ]
        });
        prompt.present();
    };
    PermisosPage.prototype.setRol = function (num) {
        switch (num) {
            case "2":
                return "Scouting";
            case "3":
                return "Brigada";
            default:
                break;
        }
    };
    PermisosPage.prototype.setActivo = function (num) {
        switch (num) {
            case "1":
                return "Activo";
            case "0":
                return "Inactivo";
            default:
                break;
        }
    };
    PermisosPage.prototype.borrarUsuario = function (user) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "¿Está seguro que desea borrar el usuario " + user.nombreusuario + "?",
            buttons: [
                {
                    text: "Sí",
                    handler: function (data) {
                        _this.apiAdm.borrarUsuario(user).subscribe(function (x) {
                            _this.alertBorrado();
                        });
                    }
                },
                {
                    text: "Cancelar",
                    handler: function (data) { }
                }
            ]
        });
        prompt.present();
    };
    PermisosPage.prototype.alertBorrado = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            // title: 'Login',
            message: "Usuario borrado con éxito.",
            buttons: [
                {
                    text: "Ok",
                    handler: function (data) {
                        _this.ionViewWillEnter();
                    }
                }
            ]
        });
        prompt.present();
    };
    PermisosPage.prototype.editarUsuario = function (user) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__editar_permisos_editar_permisos__["a" /* EditarPermisosPage */], {
            user: user
        });
    };
    PermisosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-permisos",template:/*ion-inline-start:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/permisos/permisos.html"*/'<ion-header>\n  <header [headerTitle]="\'Bienvenido\'"></header>\n</ion-header>\n\n<ion-content>\n\n  <div class="main-title">\n    <h2 padding>GESTIÓN DE USUARIOS</h2>\n  </div>\n\n  <div padding class="bajada">\n    <h4>Listado de usuarios</h4>\n  </div>\n\n  <ion-grid class="usuarios-grid">\n    <ion-row class="main-row-usuarios">\n      <ion-col>Nombre de usuario</ion-col>\n      <ion-col>Email</ion-col>\n      <ion-col>Rol</ion-col>\n      <ion-col>Ciudad</ion-col>\n      <ion-col>Activo</ion-col>\n      <ion-col>Acciones</ion-col>\n    </ion-row>\n    <ion-row class="sec-row-usuarios" *ngFor="let user of usuarios">\n      <ion-col>\n        {{ user.nombreusuario }}\n      </ion-col>\n      <ion-col> {{ user.email }} </ion-col>\n      <ion-col> {{ setRol(user.rol) }} </ion-col>\n      <ion-col> {{ user.estado }} </ion-col>\n      <ion-col> {{ setActivo(user.activo) }} </ion-col>\n      <ion-col class="actions">\n        <span (click)="editarUsuario(user)">Editar</span> |\n        <span (click)="borrarUsuario(user)">Borrar</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class="bajada" padding>\n    <h4>Agregar nuevos usuarios</h4>\n  </div>\n\n  <ion-grid center class="main-grid">\n    <ion-row left>\n      <ion-col col-4>\n        <ion-item>\n          <!-- <ion-label>Estado</ion-label>\n          <ion-select [(ngModel)]="estado" interface="popover">\n            <ion-option value="NL">Nuevo León</ion-option>\n            <ion-option value="n64">Nintendo64</ion-option>\n            <ion-option value="ps">PlayStation</ion-option>\n          </ion-select> -->\n          <ion-label>Ciudad</ion-label>\n          <ion-input [(ngModel)]="estado" type="text" value="México DF" readonly></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row center>\n      <!-- COLUMNA IZQUIERDA -->\n      <ion-col col-6 class="col-izquierda">\n        <!-- --- -->\n        <ion-row>\n          <h3>Scouter</h3>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Nombre de usuario</ion-label>\n              <ion-input [(ngModel)]="usuarioScout" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Clave</ion-label>\n              <ion-input [(ngModel)]="passwordScout" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>E-mail para recupero</ion-label>\n              <ion-input [(ngModel)]="emailScout" type="email"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Activo</ion-label>\n              <ion-select [(ngModel)]="activoScout">\n                <ion-option value="1">Activo</ion-option>\n                <ion-option value="0">Inactivo</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 class="button-permisos">\n            <div>\n              <button class="btn-castrol-verde" block center (click)="alta(2)">Guardar</button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- --- -->\n      </ion-col>\n      <!-- COLUMNA DERECHA -->\n      <ion-col col-6 class="col-derecha">\n        <!-- --- -->\n        <ion-row>\n          <h3>Brigadas</h3>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Nombre de usuario</ion-label>\n              <ion-input [(ngModel)]="usuarioBrig" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Clave</ion-label>\n              <ion-input [(ngModel)]="passwordBrig" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>E-mail para recupero</ion-label>\n              <ion-input [(ngModel)]="emailBrig" type="text"></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label floating>Activo</ion-label>\n              <ion-select [(ngModel)]="activoBrig">\n                <ion-option value="1">Activo</ion-option>\n                <ion-option value="0">Inactivo</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-12 class="button-permisos">\n            <div>\n              <button class="btn-castrol-verde" block center (click)="alta(3)">Guardar</button>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- --- -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n<ion-footer>\n  <footer></footer>\n</ion-footer>'/*ion-inline-end:"/Users/Martin/Desktop/CTRL-Z/APPs/Castrol/admin-castrol/src/pages/permisos/permisos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_adm_api_adm__["a" /* ApiAdmProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PermisosPage);
    return PermisosPage;
}());

//# sourceMappingURL=permisos.js.map

/***/ })

},[264]);
//# sourceMappingURL=main.js.map
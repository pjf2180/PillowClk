(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Alarma\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card class=\"welcome-card\">\n      <ion-img src=\"/assets/happy-woman-sleeping-pillow.png\"></ion-img>\n      <ion-card-header>\n        <ion-card-subtitle>Empieza a dormir mejor</ion-card-subtitle>\n        <ion-card-title>Bienvenido a PillowClock</ion-card-title>\n      </ion-card-header>\n      <ion-card-content>\n        <p>Escoge tu horario favorito para ir a dormir y despertar, asegurandote de que estas durmiendo lo suficiente.</p>\n      </ion-card-content>\n    </ion-card>\n    <ion-list>\n      <ion-list-header>\n        <ion-label>Configuración</ion-label>\n      </ion-list-header>\n      <ion-item>\n        <ion-label>Alarma activada</ion-label>\n        <ion-toggle *ngIf=\"config\" #alrmToggl [(ngModel)]=\"config.alarmActivated\" (ionChange)=\"switchedToggle(alrmToggl)\" color=\"primary\"></ion-toggle>\n    </ion-item>\n    </ion-list>\n    <ion-grid fixed>\n\n      \n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-chip *ngIf=\"perDaySleeping\" color=\"secondary\">\n              <ion-label color=\"success\">{{sleepTime}}</ion-label> \n          </ion-chip>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-icon name=\"moon\"></ion-icon>\n            <ion-icon name=\"bed\"></ion-icon>\n          </ion-row>\n          <ion-row>\n           Hora de dormir\n          </ion-row>\n          \n          <ion-row>\n            <ion-item>\n              <ion-datetime #sleepTimePicker\n              doneText=\"Save\"\n              placeholder=\"sleep time\"\n              [(ngModel)]=\"config.bedTime\"\n              (ngModelChange)=\"onTimePickerChanged()\"\n              display-format=\"HH:mm \"\n              pickerFormat=\"H mm \"></ion-datetime>\n            </ion-item>  \n          </ion-row>\n          \n          \n        </ion-col>\n\n        <ion-col size=\"6\">\n          <ion-row>\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-icon  name=\"body\"></ion-icon>\n          </ion-row>\n          <ion-row>\n            Hora de despertar\n          </ion-row>\n          <ion-row>\n            <ion-item>\n              <ion-datetime #wakeTimePicker\n              doneText=\"Save\"\n              placeholder=\"wake up time\"\n              [(ngModel)]=\"config.wakeTime\"\n              (ngModelChange)=\"onTimePickerChanged()\"\n              display-format=\"HH:mm \"\n              pickerFormat=\"H mm \"></ion-datetime>\n            </ion-item>\n            \n          </ion-row>\n          \n        </ion-col>\n\n      </ion-row>\n\n      \n\n      \n    </ion-grid>\n    <!-- <ion-list lines=\"none\">\n      <ion-list-header>\n        <ion-label>Resources</ion-label>\n      </ion-list-header>\n      <ion-item href=\"https://ionicframework.com/docs/\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n        <ion-label>Ionic Documentation</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n        <ion-label>Scaffold Out Your App</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n        <ion-label>Change Your App Layout</ion-label>\n      </ion-item>\n      <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n        <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n        <ion-label>Theme Your App</ion-label>\n      </ion-item>\n    </ion-list> -->\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXVsamltZW5lei9Eb2N1bWVudHMvRW1wcmVuZGVkb3Jlcy9QaWxsb3dDbG9jay9waWxsb0Nsb2NrL3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/config.service */ "./src/app/services/config.service.ts");




var Tab1Page = /** @class */ (function () {
    function Tab1Page(configurationService) {
        this.configurationService = configurationService;
        this.perDaySleeping = { 'hours': 8, 'minutes': 0 };
        this.sleepTime = '';
        // this.sleepTime =  new Date().toISOString();
        console.log('tab1 started');
        console.log(configurationService);
        this.config = this.configurationService.getConfig();
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.sleepPicker.minuteValues = '0,5,10,15,20,25,30,35,40,45,50,55';
        this.wakePicker.minuteValues = this.sleepPicker.minuteValues;
        if (!this.config) {
            var defaultBedTime = new Date();
            defaultBedTime.setHours(21);
            defaultBedTime.setMinutes(30);
            var defaultWakeTime = new Date();
            defaultWakeTime.setHours(7);
            defaultWakeTime.setMinutes(30);
            this.config = {
                alarmActivated: true,
                bedTime: defaultBedTime.toISOString(),
                wakeTime: defaultWakeTime.toISOString(),
                lightActivated: true,
                lightAnticipation: 25
            };
            this.configurationService.setConfig(this.config);
        }
        this.sleepTime = this.getElapsedTimeString();
    };
    Tab1Page.prototype.onKnobFocus = function () {
        console.log('will move');
    };
    Tab1Page.prototype.switchedToggle = function (t) {
        this.configurationService.saveOnLocalStorage();
    };
    Tab1Page.prototype.onTimePickerChanged = function () {
        console.log('timer picker changed');
        console.log("BedTime: " + this.getMinutesElapsed(this.sleepPicker.value));
        console.log("WakeTime: " + this.getMinutesElapsed(this.wakePicker.value));
        this.sleepTime = this.getElapsedTimeString();
        this.configurationService.saveOnLocalStorage();
    };
    Tab1Page.prototype.getElapsedTimeString = function () {
        var bedMinutes = this.getMinutesElapsed(this.config.bedTime);
        var wakeMinutes = this.getMinutesElapsed(this.config.wakeTime);
        var minuteSpan;
        if (bedMinutes <= 720 && wakeMinutes <= 720) { //sleeping during morning
            minuteSpan = wakeMinutes - bedMinutes;
        }
        else if (bedMinutes > 720 && wakeMinutes > 720) { // sleeping afternoon 
            minuteSpan = wakeMinutes - bedMinutes;
        }
        else if (bedMinutes <= 720 && wakeMinutes > 720) { //sleeping morning-afternoon
            minuteSpan = (720 - bedMinutes) + (wakeMinutes - 720);
        }
        else if (bedMinutes > 720 && wakeMinutes <= 720) { //sleeping afternoon-morning
            minuteSpan = (1440 - bedMinutes) + wakeMinutes;
        }
        var hrs = Math.trunc(minuteSpan / 60);
        var mins = minuteSpan % 60;
        return hrs + " hrs " + mins + " mins";
    };
    Tab1Page.prototype.getMinutesElapsed = function (isoDateString) {
        var dte = new Date(isoDateString);
        var hrs = dte.getHours();
        var mins = dte.getMinutes();
        var totalMins = hrs * 60 + mins;
        return totalMins;
    };
    Tab1Page.prototype.getIsoDate = function (sliderVal) {
        var sliderValInMinutes = (5 * (sliderVal)); // + 12 * 60;
        var hours = Math.trunc((sliderValInMinutes) / 60);
        var minutes = (sliderValInMinutes % 60);
        var newSleepTime = new Date();
        newSleepTime.setHours(hours);
        newSleepTime.setMinutes(minutes);
        return newSleepTime.toISOString();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('wakeTimePicker'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"])
    ], Tab1Page.prototype, "wakePicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('sleepTimePicker'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonDatetime"])
    ], Tab1Page.prototype, "sleepPicker", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('totalSleep'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonLabel"])
    ], Tab1Page.prototype, "totalSleepLabel", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map
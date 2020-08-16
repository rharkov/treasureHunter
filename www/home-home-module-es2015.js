(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <div class=\"toolbar-wrapper\">\r\n      <ion-button (click)=\"getOrientation()\">Get orientation</ion-button>\r\n      <ion-button *ngIf=\"!treasureService.treasureIsBuried\" color=\"success\" class=\"dig\" (click)=\"dig()\" slot=\"end\">Dig the treasure</ion-button>\r\n      <p> {{beta}} + {{gamma}}</p>\r\n      <ion-button *ngIf=\"treasureService.treasureIsBuried\" color=\"danger\" class=\"dig\" (click)=\"digIt()\" slot=\"end\">Try to dig!!!</ion-button>\r\n      <ion-button (click)=\"resetDot()\" slot=\"end\">Reset Dot</ion-button>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>-->\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n  <div id=\"container\">\r\n    <div class=\"start\" *ngIf=\"!isStarted\">\r\n      <div class=\"start__button\" (click)=\"getOrientation()\"></div>\r\n    </div>\r\n\r\n    <audio id=\"music\" [muted]=audioMuted loop=\"loop\">\r\n      <source src=\"assets/slowMusic.mp3\" type=\"audio/mpeg\">\r\n    </audio>\r\n\r\n    <div class=\"finish\" *ngIf=\"isFinished\">\r\n      <div class=\"finish__title\">WOW YOU ARE A TRUE TREASURE HUNTER!<br>YOU ARE RICH!!!!!</div>\r\n      <div class=\"finish__button\" (click)=\"startAgain()\"></div>\r\n    </div>\r\n\r\n    <div *ngIf=\"!treasureService.treasureIsBuried\" class=\"dig\" (click)=\"dig()\"></div>\r\n    <div *ngIf=\"treasureService.treasureIsBuried\" class=\"diger\" (click)=\"digIt()\"></div>\r\n    <div (click)=\"resetDot()\" class=\"reset\"></div>\r\n    <div (click)=\"audioToggle()\" [style.backgroundImage]=\"'url(' + bgImage + ')'\" class=\"audioToggle\"></div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"distance\" *ngIf=\"treasureService.treasureIsBuried\">Range: {{treasureService.distance}}</div>\r\n      <div class=\"sea\">\r\n          <div class=\"sea__vertical\">\r\n              <div class=\"sea__image\"></div>\r\n          </div>\r\n      </div>\r\n  \r\n      <div class=\"map\">\r\n        <div *ngIf=\"alertIsShow\" class=\"alert\"><div> End of island ! </div></div>\r\n        <canvas [width] = \"654\" [height] = \"516\" id=\"canvas\" #canvas></canvas>\r\n        <canvas [width] = \"654\" [height] = \"516\" id=\"dot\" #dot></canvas>\r\n  \r\n          <!--<img src=\"map.png\" alt=\"\">-->\r\n      </div>\r\n  </div>  \r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _windowRef__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./windowRef */ "./src/app/home/windowRef.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]],
        providers: [_windowRef__WEBPACK_IMPORTED_MODULE_7__["WindowRef"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n.toolbar-wrapper {\n  padding: 0 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\n.alert {\n  position: absolute;\n  width: 300px;\n  height: 300px;\n  box-shadow: 0 0 10px #1e1e1e;\n  transform: translate(-50%, -50%);\n  background: red;\n  left: 50%;\n  top: 50%;\n  border-radius: 50%;\n  z-index: 10000;\n}\n\n.alert div {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  font-size: 30px;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n.wrapper {\n  height: 100vh;\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n}\n\n.sea {\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 100;\n  overflow: hidden;\n}\n\n.sea__vertical {\n  height: 120%;\n  top: -10%;\n  left: 0;\n  right: 0;\n  position: absolute;\n  z-index: 100;\n  -webkit-animation: upDown 2s alternate infinite ease-in-out;\n          animation: upDown 2s alternate infinite ease-in-out;\n}\n\nfigure {\n  margin: 0;\n}\n\n.sea__image {\n  width: 200%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  z-index: 100;\n  background: url('sea2.jpg') repeat center center;\n  background-size: 25% auto;\n  -webkit-animation: leftRight 20s infinite linear;\n          animation: leftRight 20s infinite linear;\n}\n\n@-webkit-keyframes upDown {\n  to {\n    transform: translateY(5%);\n  }\n}\n\n@keyframes upDown {\n  to {\n    transform: translateY(5%);\n  }\n}\n\n@-webkit-keyframes leftRight {\n  to {\n    transform: translateX(-50%);\n  }\n}\n\n@keyframes leftRight {\n  to {\n    transform: translateX(-50%);\n  }\n}\n\n.map {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -40%);\n  z-index: 1000;\n  width: 100%;\n}\n\n.map img,\n.map canvas {\n  margin: 0 auto;\n  display: block;\n}\n\n#dot {\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n  top: 0;\n  z-index: 2;\n}\n\n.distance {\n  position: absolute;\n  left: 20px;\n  top: 85px;\n  background: #ffc409;\n  width: 150px;\n  padding: 10px 0;\n  text-align: center;\n  box-sizing: content-box;\n  border-radius: 5px;\n  box-shadow: 0 0 10px #1f1f1f;\n  height: 20px;\n  line-height: 20px;\n  font-size: 18px;\n  color: #1f1f1f;\n  z-index: 10000;\n}\n\n.start {\n  position: fixed;\n  background: #000 url('sea2.jpg') repeat center center;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.start__button {\n  background: url('start.png') no-repeat center center/cover;\n  width: 160px;\n  height: 94px;\n}\n\n.finish {\n  position: fixed;\n  background: #000 url('sea2.jpg') repeat center center;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.finish__button {\n  background: url('start.png') no-repeat center center/cover;\n  width: 160px;\n  height: 94px;\n}\n\n.finish__title {\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 30px;\n  line-height: 34px;\n  background: -webkit-linear-gradient(-86deg, #EEF85B 5%, #7AEC8D 53%, #09E5C3 91%);\n  -webkit-background-clip: text;\n  -webkit-text-stroke: 4px transparent;\n  color: darkblue;\n  text-align: center;\n  margin-bottom: 50px;\n  font-weight: bolder;\n}\n\n.dig {\n  position: fixed;\n  right: 20px;\n  top: 65px;\n  background: url('butt-dig.png') no-repeat center center/cover;\n  width: 100px;\n  height: 92px;\n  z-index: 1001;\n}\n\n.diger {\n  position: fixed;\n  right: 20px;\n  top: 65px;\n  background: url('digger-btn.png') no-repeat center center/cover;\n  width: 100px;\n  height: 92px;\n  z-index: 1001;\n}\n\n.reset {\n  position: fixed;\n  right: 20px;\n  bottom: 70px;\n  background: url('reset.png') no-repeat center center/cover;\n  width: 100px;\n  height: 92px;\n  z-index: 1001;\n}\n\n.audioToggle {\n  position: fixed;\n  left: 20px;\n  bottom: 70px;\n  background: url('audioPlay.png') no-repeat center center/cover;\n  width: 70px;\n  height: 70px;\n  z-index: 1001;\n}\n\ncanvas {\n  max-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXFJvYmVydFxcRG9jdW1lbnRzXFxNT0JJTEVfREVWRUxPUE1FTlRcXElPTklDX01PQklMRV9ERVZcXHRyZWFzdXJlSHVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQ0ZGOztBREtBO0VBQ0UscUJBQUE7QUNGRjs7QURLQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDRkY7O0FES0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElFO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGSjs7QURNQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIRjs7QURPQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyREFBQTtVQUFBLG1EQUFBO0FDSkY7O0FETUE7RUFDRSxTQUFBO0FDSEY7O0FES0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7RUFDQSx5QkFBQTtFQUNBLGdEQUFBO1VBQUEsd0NBQUE7QUNGRjs7QURLQTtFQUNFO0lBQ0kseUJBQUE7RUNGSjtBQUNGOztBRERBO0VBQ0U7SUFDSSx5QkFBQTtFQ0ZKO0FBQ0Y7O0FES0E7RUFDRTtJQUNJLDJCQUFBO0VDSEo7QUFDRjs7QURBQTtFQUNFO0lBQ0ksMkJBQUE7RUNISjtBQUNGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNKRjs7QURPQTs7RUFFRSxjQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQ0pGOztBRE9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0pGOztBRFdBO0VBQ0UsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1JGOztBRFVFO0VBQ0UsMERBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1JKOztBRFlBO0VBQ0UsZUFBQTtFQUNBLHFEQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDVEY7O0FEV0U7RUFDRSwwREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDVEo7O0FEV0U7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUdBLGlGQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURlQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLDZEQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDWkY7O0FEY0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSwrREFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ1hGOztBRGNBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMERBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNYRjs7QURhQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDVkY7O0FEYUE7RUFDRSxlQUFBO0FDVkYiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udG9vbGJhci13cmFwcGVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbioge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3gtc2hhZG93OiAwIDAgMTBweCAjMWUxZTFlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG5cclxuICBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnNlYSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuXHJcbi5zZWFfX3ZlcnRpY2FsIHtcclxuICBoZWlnaHQ6IDEyMCU7XHJcbiAgdG9wOiAtMTAlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBhbmltYXRpb246IHVwRG93biAycyBhbHRlcm5hdGUgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XHJcbn1cclxuZmlndXJlIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLnNlYV9faW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9zZWEyLmpwZ1wiKSByZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDI1JSBhdXRvO1xyXG4gIGFuaW1hdGlvbjogbGVmdFJpZ2h0IDIwcyBpbmZpbml0ZSBsaW5lYXI7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgdXBEb3duIHtcclxuICB0byB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGxlZnRSaWdodCB7XHJcbiAgdG8ge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFwIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC00MCUpO1xyXG4gIHotaW5kZXg6IDEwMDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXAgaW1nLFxyXG4ubWFwIGNhbnZhcyB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNkb3Qge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uZGlzdGFuY2Uge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIHRvcDogODVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZjNDA5O1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDAgO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzFmMWYxZjtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjMWYxZjFmO1xyXG4gIHotaW5kZXg6IDEwMDAwO1xyXG59XHJcbi8vICNhdWRpb1BsYXllciB7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgei1pbmRleDogMTAwMDA7XHJcbi8vIH1cclxuLnN0YXJ0IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogIzAwMCB1cmwoXCIuLi8uLi9hc3NldHMvc2VhMi5qcGdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICZfX2J1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3RhcnQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBoZWlnaHQ6IDk0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uZmluaXNoIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZDogIzAwMCB1cmwoXCIuLi8uLi9hc3NldHMvc2VhMi5qcGdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcbiAgei1pbmRleDogMTAwMDAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJl9fYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9zdGFydC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGhlaWdodDogOTRweDtcclxuICB9XHJcbiAgJl9fdGl0bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzRweDtcclxuICAgIC8vdGV4dC1zaGFkb3c6IDBweCAycHggMnB4IGJsYWNrLCAycHggMnB4IDJweCBibGFjaywgMnB4IDBweCAycHggYmxhY2ssIC0ycHggMHB4IDJweCBibGFjaywgMHB4IC0ycHggMnB4IGJsYWNrO1xyXG4gICAgLy9jb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoLTg2ZGVnLCAjRUVGODVCIDUlLCAjN0FFQzhEIDUzJSwgIzA5RTVDMyA5MSUpO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiA0cHggdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5kaWcge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2J1dHQtZGlnLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG4uZGlnZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMjBweDtcclxuICB0b3A6IDY1cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL2RpZ2dlci1idG4ucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGhlaWdodDogOTJweDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcblxyXG4ucmVzZXQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMjBweDtcclxuICBib3R0b206IDcwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3Jlc2V0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgei1pbmRleDogMTAwMTtcclxufVxyXG4uYXVkaW9Ub2dnbGUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGJvdHRvbTogNzBweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYXVkaW9QbGF5LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICB6LWluZGV4OiAxMDAxO1xyXG59XHJcblxyXG5jYW52YXMge1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxufVxyXG4iLCIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbi50b29sYmFyLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI2NvbnRhaW5lciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYWxlcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAzMDBweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzFlMWUxZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAxMDAwMDtcbn1cbi5hbGVydCBkaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cblxuLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VhIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNlYV9fdmVydGljYWwge1xuICBoZWlnaHQ6IDEyMCU7XG4gIHRvcDogLTEwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICBhbmltYXRpb246IHVwRG93biAycyBhbHRlcm5hdGUgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlYV9faW1hZ2Uge1xuICB3aWR0aDogMjAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc2VhMi5qcGdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogMjUlIGF1dG87XG4gIGFuaW1hdGlvbjogbGVmdFJpZ2h0IDIwcyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbkBrZXlmcmFtZXMgdXBEb3duIHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgbGVmdFJpZ2h0IHtcbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgfVxufVxuLm1hcCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTQwJSk7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWFwIGltZyxcbi5tYXAgY2FudmFzIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uZGlzdGFuY2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIwcHg7XG4gIHRvcDogODVweDtcbiAgYmFja2dyb3VuZDogI2ZmYzQwOTtcbiAgd2lkdGg6IDE1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzFmMWYxZjtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzFmMWYxZjtcbiAgei1pbmRleDogMTAwMDA7XG59XG5cbi5zdGFydCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZDogIzAwMCB1cmwoXCIuLi8uLi9hc3NldHMvc2VhMi5qcGdcIikgcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5zdGFydF9fYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3N0YXJ0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgd2lkdGg6IDE2MHB4O1xuICBoZWlnaHQ6IDk0cHg7XG59XG5cbi5maW5pc2gge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMwMDAgdXJsKFwiLi4vLi4vYXNzZXRzL3NlYTIuanBnXCIpIHJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICB6LWluZGV4OiAxMDAwMDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZmluaXNoX19idXR0b24ge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvc3RhcnQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xuICB3aWR0aDogMTYwcHg7XG4gIGhlaWdodDogOTRweDtcbn1cbi5maW5pc2hfX3RpdGxlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KC04NmRlZywgI0VFRjg1QiA1JSwgIzdBRUM4RCA1MyUsICMwOUU1QzMgOTElKTtcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDRweCB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGRhcmtibHVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5kaWcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDY1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9idXR0LWRpZy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIvY292ZXI7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA5MnB4O1xuICB6LWluZGV4OiAxMDAxO1xufVxuXG4uZGlnZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAyMHB4O1xuICB0b3A6IDY1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9kaWdnZXItYnRuLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5yZXNldCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGJvdHRvbTogNzBweDtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL3Jlc2V0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDkycHg7XG4gIHotaW5kZXg6IDEwMDE7XG59XG5cbi5hdWRpb1RvZ2dsZSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMjBweDtcbiAgYm90dG9tOiA3MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvYXVkaW9QbGF5LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuY2FudmFzIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _save_treasure_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../save-treasure.service */ "./src/app/save-treasure.service.ts");
/* harmony import */ var _windowRef__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./windowRef */ "./src/app/home/windowRef.ts");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "./node_modules/@ionic-native/text-to-speech/ngx/index.js");





let HomePage = class HomePage {
    constructor(windowRef, treasureService, tts) {
        this.windowRef = windowRef;
        this.treasureService = treasureService;
        this.tts = tts;
        this.currentMoveArray = [0, 0];
        this.startCoords = [330, 250];
        this.coords = [330, 250];
        this.step = 10;
        this.img = new Image();
        this.alertIsShow = false;
        this.speedX = 0;
        this.speedY = 0;
        this.isStarted = false;
        this.isFinished = false;
        this.audioMuted = false;
        this.bgImage = 'assets/audioPlay.png';
        this.window = windowRef.nativeWindow;
    }
    ngOnInit() {
        this.ctxMap = this.canvasMain.nativeElement.getContext('2d');
        this.ctxDot = this.canvasDot.nativeElement.getContext('2d');
        this.img.src = 'assets/map2.png';
        this.img.onload = () => {
            this.ctxMap.drawImage(this.img, 0, 0);
            this.drawDot(this.coords);
        };
        setInterval(() => {
            let x = this.coords[0] + this.speedX;
            let y = this.coords[1] + this.speedY;
            var imgData = this.ctxMap.getImageData(x, y, 1, 1).data;
            var R = imgData[0];
            if (R < 200) {
                return false;
            }
            this.coords[0] = this.coords[0] + this.speedX;
            this.coords[1] = this.coords[1] + this.speedY;
            this.drawDot(this.coords);
            this.treasureService.setTreasureDistance(this.coords);
        }, 40);
        document.onkeyup = e => {
            this.ctxDot.fillStyle = "#ff2626";
            var newCoors = [...this.coords];
            var itIsArrow = false;
            switch (e.keyCode) {
                // left
                case 37:
                    newCoors[0] -= this.step;
                    itIsArrow = true;
                    break;
                //up
                case 38:
                    newCoors[1] -= this.step;
                    itIsArrow = true;
                    break;
                // right
                case 39:
                    newCoors[0] += this.step;
                    itIsArrow = true;
                    break;
                //down
                case 40:
                    newCoors[1] += this.step;
                    itIsArrow = true;
                    break;
            }
            if (itIsArrow) {
                var imgData = this.ctxMap.getImageData(newCoors[0], newCoors[1], 1, 1).data;
                console.log(imgData);
                var R = imgData[0];
                if (R < 200) {
                    this.showAlert();
                    return false;
                }
                this.coords = [...newCoors];
                this.drawDot(this.coords);
                this.treasureService.setTreasureDistance(this.coords);
            }
            e.stopPropagation();
            e.preventDefault();
        };
    }
    audioToggle() {
        if (this.audioMuted === false) {
            this.audioMuted = true;
            this.bgImage = 'assets/audioStop.png';
            console.log(this.audioMuted);
        }
        else {
            this.audioMuted = false;
            this.bgImage = 'assets/audioPlay.png';
            console.log(this.audioMuted);
        }
    }
    showAlert() {
        if (this.alertIsShow === true)
            return;
        this.alertIsShow = true;
        setTimeout(() => {
            this.alertIsShow = false;
        }, 200);
    }
    drawDot(coords) {
        this.ctxDot.clearRect(0, 0, 1000, 1000);
        this.ctxDot.beginPath();
        this.ctxDot.fillStyle = "#ff2626";
        this.ctxDot.arc(coords[0], coords[1], 3, 0, Math.PI * 2, true);
        this.ctxDot.fill();
    }
    resetDot() {
        this.coords = [330, 250];
        this.drawDot([330, 250]);
        this.currentMoveArray = [0, 0];
        this.treasureService.setTreasureDistance(this.coords);
    }
    startAgain() {
        this.isFinished = false;
        this.tts.speak('Hide the treasure');
    }
    getOrientation() {
        this.tts.speak('Hide the treasure');
        var audio1 = document.getElementById('music');
        //@ts-ignore
        audio1.volume = 0.2;
        //@ts-ignore
        audio1.play();
        let _this = this;
        //@ts-ignore
        if (typeof (DeviceOrientationEvent) !== 'undefined' && typeof (DeviceOrientationEvent.requestPermission) === 'function') {
            //@ts-ignore
            DeviceOrientationEvent.requestPermission()
                .then(response => {
                if (response == 'granted') {
                    window.addEventListener('deviceorientation', (e) => {
                        _this.isStarted = true;
                        window.addEventListener('deviceorientation', (e) => {
                            this.beta = e.beta;
                            this.gamma = e.gamma;
                            this.speedX = e.gamma / 3;
                            this.speedY = e.beta / 3;
                        });
                    });
                }
            })
                .catch(console.error);
        }
        else {
            _this.isStarted = true;
            window.addEventListener('deviceorientation', (e) => {
                this.beta = e.beta;
                this.gamma = e.gamma;
                this.speedX = e.gamma / 3;
                this.speedY = e.beta / 3;
            });
        }
    }
    dig() {
        if (this.treasureService.treasureIsBuried)
            return false;
        this.treasureService.setTreasureBuried(true);
        this.treasureService.setTeasureCoords(this.coords);
        this.treasureService.setTreasureDistance(this.coords);
        this.resetDot();
        this.tts.speak('Find the treasure');
    }
    digIt() {
        if (this.treasureService.distance >= 15) {
            this.tts.speak("TRY AGAIN");
        }
        else {
            this.treasureService.setTreasureBuried(false);
            this.resetDot();
            this.isFinished = true;
            this.tts.speak('WOW, YOU ARE SO GOOD');
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _windowRef__WEBPACK_IMPORTED_MODULE_3__["WindowRef"] },
    { type: _save_treasure_service__WEBPACK_IMPORTED_MODULE_2__["SaveTreasureService"] },
    { type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_4__["TextToSpeech"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "canvasMain", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dot', { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], HomePage.prototype, "canvasDot", void 0);
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_windowRef__WEBPACK_IMPORTED_MODULE_3__["WindowRef"], _save_treasure_service__WEBPACK_IMPORTED_MODULE_2__["SaveTreasureService"], _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_4__["TextToSpeech"]])
], HomePage);



/***/ }),

/***/ "./src/app/home/windowRef.ts":
/*!***********************************!*\
  !*** ./src/app/home/windowRef.ts ***!
  \***********************************/
/*! exports provided: WindowRef */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


function _window() {
    // return the global native browser window object
    return window;
}
let WindowRef = class WindowRef {
    get nativeWindow() {
        return _window();
    }
};
WindowRef = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], WindowRef);



/***/ }),

/***/ "./src/app/save-treasure.service.ts":
/*!******************************************!*\
  !*** ./src/app/save-treasure.service.ts ***!
  \******************************************/
/*! exports provided: SaveTreasureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveTreasureService", function() { return SaveTreasureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SaveTreasureService = class SaveTreasureService {
    constructor() {
        this.coords = [0, 0];
        this.treasureIsBuried = false;
    }
    get getTreasureCoords() {
        return this.coords;
    }
    setTreasureBuried(state) {
        this.treasureIsBuried = state;
    }
    setTeasureCoords(coords) {
        this.coords = [...coords];
    }
    setTreasureDistance(coords) {
        this.distance = Math.round(Math.sqrt(Math.pow(coords[0] - this.coords[0], 2) + Math.pow(coords[1] - this.coords[1], 2)));
    }
};
SaveTreasureService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SaveTreasureService);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map
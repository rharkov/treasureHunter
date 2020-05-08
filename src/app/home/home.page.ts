
import {Component, OnInit, ElementRef, ViewChild, Inject, Injectable} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {SaveTreasureService} from "../save-treasure.service";
import { WindowRef } from './windowRef';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    @ViewChild('canvas', {static: true})
    canvasMain: ElementRef<HTMLCanvasElement>;
    @ViewChild('dot', {static: true})
    canvasDot: ElementRef<HTMLCanvasElement>;
    ctxMap: any;
    ctxDot: any;
    cordCurrentLong: number;
    cordCurrenttLat: number;
    currentMoveArray = [0, 0];
    startCoords = [350, 200];
    coords = [350, 200];
    step = 10;
    img = new Image();
    location: string;
    alertIsShow = false;
    window: Window;
    beta: number;
    gamma: number;
    speedX = 0;
    speedY = 0;

    constructor(public windowRef: WindowRef, private geolocation: Geolocation, public treasureService: SaveTreasureService) {
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
                //this.showAlert();
                return false;
            }

            this.coords[0] = this.coords[0] + this.speedX;
            this.coords[1] = this.coords[1] + this.speedY;
            this.drawDot(this.coords);
            this.treasureService.setTreasureDistance(this.coords);
        }, 40)


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
        }
    }

    showAlert() {
        if (this.alertIsShow === true) return;
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
        this.coords = [350, 200];
        this.drawDot([350, 200]);
        this.currentMoveArray = [0, 0];
        this.treasureService.setTreasureDistance(this.coords);
    }

    //guess their location based on their speed, you know how fast they are going and where are they going, guess where are they going
    getLocation() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.location = resp.coords.latitude.toString() + " " + resp.coords.longitude.toString();
            this.cordCurrenttLat = resp.coords.latitude;
            this.cordCurrentLong = resp.coords.longitude;
            // resp.coords.latitude
            // resp.coords.longitude
        }).catch((error) => {
            console.log('Error getting location', error);
        });
        var options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
          };
          // setInterval(() => {navigator.geolocation.getCurrentPosition((position) => {
          //   _this.myLat = position.coords.latitude;
          //   _this.myLong = position.coords.longitude;
          //   _this.watchID = -_this.watchID;
    
          // },() => {}, options)}, 300)
          navigator.geolocation.watchPosition((data) => {
            
            this.location = data.coords.latitude.toString() + " " + data.coords.longitude.toString();
            let currentMove = [data.coords.longitude - this.cordCurrentLong, data.coords.latitude - this.cordCurrenttLat];

            this.currentMoveArray = currentMove;

            if (currentMove[0] === 0 && currentMove[1] === 0) {
                return false;
            }

            const x = this.startCoords[0] + currentMove[0] * 10000;
            const y = this.startCoords[1] + currentMove[1] * 10000;

        

            var imgData = this.ctxMap.getImageData(x, y, 1, 1).data;
            var R = imgData[0];
            if (R < 200) {
                this.showAlert();
                return false;
            }

            this.coords[0] = x;
            this.coords[1] = y;

            this.ctxDot.fillStyle = "#ff2626";

            this.drawDot(this.coords);
            this.treasureService.setTreasureDistance(this.coords);
    
          },() => {}, options);
        // let watch = this.geolocation.watchPosition();
        // watch.subscribe((data) => {

        //     this.location = data.coords.latitude.toString() + " " + data.coords.longitude.toString();
        //     let currentMove = [data.coords.longitude - this.cordCurrentLong, data.coords.latitude - this.cordCurrenttLat];

        //     this.currentMoveArray = currentMove;

        //     if (currentMove[0] === 0 && currentMove[1] === 0) {
        //         return false;
        //     }

        //     const x = this.startCoords[0] + currentMove[0] * 1000000;
        //     const y = this.startCoords[1] + currentMove[1] * 1000000;

        //     var imgData = this.ctxMap.getImageData(x, y, 1, 1).data;
        //     var R = imgData[0];
        //     if (R < 200) {
        //         this.showAlert();
        //         return false;
        //     }

        //     this.coords[0] = x;
        //     this.coords[1] = y;

        //     this.ctxDot.fillStyle = "#ff2626";

        //     this.drawDot(this.coords);
        //     this.treasureService.setTreasureDistance(this.coords);
        // });
    }
    getOrientation(){
        let _this = this;
        //@ts-ignore
        if (typeof(DeviceOrientationEvent) !== 'undefined' && typeof(DeviceOrientationEvent.requestPermission) === 'function'){
            //@ts-ignore
            DeviceOrientationEvent.requestPermission()
            .then(response => {
            //    alert('resp'+ response);
                if (response == 'granted') {
                    window.addEventListener('deviceorientation', (e) => {

                        function a (obj,number)
                        {
                            obj.Value=number;
                        }

                        //a(_this.rotateA,e.beta.toFixed(0));

                    })
                }
            })
            .catch(console.error)
    }else {
        alert('Rotate your phone backward or forward to see change');
        window.addEventListener('deviceorientation', (e) => {
            //beta - y
            //gamma - x
            this.beta = e.beta;
            this.gamma = e.gamma;

           
            this.speedX = e.gamma / 3;
            this.speedY = e.beta / 3;
            

            
            //this.treasureService.setTreasureDistance(this.coords);
            
            
            //a(_this.rotateA,e.beta.toFixed(0));


        })
        }
    }

    dig() {
        if (this.treasureService.treasureIsBuried) return false;
        this.treasureService.setTreasureBuried(true);
        this.treasureService.setTeasureCoords(this.coords);
        this.treasureService.setTreasureDistance(this.coords);
        this.resetDot();
    }

    digIt() {
        if (this.treasureService.distance >= 5) {
          alert('Doh! try better!')
        } else {
            alert('YOU ARE TREASURE HUNTER!!!')
        }
    }

}

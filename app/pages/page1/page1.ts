<<<<<<< HEAD
import {Page, NavController, Platform} from 'ionic-angular';
=======
import {Page, NavController, Platform} from 'ionic-framework/ionic';
>>>>>>> 3fac5e9243e968e3ead65d56a9ec7cbb11e6dd32
import {NgZone} from 'angular2/core';

declare var Camera:any;

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})

export class Page1 {

  _zone: any;
  platform:any;
  images: Array<{src: String}>;

<<<<<<< HEAD
  constructor(platform:Platform, _zone : NgZone) {
=======
  constructor(platform:Platform, zone : NgZone) {
>>>>>>> 3fac5e9243e968e3ead65d56a9ec7cbb11e6dd32
    this._zone = _zone;
    this.platform = platform;
    this.images = [];
  }

  takePhoto() {
    this.platform.ready().then(() => {
      let options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: false,
        encodingType: Camera.EncodingType.JPEG,
        saveToPhotoAlbum: false
      };
      // https://github.com/apache/cordova-plugin-camera#module_camera.getPicture
      navigator.camera.getPicture(
        (data) => {
          let imagedata = "data:image/jpeg;base64," + data;
           this._zone.run(()=> this.images.unshift({
             src: imagedata
           }))
        }, (error) => {
          alert(error);
        }, options
      );
    });
  }
}

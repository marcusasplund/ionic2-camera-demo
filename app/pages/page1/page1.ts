import {Page, NavController, Platform, NavParams} from 'ionic-framework/ionic';
import {NgZone} from 'angular2/core';

@Page({
  templateUrl: 'build/pages/page1/page1.html',
})

export class Page1 {

  _zone: any;
  platform:any;
  images: Array<Object>;

  constructor(platform:Platform, navParams: NavParams, _zone : NgZone) {
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

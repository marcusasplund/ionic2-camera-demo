# ionic2-camera-demo

[![GitHub issues](https://img.shields.io/github/issues/marcusasplund/ionic2-camera-demo.svg)](https://github.com/marcusasplund/ionic2-camera-demo/issues)
[![Build status](https://travis-ci.org/marcusasplund/ionic2-camera-demo.svg?branch=master)](https://travis-ci.org/marcusasplund/ionic2-camera-demo)
[![dependencies](https://david-dm.org/marcusasplund/ionic2-camera-demo.svg)](https://david-dm.org/marcusasplund/ionic2-camera-demo)
[![Stack Share](http://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](http://stackshare.io/marcusasplund/ionic2-camera-demo)

Example of using Cordova Camera in a ionic2 application

Only tested in Android

If you don't have it already, first install the latest ionic2 and cordova, i noticed that it was a good idea to uninstall my really old cli:s first

install
```bash
$ npm uninstall -g ionic
$ npm install -g ionic
$ npm uninstall -g cordova
$ npm install -g cordova
```
## A short way to try out this project:
```bash
$ git clone https://github.com/marcusasplund/ionic2-camera-demo.git
$ cd ionic2-camera-demo
$ npm install
$ npm run build 
$ ionic build android
```
install .apk and test

## The long way to try out this project:

### Install a starter project
(heads up: this project is written in typescript, if you want plain js, skip the flag --ts)

```bash
$ ionic start ionic2-camera-demo --v2 --ts
$ cd ionic2-camera-demo
```
### Install Camera plugin
```bash
$ ionic plugin add cordova-plugin-camera --save
$ npm install --save @ionic-native/camera
```
Checkout the latest api:

https://ionicframework.com/docs/native/camera/

Heads up, in the file app.module.ts you need to add:
```js
import { Camera } from '@ionic-native/camera';
```
And add Camera in the providers array, like so:
```js
providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
]
```  

### Install Cordova typedefs (if you write in typescript this part is needed)
```bash
$ (sudo) typings install dt~cordova --global
$ (sudo) typings install dt~cordova-plugin-camera --global
```
download folder "app" from this project and replace folder "app" with this 
```bash
$ npm run build

$ ionic build android
```
install .apk and test



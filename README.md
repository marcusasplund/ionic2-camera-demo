# ionic2-camera-demo
Example of using Cordova Camera in a ionic2 application
Only tested in Android

If you don't have it already, first install ionic2 and cordova

$ npm install -g ionic@beta

$ npm install -g cordova

## The long way to try out this project:

### Install a starter project
(heads up: this project is written in typescript, if you want plain js, skip the flag --ts)

$ ionic start ionic2-camera-demo --v2 --ts

$ cd ionic2-camera-demo

### Install Camera plugin

$ ionic plugin add cordova-plugin-camera --save

### Install Cordova typedefs (if you write in typescript this part is needed)

$ tsd init
$ tsd install cordova --save

Add this row in file: typings/main.d.ts
`/// <reference path="./cordova/plugins/Camera.d.ts"/>`

download folder "app" from this project and replace folder "app" with this 

$ ionic build android

install .apk and test

## A shorter way to try out this project:
$ git clone https://github.com/marcusasplund/ionic2-camera-demo.git

$ cd ionic2-camera-demo

$ npm install

$ ionic build android

install .apk and test



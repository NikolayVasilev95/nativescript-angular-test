import { Component, OnInit } from '@angular/core';

import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';

import { screen } from 'tns-core-modules/platform';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.tns.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  title = 'teamandwin | camera';

  saveToGallery = false;
  allowsEditing = false;
  keepAspectRatio = true;
  width = 320;
  height = 240;
  cameraImage: ImageAsset;
  actualWidth: number;
  actualHeight: number;
  scale = 1;
  labelText: string;

  constructor() { }

  ngOnInit() {
  }

  onTakePictureTap($event) {
    requestPermissions().then(
      () => {
        takePicture(
          {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery,
            allowsEditing: this.allowsEditing
          })
          .then((imageAsset: any) => {
            this.cameraImage = imageAsset;
            const that = this;
            imageAsset.getImageAsync(function (nativeImage, ex) {
              if (ex instanceof Error) {
                throw ex;
              } else if (typeof ex === 'string') {
                throw new Error(ex);
              }

              if (imageAsset.android) {
                // get the current density of the screen (dpi) and divide it by the default one to get the scale
                that.scale = nativeImage.getDensity() / screen.mainScreen.scale;
                that.actualWidth = nativeImage.getWidth();
                that.actualHeight = nativeImage.getHeight();
              } else {
                that.scale = nativeImage.scale;
                that.actualWidth = nativeImage.size.width * that.scale;
                that.actualHeight = nativeImage.size.height * that.scale;
              }
              that.labelText = `Displayed Size: ${that.actualWidth}x${that.actualHeight} with scale ${that.scale}\n` +
                `Image Size: ${Math.round(that.actualWidth / that.scale)}x${Math.round(that.actualHeight / that.scale)}`;

              console.log(`${that.labelText}`);
            });
          }, (error) => {
            console.log('Error: ' + error);
          });
      },
      () => alert('permissions rejected')
    );
  }

}

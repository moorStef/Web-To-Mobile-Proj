import { Component, OnInit, Output } from '@angular/core';
import { CordovaService } from '../cordova.service';
declare let cordova: any;
declare let Camera: any;
declare let navigator: any;

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})



export class CameraComponent implements OnInit {

  fileInput = null;
  output = null;
  showImg = false;
  imgSrc = null;
  isCordova = false;
  public base64Image: string;

  constructor(private cordovaService: CordovaService) { }

  ngOnInit() {
    if (this.cordovaService.isCordova) {
      this.isCordova = true;
      this.fileInput = document.getElementById('cameraTakePicture');
      this.output = document.getElementById('output');
      console.log('output: ', this.output);
      // this.fileInput.addEventListener('change', () => this.takePicture());

    } else {
      this.isCordova = false;
      this.fileInput = document.getElementById('file-input');
      this.output = document.getElementById('output');
      this.fileInput.addEventListener('change', (e) => this.doSomethingWithFiles(e));
    }
  }

  takePicture() {
    navigator.camera.getPicture(this.onSuccess, this.onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI
    });
  }

  takeEditablePicture() {
    navigator.camera.getPicture(this.onSuccess, this.onFail, {
      quality: 50,
      allowEdit: true,
      destinationType: Camera.DestinationType.FILE_URI
    });
  }

  getAlbumPhoto() {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(this.onSuccess, this.onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
    });
  }
  getLibraryPhoto() {
    // Retrieve image file location from specified source
    navigator.camera.getPicture(this.onSuccess, this.onFail, {
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY
    });
  }

  onSuccess(imageURI) {
    console.log('Picture URI: ', imageURI);

    const smallImage = document.getElementById('smallImage') as HTMLImageElement;

    smallImage.style.display = 'block';

    smallImage.src = imageURI;
  }

  onFail(err) {
    console.log(err);
    // alert(err);
  }

  doSomethingWithFiles(fileList) {
    console.log('File List: ', fileList);

    const file = fileList.target.files[0];

    console.log('File: ', file);

    if (file != null) {
      this.showImg = true;
      this.output.src = URL.createObjectURL(file);
      console.log('Output Src: ', this.imgSrc);
    } else {
      this.showImg = false;
      console.error('Error retrieving image');
    }
  }
}

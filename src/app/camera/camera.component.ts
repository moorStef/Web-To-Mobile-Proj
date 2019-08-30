import { Component, OnInit, Output } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
    this.fileInput = document.getElementById('file-input');
    this.output = document.getElementById('output');
    this.fileInput.addEventListener('change', (e) => this.doSomethingWithFiles(e));
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

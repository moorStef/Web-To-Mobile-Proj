import { Component, OnInit } from '@angular/core';
import { CordovaService } from '../cordova.service';

declare let cordova: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  ref: any;

  constructor(private cordovaService: CordovaService) { }

  ngOnInit() {
  }

  openInAppBrowser(url) {
    if (this.cordovaService.isCordova) {
      try {
        this.ref = cordova.InAppBrowser.open(url, '_blank', 'location=no,hideurlbar=yes,zoom=no');
        this.ref.addEventListener('loaderror', this.loadErrorCallBack);

      } catch (err) {
        alert('Plugin Error: ' + err.message);
      }
    } else {
      window.open(url, '_blank');
    }
  }

  loadErrorCallBack(params) {
    alert(params.message);

    if (this.ref !== undefined) {
      this.ref.close();
    }

    this.ref = undefined;
  }
}

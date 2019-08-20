import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { SwPush } from '@angular/service-worker';

export interface DeviceInformation {
  name: string;
  value: any;
}

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.scss']
})
export class NativeComponent implements OnInit {


  deviceObj: DeviceInfo = null;
  deviceData = null;
  displayedColumns: string[] = ['name', 'value'];
  dataSource = null;

  constructor(private deviceService: DeviceDetectorService, private swPush: SwPush ) {
    this.deviceFunction();
    this.dataSource = this.deviceData;
  }

  deviceFunction() {
    console.log('In native component');
    this.deviceObj = this.deviceService.getDeviceInfo();

    this.deviceData = [
      { name: 'userAgent', value: this.deviceObj.userAgent },
      { name: 'device', value: this.deviceObj.device },
      { name: 'browser', value: this.deviceObj.browser },
      { name: 'browserVersion', value: this.deviceObj.browser_version },
      { name: 'os', value: this.deviceObj.os },
      { name: 'osVersion', value: this.deviceObj.os_version },
      { name: 'isMobile', value: this.deviceService.isMobile() },
      { name: 'isTablet', value: this.deviceService.isTablet() },
      { name: 'isDesktopDevice', value: this.deviceService.isDesktop() }
    ];
  }

  subscribeToNotifications(): void {
    // this.swPush.requestSubscription({
    //   // serverPublicKey: this.VAPID_PUBLIC_KEY
    // })
    //   .then(sub => this.pushService.addPushSubscriber(sub).subscribe())
    //   .catch(err => console.error('Could not subscribe to notifications', err));
  }

  ngOnInit() {
  }
}

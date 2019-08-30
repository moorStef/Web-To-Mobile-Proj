import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { platform } from '../node_modules/os';

if (environment.production) {
  enableProdMode();
}

declare let window: any;

const isCordova = !!window.cordova;

const bootstrap = () => {
  console.log('Bootstrapping app');
  platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
};


const app = {
  // Application Constructor
  initialize() {
    if (isCordova) {
      console.log('is cordova');
      document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    } else {
      console.log('is not cordova');
      bootstrap();
    }
  },

  onDeviceReady() {
    this.receivedEvent('deviceready');
    bootstrap();
  },

  // Update DOM on a Received Event
  receivedEvent(id) {
    const parentElement = document.getElementById(id);
    // var listeningElement = parentElement.querySelector('.listening');
    // var receivedElement = parentElement.querySelector('.received');

    // listeningElement.setAttribute('style', 'display:none;');
    // receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
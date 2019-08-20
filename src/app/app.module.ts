import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { AngularmaterialModule } from '../app/angularmaterial/angularmaterial.module';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { FooterComponent } from './footer/footer.component';
import { NativeComponent } from './native/native.component';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { HttpApiComponent } from './http-api/http-api.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { InstallPromptComponent } from './install-prompt/install-prompt.component';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    MaterialComponentsComponent,
    FooterComponent,
    NativeComponent,
    HttpApiComponent,
    AppComponent,
    InstallPromptComponent,
    ConnectivityComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmaterialModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

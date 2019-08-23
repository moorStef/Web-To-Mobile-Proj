import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { NativeComponent } from './native/native.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { CameraComponent } from './camera/camera.component';


const routes: Routes = [
  { path: 'http', component: HttpApiComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'native', component: NativeComponent },
  { path: 'material', component: MaterialComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '*', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

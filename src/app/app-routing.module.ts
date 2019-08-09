import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MaterialComponentsComponent } from './material-components/material-components.component';
import { NativeComponent } from './native/native.component';
import { HttpApiComponent } from './http-api/http-api.component';


const routes: Routes = [
  { path: 'http', component: HttpApiComponent },
  { path: 'native', component: NativeComponent },
  { path: 'material', component: MaterialComponentsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '*', redirectTo: 'home', pathMatch: 'full'}
];

// , {useHash: true}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

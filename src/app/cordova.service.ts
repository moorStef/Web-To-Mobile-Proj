import { Injectable } from '@angular/core';

function getWindow(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CordovaService {

  isCordova = !!getWindow().cordova;

  constructor() { }


}

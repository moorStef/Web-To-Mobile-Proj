import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../api.service';
import { ConnectionService } from 'ng-connection-service';


@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.scss']
})
export class HttpApiComponent implements OnInit, OnDestroy {

  title = 'pwademo';
  items: Array<Item>;
  status = 'ONLINE';
  isConnected = true;

  constructor(private apiService: ApiService, private connectionService: ConnectionService) {
    this.connectionService.monitor().subscribe(isConnected => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.status = 'ONLINE';
      } else {
        this.status = 'OFFLINE';
      }
    });
  }

  ngOnInit() {
    this.fetchData();
  }

  ngOnDestroy(): void {
  }


  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      console.log(data);
      this.items = data;
    }, (err) => {
      console.log(err);
    });
  }
}

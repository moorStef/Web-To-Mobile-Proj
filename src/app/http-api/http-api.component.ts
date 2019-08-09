import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../api.service';



@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.scss']
})
export class HttpApiComponent implements OnInit {

  title  =  'pwademo';
  items: Array<Item>;

  constructor(private  apiService: ApiService) {  }

  ngOnInit() {
    this.fetchData();
    }
    fetchData() {
      this.apiService.fetch().subscribe((data: Array<Item>) => {
        console.log(data);
        this.items  =  data;
      }, (err) => {
        console.log(err);
  });
  }
}

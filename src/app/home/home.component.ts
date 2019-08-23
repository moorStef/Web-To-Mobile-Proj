import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Item } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title  =  'pwademo';
  items: Array<Item>;

  btnnav = [
      {
        title: 'Components',
        path: '/#/material'
      },
      {
        title: 'Native APIs',
        path: '/#/native'
      },
      {
        title: 'Http',
        path: '/#/http'
      }
  ];

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

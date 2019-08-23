import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {

  constructor() {
  }

  nav = [
    {
      title: 'Home',
      path: '/#'
    },
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
    },
    {
      title: 'Camera',
      path: '/#/camera'
    }
  ];

  ngOnInit(): void {

  }
}

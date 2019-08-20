import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-connectivity',
  templateUrl: './connectivity.component.html',
  styleUrls: ['./connectivity.component.scss']
})
export class ConnectivityComponent implements OnInit {
  @Input() onlineStatusMessage: string;
  @Input() onlineStatus: string;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this.mobileQueryListener);
  }

  nav = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Components',
      path: '/material'
    },
    {
      title: 'Native APIs',
      path: '/native'
    },
    {
      title: 'Http',
      path: '/http'
    }
  ];

  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  @Output() toggleSideNav = new EventEmitter();

  ngOnInit(): void {

  }

  toggleMobileNav(nav: MatSidenav) {
    if (this.mobileQuery.matches) {
      nav.toggle();
    }
  }
}

// <a mat-menu-item color="accent" href="/#/home">Home</a>
// <a mat-menu-item color="accent" href="/#/material">Components</a>
// <a mat-menu-item color="accent" href="/#/native">Native APIs</a>
// <a mat-menu-item color="accent" href="/#/http">HTTP</a>

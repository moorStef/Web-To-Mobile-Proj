import { Component, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
	// tslint:disable: indent
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'web-to-mobile-proj';

	mobileQuery: MediaQueryList;

	private mobileQueryListener: () => void;
	@Output() toggleSideNav = new EventEmitter();

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this.mobileQueryListener);
	}

	toggleMobileNav(nav: MatSidenav) {
		if (this.mobileQuery.matches) {
			nav.toggle();
		}
	}
}




// this.router.events.subscribe((event: Event) => {
// 	switch(true) {
// 		case event instanceof NavigationStart: {
// 			this.loading = true;
// 			break;
// 		}
// 		case event instanceof NavigationEnd:
// 		case event instanceof NavigationCancel:
// 		case event instanceof NavigationError: {
// 			this.loading = false;
// 			break;
// 		}
// 		default: {
// 			break;
// 		}
// 	}

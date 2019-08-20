import { Component, ChangeDetectorRef, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { SwUpdate } from '@angular/service-worker';
import { Observable, Subscription, fromEvent } from 'rxjs';


@Component({
	// tslint:disable: indent
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit, OnDestroy {

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private snackBar: MatSnackBar, private swUpdate: SwUpdate) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this.mobileQueryListener);
	}

	deferredPrompt: Event;

	title = 'web-to-mobile-proj';

	mobileQuery: MediaQueryList;

	durationInSecs = 30;

	private mobileQueryListener: () => void;
	@Output() toggleSideNav = new EventEmitter();


	ngOnDestroy(): void {	}

	ngOnInit() {
		console.log('in ngOnInit');

		console.log('swUpdate Enabled:', this.swUpdate.isEnabled);
		if (this.swUpdate.isEnabled) {
			this.swUpdate.available.subscribe(event => {
				console.log('current version is ', event.current);
				console.log('available version is ', event.available);

				if (confirm('New version available. Load New Version?')) {
					window.location.reload();
				}
			});
			this.swUpdate.activated.subscribe(event => {
				console.log('old version was ', event.previous);
				console.log('new version is ', event.current);
			});
		}
	}

	toggleMobileNav(nav: MatSidenav) {
		if (this.mobileQuery.matches) {
			nav.toggle();
		}
	}
}


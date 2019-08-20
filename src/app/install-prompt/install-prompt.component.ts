import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-install-prompt',
  templateUrl: './install-prompt.component.html',
  styleUrls: ['./install-prompt.component.scss']
})
export class InstallPromptComponent implements OnInit {

  durationInSeconds = 30;

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar() {
    const snackBarRef = this.snackBar.open('Install Application?', 'install', {
      duration: 30000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.installApp();
    });
  }

  installApp(): void {
    console.log('installing app!!');
  }

  ngOnInit() {
  }
}

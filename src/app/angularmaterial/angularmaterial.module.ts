import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

  // tslint:disable-next-line: max-line-length
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatCardModule, MatMenuModule, MatIconModule, MatSelectModule, MatProgressSpinnerModule, MatSnackBarModule, MatProgressBarModule, MatGridListModule, MatTableModule, MatSortModule, MatDialogModule, MatSidenavModule, MatDividerModule, MatToolbarModule, MatChipsModule, MatStepperModule, MatRadioModule, MatTreeModule, MatPaginatorModule, MatTooltipModule, MatListModule, MatTabsModule, MatExpansionModule, MatSlideToggleModule, MatButtonToggleModule} from '@angular/material';


const modules = [
  BrowserAnimationsModule,
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatSelectModule,
  MatFormFieldModule,
  MatDividerModule,
  MatRippleModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatGridListModule,
  MatIconModule,
  MatTableModule,
  MatSortModule,
  MatDialogModule,
  MatSidenavModule,
  MatToolbarModule,
  MatChipsModule,
  MatStepperModule,
  MatRadioModule,
  MatTreeModule,
  MatMenuModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatListModule,
  MatTabsModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatButtonToggleModule
];

@NgModule({
  declarations: [],
  imports: [...modules ],
  exports: [...modules]
})
export class AngularmaterialModule { }

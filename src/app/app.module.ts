import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/** Material Modules */
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent, OperationComponent } from './pages/operation/operation.component';
import { NavbarComponent } from './pages/components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutUsPageComponent,
    OperationComponent,
    NavbarComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatTabsModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCheckboxModule,
    MatFormFieldModule,
    FormsModule,
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

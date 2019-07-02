import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule,
  MatNativeDateModule,MatCheckboxModule,MatFormFieldModule,MatRadioModule,MatListModule
} from '@angular/material';
import {MatDatepickerModule} from  '@angular/material/datepicker';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatDialogModule, 
    MatInputModule, 
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule, 
    MatProgressSpinnerModule,
    FormsModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatRadioModule,
    MatListModule,
    MDBBootstrapModule.forRoot(),
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

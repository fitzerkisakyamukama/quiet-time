import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatNativeDateModule,
          MatDatepickerModule, MatIconModule, MatCheckboxModule,
          MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule,
          MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatCheckboxModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

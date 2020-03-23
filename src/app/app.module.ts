import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatNativeDateModule,
          MatDatepickerModule, MatIconModule, MatCheckboxModule,
          MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule,
          MatListModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSliderModule } from'@angular/material/slider';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/user/manager/manager.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { UserComponent } from './components/user/user/user.component';
import { DailyVerseComponent } from './components/devotion/daily-verse/daily-verse.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    ManagerComponent,
    AdminComponent,
    UserComponent,
    DailyVerseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, MatToolbarModule, MatNativeDateModule,
    MatDatepickerModule, MatIconModule, MatCheckboxModule,
    MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule,
    MatListModule, FormsModule, ReactiveFormsModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

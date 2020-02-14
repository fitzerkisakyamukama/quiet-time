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

import {
         NbThemeModule, NbAlertModule, NbCardModule,
         NbLayoutModule, NbThemeService, NbSidebarModule,
          NbButtonModule, NbMenuModule, NbIconModule,
          NbUserModule,
          NbContextMenuModule, NbSpinnerModule


        } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { RegistrationComponent } from './components/user/registration/registration.component';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ManagerComponent } from './components/user/manager/manager.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { UserComponent } from './components/user/user/user.component';
import { DailyVerseComponent } from './components/devotion/daily-verse/daily-verse.component';
// import { httpInterceptorProviders } from './auth/auth-interceptor';

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
    NbThemeModule.forRoot({ name: 'default'}),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    NbAlertModule, NbCardModule, NbLayoutModule,
    NbSidebarModule, NbButtonModule,NbEvaIconsModule,
    NbEvaIconsModule, NbIconModule,
    NbUserModule, NbSpinnerModule

  ],
  providers: [NbThemeService, NbThemeModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

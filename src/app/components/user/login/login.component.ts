import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';
import { TokenStorageService } from '../../../services/auth/token-storage.service';
import { LoginInfo } from '../../../models/user/login-info';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  private loginInfo: LoginInfo;


  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private router: Router
    ) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getAuthorities();
    }
  }

  onSubmit() {
    console.log(this.form);

    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password
    );

    this.authService.attemptAuth(this.loginInfo).subscribe(
      data => {
        console.log(data)
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUsername(data.username);
        this.tokenStorage.saveAuthorities(data.authorities);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getAuthorities();
        // this.roles = data.authorities
        // this.reloadPage();

        this.router.navigateByUrl('/home');
      }, 
      error => {
        console.log(error);
        this.errorMessage = error.error.reason;
        this.isLoginFailed = true;
      }
    );
  };

  // reloadPage() {
  //   window.location.reload();
  // }
  
}

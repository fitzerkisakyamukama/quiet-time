import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../services/auth/auth.service';
import { SignUpInfo } from '../../../models/user/signup-info';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form: any = {};
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit() {}
  
  onSubmit(){
    console.log(this.form);

    this.signupInfo = new SignUpInfo(
      this.form.firstName,
      this.form.lastName,
      this.form.gender,
      this.form.dateOfBirth,
      this.form.username,
      this.form.email,
      this.form.address,
      this.form.password
    );

    this.authService.signUp(this.signupInfo).subscribe(
      data => {
        console.log(data);
        this.isSignedUp = true;
        this.isSignUpFailed = false;
      }, error => {
        console.log(error);
        this.errorMessage = error.error;
        this.isSignUpFailed = true
      }
    );
  }

}

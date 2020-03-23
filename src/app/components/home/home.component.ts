import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TokenStorageService } from '../../services/auth/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'nb-alert-outline',
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;
  private index: number = 0;
 
  constructor(
    private token: TokenStorageService,
    private router: Router
    ) {}

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    console.log(this.info)
  }

  logout() {
    this.token.signout();
    this.router.navigate(['/login']);
    // window.location.reload();
  }

  // showToast(position, status) {
  //   this.index +=1;
  //   this.toastrService.show(
  //     status || 'Success',
  //     `Toast ${this.index}`,
  //     {position, status}
  //   )
  // }



  onContextItemSelection(title) {
    if(title ==='Logout')
    {
      this.logout();
    } else{
      console.log(title);

    }
  }

}

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TokenStorageService } from '../../services/auth/token-storage.service';
import { ThemeService } from '../../services/design/theme.service';
// import {  NbToastrService} from '@nebular/theme';
import { NbSidebarService, NbMenuService } from '@nebular/theme';
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
  user = [
   { title: 'Profile', icon: 'person-outline'},
   {
      title: 'Logout',
      icon: 'unlock-outline'
   }
  ];
  items = [
    {
      title: 'Profile',
      icon: 'person-outline',
      children : [
        {
          title: 'Change Password',
          icon: 'lock-outline',
          link: "/",
        },
        {
          title: 'Privacy Policy',
          icon: { icon: 'checkmark-outline', pack: 'eva' },
          link: [],
        },
        {
          title: 'Logout',
          icon: 'unlock-outline',
          link: [],
        }

      ],
    },
    {
      title: 'Devotions',
      icon: 'checkmark-square-outline',
       children: [
         {
           title: 'Daily devotion',
           icon: 'sun-outline',
           link: "/dailyVerse",
         },
         {
           title: 'Your devotions',
           icon: 'person-done-outline',
           link: []
         },
         {
           title: 'Create devotion',
          icon: 'plus-outline',
          link: []

        }
       ]
    },
    {
      title: 'Lessons',
      icon: 'cast-outline',
      children: [
        {
          title: 'Lessons from the bible',
          icon: '',
          link: []
        },
        {
          title: 'Lessons from church',
          icon: '',
          link: []
        },
        {
          title: 'Life experience',
          icon: '',
          link: []
        },

      ]
    },
    {
      title: 'Help',
      icon: 'question-mark-outline',
      link: []

    }

  ]

  constructor(
    private token: TokenStorageService,
    private themeService: ThemeService,
    private sidebarService: NbSidebarService,
    private menuService: NbMenuService,
    private router: Router
    ) {
      this.menuService.onItemClick()
      .subscribe((event) => {
          this.onContextItemSelection(event.item.title);

      });
     }

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

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }



  onContextItemSelection(title) {
    if(title ==='Logout')
    {
      this.logout();
    } else{
      console.log(title);

    }
  }

}

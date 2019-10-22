// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header-for-admin',
//   templateUrl: './header-for-admin.component.html',
//   styleUrls: ['./header-for-admin.component.scss']
// })
// export class HeaderForAdminComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-for-admin',
  templateUrl: './header-for-admin.component.html',
  styleUrls: ['./header-for-admin.component.scss']
})
export class HeaderForAdminComponent implements OnInit {
  isOpen = true

  items = [
    { link: '/admin/dashboard', name: 'Dashboard' },
    { link: '/admin/create', name: 'Create' },
  ]

  constructor(
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit() {
  } 

  toggle(){
    this.isOpen = !this.isOpen
  }

  isAuthenticated(){
    return true
  }

  // logout(event: Event){
  //   // console.log('logout', event)
  //   event.preventDefault()
  //   // this.auth.logout()
  //   this.router.navigate(['/admin', 'login'])
  // }
}

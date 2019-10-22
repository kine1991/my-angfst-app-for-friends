// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false
  isAuthenticated = true

  itemsAuthenticated = [
    { link: '/about', name: 'About' },
    { link: '/home', name: 'Home' },
    { link: '/blog', name: 'Blog' },
  ]
  itemsNotAuthenticated = [
    { link: '/signin', name: 'Sign In' },
    { link: '/signup', name: 'Sign Up' },
  ]
  items = [
    { link: '/xxx', name: 'xxx' },
  ]
  
  // auth



  

  constructor(
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.getUserState()
    .subscribe(user => {
      if(user){
        this.items = this.itemsAuthenticated
        this.isAuthenticated = true
      } else {
        this.items = this.itemsNotAuthenticated
        this.isAuthenticated = false
      }
      console.log('u',user)
    })
  }

  logout(){
    this.auth.logout()
  }

  toggle(){
    this.isOpen = ! this.isOpen
  }


}

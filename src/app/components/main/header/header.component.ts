import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

export interface ListMenu {
  link: string;
  name: string;
  icon?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false
  isAuthenticated = true

  itemsAuthenticated: ListMenu[] = [
    { link: '/admin/create-article', name: 'Create Article', icon: 'info' },
    { link: '/signin', name: 'Sign In', icon: '3d_rotation' },
    { link: '/articles', name: 'Articles'},
  ]
  itemsNotAuthenticated: ListMenu[] = [
    { link: '/signin', name: 'Sign In', icon: 'info' },
    { link: '/signup', name: 'Sign Up', icon: 'info' },
  ]
  items: ListMenu[] = [
    { link: '/xxx', name: 'xxx', icon: 'info' },
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
      // console.log('u',user)
    })
  }

  logout(){
    this.auth.logout()
  }

  toggle(){
    this.isOpen = ! this.isOpen
  }


}

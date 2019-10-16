import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.scss']
})
export class Header1Component implements OnInit {

  isOpen = false

  items = [
    { link: '/about', name: 'About' },
    { link: '/home', name: 'Home' },
    { link: '/blog', name: 'Blog' },
  ]

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.isOpen = ! this.isOpen
  }
}

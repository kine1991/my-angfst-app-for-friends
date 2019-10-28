import { Component, OnInit, ComponentFactoryResolver, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fromEvent } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/main/user.model';
import { AuthData } from 'src/app/interface/main/auth-data.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {


  @ViewChild('search', {static: true}) searchRef

  submitted = false
  message: string
  form: FormGroup
  xxx = 'aaa'



  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
    });
  }


  getErrorMessageForEmail() {
    if(this.form.get('email').hasError('required')){
      return 'email is required'
    } else if(this.form.get('email').hasError('email')){
      return 'email is not valid'
    } else {
      return 'unknown'
    }
  }

  getErrorMessageForPassword(){
    if(this.form.get('password').hasError('required')){
      return 'password is required'
    } else if(this.form.get('password').hasError('minlength')){
      return `password should be more or equal then ${this.form.get('password').errors.minlength.requiredLength} you enter ${this.form.get('password').errors.minlength.actualLength} symbol`
    } else if(this.form.get('password').hasError('maxlength')){
      return `password should be less or equal then ${this.form.get('password').errors.maxlength.requiredLength} you enter ${this.form.get('password').errors.maxlength.actualLength} symbol`
    }
    return 'unknown'
  }

  submit(){
    const {email, password} = this.form.value
    this.auth.signIn({email, password})
    .then(x => {
      this.router.navigate(['/'])
    })
  }
  
  signInWithGoogle(){
    // console.log(this.auth.test())
    this.auth.googleSignin()
  }

}

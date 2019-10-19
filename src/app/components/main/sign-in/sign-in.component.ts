import { Component, OnInit, ComponentFactoryResolver, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { fromEvent } from 'rxjs';

import { AuthService } from 'src/app/services/main/auth.service';
import { User } from 'src/app/interface/main/user.model';

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
    this.auth.signIn(this.form.value.email, this.form.value.password)
      
  }
  
  signInWithGoogle(){
    // console.log(this.auth.test())
    // this.auth.test()
    // .subscribe(x => console.log('x', x))



    // .then(x => {
    //   console.log(x)
    // })
    // .subscribe( x => {
    //   console.log('x')
    //   console.log(x)
    // })

    // console.log(this.form.controls.email.value)
    // console.log(this.ccc)
    // console.log(this.searchRef.nativeElement.value)
  }

}


// import { Component, OnInit } from '@angular/core';
// import { Validators, FormControl, FormGroup } from '@angular/forms';
// // import { User } from '../../../shared/interfaces';
// // import { AuthService } from '../../shared/services/auth.service';
// import { Router, ActivatedRoute, Params } from '@angular/router';
// import { AuthService } from 'src/app/services/main/auth.service';
// import { User } from 'src/app/interface/main/user.model';

// @Component({
//   selector: 'app-sign-in',
//   templateUrl: './sign-in.component.html',
//   styleUrls: ['./sign-in.component.scss']
// })
// export class LoginPageComponent implements OnInit {

//   submitted = false
//   message: string

//   form: FormGroup

//   constructor(
//     public auth: AuthService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) { }
//   ngOnInit() {
//     this.route.queryParams.subscribe((params: Params) => {
//       // if(params['loginAgain']){
//       //   this.message = 'Please login again'
//       // } else if (params['authFailed']){
//       //   this.message = 'Session expired'
//       // }
//       // console.log(params['loginAgain'])
//     })
//     this.form = new FormGroup({
//       email: new FormControl('', [Validators.required, Validators.email]),
//       password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
//     });
//   }


  // getErrorMessageForEmail() {
  //   if(this.form.get('email').hasError('required')){
  //     return 'email is required'
  //   } else if(this.form.get('email').hasError('email')){
  //     return 'email is not valid'
  //   } else {
  //     return 'unknown'
  //   }
  // }

  // getErrorMessageForPassword(){
  //   if(this.form.get('password').hasError('required')){
  //     return 'password is required'
  //   } else if(this.form.get('password').hasError('minlength')){
  //     return `password should be more or equal then ${this.form.get('password').errors.minlength.requiredLength} you enter ${this.form.get('password').errors.minlength.actualLength} symbol`
  //   } else if(this.form.get('password').hasError('maxlength')){
  //     return `password should be less or equal then ${this.form.get('password').errors.maxlength.requiredLength} you enter ${this.form.get('password').errors.maxlength.actualLength} symbol`
  //   }
  //   return 'unknown'
  // }

//   submit(){
//     if(this.form.invalid) return 
//     this.submitted = true
//     // const user: User = {
//     //   email: this.form.value.email,
//     //   password: this.form.value.password,
//     // }
//     // // console.log(user)

//     // this.auth.login(user).subscribe(() => {
//     //   this.form.reset()
//     //   this.router.navigate(['/admin', 'dashboard'])
//     //   this.submitted = false
//     // }, () => {
//     //   this.submitted = false
//     // })
//   }
// }

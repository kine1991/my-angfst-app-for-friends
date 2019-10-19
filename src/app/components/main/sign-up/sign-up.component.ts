import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/main/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form: FormGroup

  constructor(
    public auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      passwordConfirm: new FormControl('', [Validators.required, this.checkPasswordsIsMatch.bind(this)]),
    })
  }

  checkPasswordsIsMatch(){
    if(this.form){
      if(this.form.get('password').value === this.form.get('passwordConfirm').value){
        return null
      } 
      return {passwordDoNotMatch: true}
    }
  }

  getErrorMessageForName() {
    if(this.form.get('name').hasError('required')){
      return 'name is required'
    } else if(this.form.get('name').hasError('minlength')){
      return `name should be more or equal then ${this.form.get('name').errors.minlength.requiredLength} you enter ${this.form.get('name').errors.minlength.actualLength} symbol`
    } else if(this.form.get('name').hasError('maxlength')){
      return `name should be less or equal then ${this.form.get('name').errors.maxlength.requiredLength} you enter ${this.form.get('name').errors.maxlength.actualLength} symbol`
    } else {
      return 'unknown'
    }
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
    const {name, email, password} = this.form.value
    this.auth.signUp(name, email, password)
  }

  xx(){
    console.log('123')
  }

}

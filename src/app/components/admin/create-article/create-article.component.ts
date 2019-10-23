import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {

  form: FormGroup
  uid

  constructor(
    public auth: AuthService,
    public firestore: ArticleService
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      author: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]),
      tags: new FormControl([]),
      bodyBrief: new FormControl(''),
      body: new FormControl('', [Validators.required, Validators.minLength(30)]),
    })

    this.auth.user$.subscribe(user => {
      // console.log('user', user)
      if(user){
        this.uid = user.uid
      }else{
        this.uid = null
      }
    })
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
  getErrorMessageForAuthor() {
    if(this.form.get('author').hasError('required')){
      return 'author is required'
    } else if(this.form.get('author').hasError('minlength')){
      return `author should be more or equal then ${this.form.get('author').errors.minlength.requiredLength} you enter ${this.form.get('author').errors.minlength.actualLength} symbol`
    } else if(this.form.get('author').hasError('maxlength')){
      return `author should be less or equal then ${this.form.get('author').errors.maxlength.requiredLength} you enter ${this.form.get('author').errors.maxlength.actualLength} symbol`
    } else {
      return 'unknown'
    }
  }

  // getErrorMessageForBodyBrief(){
  //   if(this.form.get('bodyBrief').hasError('maxlength')){
  //     return `bodyBrief should be less or equal then ${this.form.get('bodyBrief').errors.maxlength.requiredLength} you enter ${this.form.get('bodyBrief').errors.maxlength.actualLength} symbol`
  //   } else {
  //     return false
  //   }
  // }
  getErrorMessageForBody(){
    if(this.form.get('body').hasError('required')){
      return 'body is required'
    } else if(this.form.get('body').hasError('minlength')){
      return `body should be more or equal then ${this.form.get('body').errors.minlength.requiredLength} you enter ${this.form.get('body').errors.minlength.actualLength} symbol`
    } else if(this.form.get('body').hasError('maxlength')){
      return `body should be less or equal then ${this.form.get('body').errors.maxlength.requiredLength} you enter ${this.form.get('body').errors.maxlength.actualLength} symbol`
    } else {
      return 'unknown'
    }
  }

  submit(){
    const data = this.form.value
    data.uid = this.uid
    data.date = Date.now()
    console.log(data)
    this.firestore.createArticle(data)
  }

}

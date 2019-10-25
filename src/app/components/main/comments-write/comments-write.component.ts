import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { delay } from 'rxjs/operators';

import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-comments-write',
  templateUrl: './comments-write.component.html',
  styleUrls: ['./comments-write.component.scss']
})
export class CommentsWriteComponent implements OnInit {

  @Input() articleId: string
  form: FormGroup
  currentUser

  constructor(
    public auth: AuthService,
    private db: CommentService
    // private router: Router,

  ) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.
    // })
    // console.log(this.articleId)

    this.auth.user$.pipe(
      delay(2000)
    ).subscribe(user => {
      this.currentUser = user;
      // console.log('comment', user)
    })
    this.form = new FormGroup({
      comment: new FormControl('')
    });
  }


  submit(){
    const data = {
      // uid: this.currentUser.uid,
      user: this.currentUser,
      articleId: this.articleId,
      ...this.form.value,
      date: Date.now()
    };
    this.db.createComment(data);
    this.form.reset();
    // console.log(data)
    // console.log(this.currentUser)
    // console.log(this.articleId)
    // console.log(this.form.value)
  }
}

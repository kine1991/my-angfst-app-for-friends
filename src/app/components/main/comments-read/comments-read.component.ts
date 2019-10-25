import { Component, OnInit, Input } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments-read',
  templateUrl: './comments-read.component.html',
  styleUrls: ['./comments-read.component.scss']
})
export class CommentsReadComponent implements OnInit {

  @Input() articleId: string
  comments

  constructor(
    public db: CommentService
  ) { }

  ngOnInit() {
    // console.log('articleId', this.articleId)
    this.db.readComments(this.articleId)
    .subscribe(comments => {
      console.log(comments)
      this.comments = comments;
    })
  }

}

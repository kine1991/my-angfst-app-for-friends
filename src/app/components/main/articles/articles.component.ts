import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  posts: Array<any> = []

  constructor(
    private db: ArticleService,
  ) { }

  ngOnInit() {
    this.db.getArticles().subscribe(data => {
      console.log(data)
      this.posts = data
    })
  }

  test(){
    // this.firestore.test
  }
}

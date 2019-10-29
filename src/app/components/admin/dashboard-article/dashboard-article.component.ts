import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { map } from 'rxjs/operators';

export interface PeriodicElement {
  name: string;
  author: string;
  date: string;
}

@Component({
  selector: 'app-dashboard-article',
  templateUrl: './dashboard-article.component.html',
  styleUrls: ['./dashboard-article.component.scss']
})
export class DashboardArticleComponent implements OnInit {

  ELEMENT_DATA: PeriodicElement[] = [

  ];

  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleService.getArticles().pipe(
      map(articles => {
        return articles.map(article => {
          return {
            name: article.name,
            author: article.author,
            date: article.date,
          }
        })
      })
    ).subscribe(article => {
      this.ELEMENT_DATA = article
      console.log(article)
    })
  }

  displayedColumns: string[] = ['name', 'author', 'date'];
  dataSource = this.ELEMENT_DATA;

}

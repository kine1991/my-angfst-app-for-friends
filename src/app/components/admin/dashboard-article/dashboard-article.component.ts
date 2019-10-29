import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { map } from 'rxjs/operators';
import { MatTableDataSource, MatSort } from '@angular/material';

// export interface PeriodicElement {
//   name: string;
//   author: string;
//   date: string;
// }

export interface PeriodicElement {
  id?: any;
  name: string;
  author: string;
  date: string;
}
@Component({
  selector: 'app-dashboard-article',
  templateUrl: './dashboard-article.component.html',
  styleUrls: ['./dashboard-article.component.scss']
})
export class DashboardArticleComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: PeriodicElement[] = [
    // {id: 1, name: 'Hydrogen', author: 'author1', date: 'H'},
    // {id: 2, name: 'Helium', author: 'author1', date: 'He'},
  ];

  displayedColumns: string[] = ['id', 'name', 'author', 'date'];
  dataSource 
  // = new MatTableDataSource(this.ELEMENT_DATA); 
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  constructor(
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    
    this.articleService.getArticles().pipe(
      // map(articles => {
      //   return articles.map(article: PeriodicElement => {
      //     return {
      //       id: article.id,
      //       name: article.name,
      //       author: article.author,
      //       date: article.date,
      //     }
      //   })
      // })
    ).subscribe(article => {
      this.dataSource = new MatTableDataSource(article);
      this.dataSource.sort = this.sort;
      console.log(this.dataSource.filteredData.length)
    })
  }

  applyFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
  }
}





// import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { ArticleService } from 'src/app/services/article.service';
// import { map } from 'rxjs/operators';
// import { MatTableDataSource, MatSort } from '@angular/material';

// export interface PeriodicElement {
//   name: string;
//   author: string;
//   date: string;
// }

// @Component({
//   selector: 'app-dashboard-article',
//   templateUrl: './dashboard-article.component.html',
//   styleUrls: ['./dashboard-article.component.scss']
// })
// export class DashboardArticleComponent implements OnInit, AfterViewInit {

//   ELEMENT_DATA = [];
//   // ELEMENT_DATA: PeriodicElement[] | [] = [];
//   displayedColumns: string[] = ['name', 'author', 'date'];
//   dataSource;

//   @ViewChild(MatSort) sort: MatSort;

  // constructor(
  //   private articleService: ArticleService
  // ) { }

//   ngOnInit() {
    // this.articleService.getArticles().pipe(
    //   map(articles => {
    //     return articles.map(article => {
    //       return {
    //         name: article.name,
    //         author: article.author,
    //         date: article.date,
    //       }
    //     })
    //   })
    // ).subscribe(article => {
    //   this.ELEMENT_DATA = article
    //   this.dataSource = new MatTableDataSource(this.ELEMENT_DATA);
    //   console.log(article)
    // })
//   }

//   ngAfterViewInit() {
//     this.dataSource.sort = this.sort;
//   }

// }

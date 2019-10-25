import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { map, tap, mergeMap, concatMap, scan, toArray, switchMap } from 'rxjs/operators';
import { concat } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  posts

  constructor(
    private afStore: AngularFirestore,
    private router: Router
  ) { }

  async createArticle(data){
    const docRef = this.afStore.collection('articles')
    // const docRef2 = this.afStore.doc('articles/fdfdf').set
    const d = await docRef.add(data)
    console.log('d')
    console.log(d)
  }

  test(){
    console.log('test', this.posts)
  }

  getArticles(){
    let docRef = this.afStore.collection('articles');
    return docRef.get().pipe(
      map(x => x.docs),
      mergeMap(docs => docs),
      map(docs => {
        // console.log('docs', docs)
        return {
          id: docs.id, ...docs.data()
        }
      }),
      toArray()
    )
  }

  getArticle(id){
    let docRef = this.afStore.collection('articles').doc(id)
    return docRef.get().pipe(
      map(doc => {
        return {id: doc.id, ...doc.data()}
      })
    )
  }
}



import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

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
    // docRef.get()
    // this.afStore.doc(`article`).set
  }
}



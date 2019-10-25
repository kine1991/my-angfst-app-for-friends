import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, switchMap } from 'rxjs/operators';
// import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


  constructor(
    private afStore: AngularFirestore,
    // private router: Router
  ) { }

  createComment(data){
    return this.afStore.collection('comments').add(data)
    // .then(x => console.log(x))
    // console.log('create comments', data)
  }
  readComments(articleId) :Observable<any>{
    return this.afStore.collection('comments', ref => ref.where('articleId', '==', articleId)).snapshotChanges()
    .pipe(
      map(snaps => {
        return snaps.map(snap => {
          return {
            id: snap.payload.doc.id,
            ...snap.payload.doc.data()
          }
        })
      }),
      // tap(x => console.log(x))
      // map(data => {
      //   // data[0]
      //   console.log('data', data)
      //   return data
      // })
    )
  }
}

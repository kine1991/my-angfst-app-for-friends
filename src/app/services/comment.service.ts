import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
}

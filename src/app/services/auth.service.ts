import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
// import { switchMap } from 'rxjs/operators';
// import { User } from '../interface/main/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState

    this.afAuth.authState.subscribe((auth) => {
      // console.log(auth)
      // this.authState = auth
    });


    // this.user$ = this.afAuth.authState

    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afStore.doc<User>(`users/${user.uid}`).valueChanges();
    //     } else {
    //       return of(null);
    //     }
    //   })
    // );
  }

  test(): Observable<any>{
    return this.afAuth.authState
  }

  signIn(email, password): Promise<any>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
  }

  async signUp(name, email, password){
    // console.log(name, email, password)
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    return this.updateProfile(credential, {name, age: '22'})
  }

  private updateProfile(credential, additionalData){
    const {user} = credential // console.log(user)
    const data = {
      name: additionalData.name,
      email: user.email, // photoURL: user.photoURL, // phoneNumber: user.phoneNumber,
    }
    const userRef = this.afStore.doc(`users/${user.uid}`)
    return userRef.set(data, { merge: true })
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    // console.log(credential)
    return this.updateUserData(credential);
  }

  getUserState() {
    return this.afAuth.authState;
  }
  // authStateCange(){
  //   return this.afAuth.auth.onAuthStateChanged(userData => {
  //     if(userData){
  //       return userData
  //     } else {
  //       return null
  //     }
  //   })
  //   // return 
  // }

  async logout() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private async updateUserData(credential) {
  const {additionalUserInfo, user} = credential
  // если пользователь новый
  if(additionalUserInfo.isNewUser){
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    console.log('isNewUser')
    const userRef = this.afStore.doc(`users/${user.uid}`)
    return await userRef.set(data, { merge: true })
  }
  console.log('NotisNewUser')
  return user
}

}


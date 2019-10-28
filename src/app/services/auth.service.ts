import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthData } from '../interface/main/auth-data.model';
// import { switchMap } from 'rxjs/operators';
// import { User } from '../interface/main/user.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  user$: Observable<any>;
  isAuth: boolean = true

  constructor(
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private router: Router
  ) {
    this.user$ = this.afAuth.authState.pipe(
      map(user => {
        return {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          phoneNumber: user.phoneNumber,
          photoURL: user.photoURL,
        }
      })
    );
  }


  signIn(authData: AuthData){
    return this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
  }

  async signUp(authData: AuthData){
    // console.log(name, email, password)
    const credential = await this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
    return this.updateProfile(credential, {name: authData.name})
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

  getUser() {
    return this.afAuth.authState.pipe(
      map(user => {
        if(user){
          return {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
          }
        }
      })
    );
  }

  // isAuth(){
  //   return this.afAuth.authState
  // }
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


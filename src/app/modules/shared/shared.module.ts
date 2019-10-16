import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
// import { AngularFireStorageModule } from '@angular/fire/storage';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [], 
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    // AngularFireStorageModule,
    QuillModule.forRoot()
  ],
  exports: [
    HttpClientModule,
    AngularFireModule, 
    AngularFirestoreModule,
    AngularFireAuthModule,
    // AngularFireStorageModule,
    QuillModule,
  ]
})
export class SharedModule { }




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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [], 
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
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
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }




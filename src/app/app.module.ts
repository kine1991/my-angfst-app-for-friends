import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { SharedModule } from './modules/shared/shared.module';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { HeaderComponent } from './components/main/header/header.component';
import { Header1Component } from './components/main/header1/header1.component';
import { RegisterComponent } from './components/main/register/register.component';
import { HomeComponent } from './components/main/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/main/login/login.component';
import { SignInComponent } from './components/main/sign-in/sign-in.component';
import { SignUpComponent } from './components/main/sign-up/sign-up.component';
import { ArticleComponent } from './components/main/article/article.component';
import { ArticlesComponent } from './components/main/articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    Header1Component, 
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    ArticleComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    Header1Component, 
    RegisterComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

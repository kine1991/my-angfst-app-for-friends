import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { SharedModule } from './modules/shared/shared.module';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { HeaderComponent } from './components/main/header/header.component';
import { Header1Component } from './components/main/header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

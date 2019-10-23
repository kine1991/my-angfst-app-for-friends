import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/shared/main-layout/main-layout.component';
import { HomeComponent } from './components/main/home/home.component';
import { RegisterComponent } from './components/main/register/register.component';
import { SignInComponent } from './components/main/sign-in/sign-in.component';
import { SignUpComponent } from './components/main/sign-up/sign-up.component';
import { ArticlesComponent } from './components/main/articles/articles.component';


const routes: Routes = [
  {path: '', component: MainLayoutComponent, children: [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomeComponent},
    {path: 'signin', component: SignInComponent},
    {path: 'signup', component: SignUpComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'articles', component: ArticlesComponent},
  ]},
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'}
];


// const routes: Routes = [
//   {path: '', component: MainLayoutComponent, children: [
//     {path: '', redirectTo: '/', pathMatch: 'full'},
//     {path: '', component: HomePageComponent},
//     {path: 'post/:id', component: PostPageComponent}
//   ]},
//   {path: 'admin', loadChildren: './admin/admin.module#AdminModule'}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

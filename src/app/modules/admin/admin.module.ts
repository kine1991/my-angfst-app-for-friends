import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from '../../components/shared/admin-layout/admin-layout.component';
import { HeaderForAdminComponent } from '../../components/admin/header-for-admin/header-for-admin.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/admin/dashboard/dashboard.component';
import { CreateArticleComponent } from '../../components/admin/create-article/create-article.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { DashboardArticleComponent } from '../../components/admin/dashboard-article/dashboard-article.component';



@NgModule({
  declarations: [
    AdminLayoutComponent, 
    HeaderForAdminComponent,
    DashboardComponent,
    CreateArticleComponent,
    DashboardArticleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/dashboard-article', pathMatch: 'full'},
        {path: 'dashboard', component: DashboardComponent},
        {path: 'dashboard-article', component: DashboardArticleComponent},
        {path: 'create-article', component: CreateArticleComponent, canActivate: [AuthGuard]},

      ]}
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule { }

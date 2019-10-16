import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminLayoutComponent } from '../../components/shared/admin-layout/admin-layout.component';
import { HeaderForAdminComponent } from '../../components/admin/header-for-admin/header-for-admin.component';



@NgModule({
  declarations: [AdminLayoutComponent, HeaderForAdminComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    SharedModule
  ]
})
export class AdminModule { }

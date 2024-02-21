import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Emp1Component } from './emp1/emp1.component';
import { EmployeeRoutingModule } from './employee-routing.module';
import { Emp2Component } from './emp2/emp2.component';



@NgModule({
  declarations: [
    Emp1Component,
    Emp2Component
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }

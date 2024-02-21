import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { Emp1Component } from './emp1/emp1.component';
import { Emp2Component } from './emp2/emp2.component';


const routes: Routes = [

    { path: '', component: Emp1Component  },
    { path: 'emp2', component: Emp2Component  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }

import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TableComponent } from './table/table.component';
import { MyusersComponent } from './myusers/myusers.component';
import { PlaceholderdataComponent } from './placeholderdata/placeholderdata.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { RelativeformComponent } from './relativeform/relativeform.component';
import { EmployeeModule } from './employee/employee.module';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { Common1Component } from './common1/common1.component';
import { Common2Component } from './common2/common2.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:'twoway',component:TwowaybindingComponent},
  { path:'table', component:TableComponent},
  { path:'myusers', component:MyusersComponent},
  { path:'sampledata', component:PlaceholderdataComponent},
  { path:'template', component:TemplatedrivenComponent},
  { path:'relativeform', component:RelativeformComponent},
  { path:'createemp', component:CreateEmpComponent},
  { path:'LazyLoading',loadChildren:()=>import('./employee/employee.module').then(m=>m.EmployeeModule)},

  //{ path:'',redirectTo:'home',pathMatch:'full'},

  { path:'com1',component:Common1Component},
  { path:'com2',component:Common2Component},
  { path:'goback',component:BackbuttonComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

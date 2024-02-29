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
import { AdminComponent } from './guard/admin/admin.component';
import { HostuserComponent } from './guard/hostuser/hostuser.component';
import { authGuardGuard } from './auth-guard.guard';
import { ParentComponent } from './canActiveChild/parent/parent.component';
import { Child1Component } from './canActiveChild/child1/child1.component';
import { Child2Component } from './canActiveChild/child2/child2.component';
import { childrouteGuardGuard } from './canActiveChild/childroute-guard.guard';
import { deactivateGuardGuard } from './canActiveChild/deactivate-guard.guard';

const routes: Routes = [
  { path:'user', component: UserComponent },

  { path:'home', component: HomeComponent },
  { path:'about', component: AboutComponent },
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

  { path:'admin',component:AdminComponent,canActivate:[authGuardGuard]},
  { path:'hostuser',component:HostuserComponent},

  // { path:'parent',component:ParentComponent},
  // { path:'parent/c1',component:Child1Component},
  // { path:'parent/c2',component:Child2Component},

  { path:'parent',
    children:[
      {
        path:'',
        component:ParentComponent,
        canDeactivate:[deactivateGuardGuard]
      },
      {
        path:'',
        canActivateChild:[childrouteGuardGuard],
        children:[
          {path:'c1',component:Child1Component},
          {path:'c2',component:Child2Component}
        ]
      }
    ]

},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

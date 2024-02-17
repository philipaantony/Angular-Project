import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TableComponent } from './table/table.component';
import { MyusersComponent } from './myusers/myusers.component';
import { PlaceholderdataComponent } from './placeholderdata/placeholderdata.component';

const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path:'twoway',component:TwowaybindingComponent},
  { path:'table', component:TableComponent},
  { path:'myusers', component:MyusersComponent},
  { path:'sampledata', component:PlaceholderdataComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

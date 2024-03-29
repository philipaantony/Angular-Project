import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

 
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TableComponent } from './table/table.component';
import { MyusersComponent } from './myusers/myusers.component';
import { PlaceholderdataComponent } from './placeholderdata/placeholderdata.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { RelativeformComponent } from './relativeform/relativeform.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { Common1Component } from './common1/common1.component';
import { Common2Component } from './common2/common2.component';
import { BackbuttonComponent } from './backbutton/backbutton.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { AdminComponent } from './guard/admin/admin.component';
import { HostuserComponent } from './guard/hostuser/hostuser.component';
import { ParentComponent } from './canActiveChild/parent/parent.component';
import { Child1Component } from './canActiveChild/child1/child1.component';
import { Child2Component } from './canActiveChild/child2/child2.component';





@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    AboutComponent,
    TwowaybindingComponent,
    TableComponent,
    MyusersComponent,
    PlaceholderdataComponent,
    TemplatedrivenComponent,
    RelativeformComponent,
    CreateEmpComponent,
    Common1Component,
    Common2Component,
    BackbuttonComponent,
    FooterComponent,
    AdminComponent,
    HostuserComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
 
   
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

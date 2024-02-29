import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  constructor(private router:Router,private currentroute:ActivatedRoute){}

  idDeact = true;

  
  onRouteChange(params:any){
    this.router.navigate([params],{relativeTo:this.currentroute})
    //alert(params)
    //alert(this.currentroute)

  }
}

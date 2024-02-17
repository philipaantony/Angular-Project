import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-myusers',
  templateUrl: './myusers.component.html',
  styleUrl: './myusers.component.css'
})
export class MyusersComponent {

  constructor(private getapi: ApicallService) { }
  userdata: any[]=[];
  ngOnInit() {
    this.getapi.getusers().subscribe(res => {
      
      this.userdata = res;
      console.log(this.userdata); 
    });
  }

}

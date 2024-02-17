import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-placeholderdata',
  templateUrl: './placeholderdata.component.html',
  styleUrl: './placeholderdata.component.css'
})
export class PlaceholderdataComponent {
  constructor(private getapi: ApicallService) { }

  postarray: any[]=[];
  ngOnInit() {
    this.getapi.getdata().subscribe(res => {
      
      this.postarray = res;
      console.log(this.postarray); 
    });
  }
}

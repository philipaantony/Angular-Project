import { Component } from '@angular/core';
import { ServiceExampleService } from '../../service-example.service';

@Component({
  selector: 'app-emp1',
  templateUrl: './emp1.component.html',
  styleUrl: './emp1.component.css'
})
export class Emp1Component {

  constructor(private serv:ServiceExampleService){
    
  }
  public emp1Array: any[] = [];
  
  ngOnInit(){
    this.emp1Array = this.serv.getDistrict();
    console.log(this.emp1Array);
    
    
  }
}

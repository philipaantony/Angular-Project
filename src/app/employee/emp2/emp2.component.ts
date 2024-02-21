import { Component } from '@angular/core';
import { ServiceExampleService } from '../../service-example.service';

@Component({
  selector: 'app-emp2',
  templateUrl: './emp2.component.html',
  styleUrl: './emp2.component.css'
})
export class Emp2Component {


  constructor(private serv:ServiceExampleService){}

  public emp1Array: any[] = [];
  
  ngOnInit(){
    this.emp1Array = this.serv.getDistrict();
    console.log(this.emp1Array);
    
    
  }
}

import { Component } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-create-emp',
  templateUrl: './create-emp.component.html',
  styleUrl: './create-emp.component.css'
})
export class CreateEmpComponent {

  constructor(private empService:ServiceExampleService){}

  employees: any[] = [];

  data ={
    firstname:'',
    lastname:'',
    age:null,
    salary:null
  }


  ngOnInit() {
    this.getEmployees();
  }

  private getEmployees() {
    this.empService.getallEmployee().subscribe(
      (data) => { this.employees = data;},
      (error) => { console.error('Error fetching employees:', error); }
    );
  }


  onSubmit(){
    console.log("Submmited Data :",this.data);
    this.empService.postEmployee(this.data).subscribe((res)=>{
      console.log(res);
      alert(res.message);
      this.getEmployees();
    });
  }

}

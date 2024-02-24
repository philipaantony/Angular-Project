import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-relativeform',
  templateUrl: './relativeform.component.html',
  styleUrl: './relativeform.component.css'
})
export class RelativeformComponent {
  constructor(private fb:FormBuilder){}

  submit=false

  registerdata = this.fb.group({
    firstname:['',Validators.required],
    lastname:['',Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{3}-\d{4}$/)]],
    email: ['', [Validators.required, Validators.email]]
  })

  //  
  get f()
  {
    return this.registerdata.controls
  }
  onSubmit()
  {
    this.submit=true
    console.log("form submmited")
    console.log(this.f);
    console.log(this.registerdata.value);
    
    
  }
}

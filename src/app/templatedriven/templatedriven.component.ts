import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrl: './templatedriven.component.css'
})
export class TemplatedrivenComponent {

  data={
    fName:'',
    lname:'',
    phoneNumber:''
  }

  onSubmit() {
    alert(JSON.stringify(this.data))
    console.log('Form submitted');
  }
}

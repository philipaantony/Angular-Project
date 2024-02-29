import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {



  public myname ="Philip Antony"
  public count = 0;
  public wish =""
  public name ='';
  public email ='';
  public age = '';
  fullName: string = ""; 
  
  functionCall(greeting: string)
  {
    console.log("hey here",greeting);
    this.wish = greeting;
    
  }
  incriment()
  {
    this.count = this.count+1;
  }
  decriment()
  {
    this.count = this.count-1;
  }

  // Method to handle form submission
  onSubmit(): void {
    console.log('Submitted values:', { name: this.name, email: this.email, age: this.age });
  }
}

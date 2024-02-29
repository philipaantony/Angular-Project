import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {

  constructor(private router:Router){}
  goback() {
    this.router.navigateByUrl('/parent');
  }

}

import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  
  constructor(private router: Router) {}

  goback() {
    this.router.navigateByUrl('/home');
  }

  fruits = [
    { name: 'Apple', price: 211.5 },
    { name: 'Banana', price: 111.5 },
    { name: 'Orange', price: 300 },
    { name: 'Grapes', price: 28 },
    { name: 'Strawberry', price: 49 },
    { name: 'Pineapple', price: 300.5 },
    { name: 'Watermelon', price: 59 },
    { name: 'Kiwi', price: 200.2 },
  ];

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrl: './twowaybinding.component.css'
})
export class TwowaybindingComponent {
public count = 0
public result = ''
public is_hidden = true;
clear()
{
  this.is_hidden = true;
}

checkevenorodd()
{
  this.is_hidden = false;
  if(this.count%2 ===0)
  {
    this.result = 'Number is Even'
  }
  else
  {
    this.result = 'Number is Odd'
  }
  
}
}

import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-backbutton',
  templateUrl: './backbutton.component.html',
  styleUrl: './backbutton.component.css'
})
export class BackbuttonComponent {

  title='GoBack'
  mycolor="black"
  @Input() params:any

  ngOnInit()
  {
    console.log('hai');
    console.log(this.params);
    if(this.params)
    {
      this.title = this.params
    }
  }
}

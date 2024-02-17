import { Component, OnInit } from '@angular/core';
import { ApicallService } from './apicall.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected styleUrl to styleUrls
})
export class AppComponent implements OnInit {
 

  title = 'testAng';
 

  ngOnInit() {
   
  }
}

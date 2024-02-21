import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {

  constructor() { }

  public myarray =[
    {id:1, name:"Kottayam"},
    {id:2, name:"Kollam"},
    {id:3, name:"Thrissur"},
    {id:4, name:"Alapuzha"},
  ]

  getDistrict(){
    return <any>(this.myarray)
  }
}

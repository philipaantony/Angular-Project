import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {

  constructor(private http:HttpClient) { }


  postEmployee(data:any)
  {
    return this.http.post<any>('http://localhost:5000/api/addemp',data)
  }

  getallEmployee()
  {
    return this.http.get<any>('http://localhost:5000/api/getallemps')
  }


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

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http:HttpClient) { }

  getusers()
  {
    return this.http.get<any>('http://localhost:5000/api/getalluser')
  }
  getdata()
  {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}

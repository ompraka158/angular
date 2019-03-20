import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  
  getEmployees(){
    return [
      {"id":1 , "name": "Om Prakash", "age": 23},
      {"id":2 , "name": "Gaurav Singh", "age": 23},
      {"id":3 , "name": "Deepak Pahuja", "age": 23},
      {"id":4 , "name": "Srishty Rawat", "age": 23}
    ];
  }
}

/*
purpose of our service file will be to communicate with an API via the Angular 6 HTTP Client.
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // added HTTP Client 

@Injectable({
  providedIn: 'root'
})
export class DataService {
/*
Med constructor and added getUSers() during HTTP Client 
*/
 constructor(private http: HttpClient) { }

  getUsers()
  {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
}

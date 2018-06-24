import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
/*
In the constructor, we're creating an instance of our service. Then, within the lifecycle hook ngOnInit() (this runs when the component loads), we're calling our getUsers() method and subscribing to it. Inside, we're binding our users$ object to the result returned by the API.
*/
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    )
  }

}

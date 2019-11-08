import { Component, OnInit } from '@angular/core';
import { NotTwitterAPIService } from '../not-twitter-api.service';
import UserModel from '../models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  //using name to do a simple test if getUsersByName(String) works
  name = 'String'
  users: UserModel[];

  getUserByName(): void{
   this.NotTwitterApi.getUsersByName().then(users => this.users = users);
  }


  constructor(private NotTwitterApi: NotTwitterAPIService) { }

  ngOnInit() {
    //different approach from guy in video
    // this.NotTwitterApi.getUsersByName().subscribe(users => this.users = users);
  }

}

import { Component, OnInit } from '@angular/core';
import { NotTwitterAPIService } from '../../not-twitter-api.service';
import UserModel from '../../models/user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  //using name to do a simple test if getUsersByName(String) works
  name = '';
  id = 0;

  users: UserModel[];
  iduser: UserModel;

  getUserByName(name:string): void{
   this.NotTwitterApi.getUsersByName(name).then(users => this.users = users);
  }
  getUserById(id:number): void{
    this.NotTwitterApi.getUsersById(id).then(user => this.iduser = user);
   }

  constructor(private NotTwitterApi: NotTwitterAPIService) { }

  ngOnInit() {
    //different approach from guy in video
    // this.NotTwitterApi.getUsersByName().subscribe(users => this.users = users);
    }
  
  }


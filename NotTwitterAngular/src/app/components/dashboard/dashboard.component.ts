import { Component, OnInit } from '@angular/core';
import PostModel from '../../models/post-model';
import { NotTwitterAPIService } from '../../not-twitter-api.service';
import UserModel from '../../models/user-model';
import FriendModel from 'src/app/models/friend-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: UserModel = null;
  friends: FriendModel[];
  posts: PostModel[] = null;

  loaded: boolean = false;
  constructor(
    private NotTwitterService:NotTwitterAPIService
  ) { 

  }

  ngOnInit() {
    this.loadDash();
    console.log("done loading");
  }

  get user(){
    return this.NotTwitterService.user;
  }

  loadDash(){
    this.NotTwitterService.getFriendPosts(this.user.id).then(posts=>this.posts = posts);
    this.loadUser();
    //this.loadFriends();
    this.loaded = true;
    console.log(`HELLO THIS IS THE FIRST FRIEND'S NAME MAYBE`);
  }
  loadUser(){
    console.log(`loading user: ${this.user.id}`);

    return this.NotTwitterService.getUsersById(this.user.id).then(u => this.friends = u.friends);
  }
  loadFriends(){
    this.friends = this.user.friends;
  }

}

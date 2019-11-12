import { Component, OnInit, Input } from '@angular/core';
import PostModel from '../../models/post-model';
import { NotTwitterAPIService } from '../../not-twitter-api.service';
import UserModel from '../../models/user-model';
import FriendModel from 'src/app/models/friend-model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  friends: FriendModel[];
  posts: PostModel[];

  loading: boolean = false;
  userSubscription:Subscription;
  loggedInUser: UserModel = this.notTwitApi.user;

  constructor(
    private notTwitApi:NotTwitterAPIService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.userSubscription = this.notTwitApi.userChanged.subscribe( newUser => 
      {
        this.loggedInUser = newUser;
        console.log("user loaded!!!! from dashboard");
        //this.notTwitApi.getUsersById(newUser.id).then(u => {this.friends = u.friends}).then(()=>{console.log("friends loaded - dashboard")});
        this.notTwitApi.getFriendPosts(this.loggedInUser.id)
          .then(posts => {
            this.posts = posts;
            console.log(this.posts);
          })
          .then(()=>{this.loading=false; console.log(`loaded posts - dashboard ${this.loggedInUser.id}`)});
        //this.getLoginUser();
      }
    );

  }

  // ngOnChanges(){
  //   this.loadUser();
  // }

  // getLoginUser(){
  //   this.notTwitApi.user$.subscribe( data => {
  //     this.loggedInUser = data; // populate the loggedinuser with the user data
  //     console.log("logged in");
  //   });
  // }

  // loadDash(){
  //   if (this.user != null){
  //     this.notTwitApi.getFriendPosts(this.user.id)
  //       .then(posts => this.posts = posts)
  //       .then(() => this.loading = true);

  //     this.loadUser();
  //     console.log(`HELLO THIS IS THE FIRST FRIEND'S NAME MAYBE`);
  //   }
  // }

  // loadUser(){
  //   console.log(`loading user: ${this.user.id}`);

  //   return this.notTwitApi.getUsersById(this.user.id).then(u => this.friends = u.friends);
  // }

  // loadFriends(){
  //   this.friends = this.user.friends;
  // }

}

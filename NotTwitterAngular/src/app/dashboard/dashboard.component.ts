import { Component, OnInit } from '@angular/core';
import PostModel from '../models/post-model';
import { NotTwitterAPIService } from '../not-twitter-api.service';
import UserModel from '../models/user-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: UserModel;

  posts: PostModel[] = null;

  loaded: boolean = false;
  constructor(
    private NotTwitterService:NotTwitterAPIService
  ) { 

  }

  ngOnInit() {
    this.loadDash();
  }

  loadDash(){
    this.currentUser = this.NotTwitterService.user;
    this.NotTwitterService.getFriendPosts(this.currentUser.id).then(posts=>this.posts = posts);
    this.loaded = true;
  }

}

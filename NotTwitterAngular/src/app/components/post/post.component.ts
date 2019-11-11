import { Component, OnInit, Input } from '@angular/core';
import CommentCreate from 'src/app/models/comment-create-model';
import CommentModel from 'src/app/models/comment-model';

import PostModel from 'src/app/models/post-model'
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import UserModel from 'src/app/models/user-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  author:UserModel = null;
  currentUser:UserModel = null;
  myPostId:number = null;

  constructor(private NotTwitterService:NotTwitterAPIService) { }

  @Input() model:PostModel;

  ngOnInit() {
    console.log("ngOnInit fired");
    this.loadPost();
  }


  loadPost():void{
    this.NotTwitterService.getUsersById(this.model.userId).then(user=>{this.author = user; console.log("user,get")});
    this.currentUser = this.NotTwitterService.user;
    this.myPostId = this.model.postId;
    console.log("done loading");

  }

  addComment(content:string):void{
    let newComment:CommentCreate = {
      content: content,
      postId: this.myPostId,
      authorId: this.NotTwitterService.user.id

    }
    this.NotTwitterService.createComment(newComment);
    console.log(`added comment by ${this.currentUser.username}`);
    console.log(`for postid: ${this.myPostId}`);
  }



}

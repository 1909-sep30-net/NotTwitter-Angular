import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private NotTwitterService:NotTwitterAPIService) { }

  ngOnInit() {
    this.loadPost();
  }

  @Input() model:PostModel;

  loadPost():void{
    this.NotTwitterService.getUsersById(this.model.userId).then(user=>this.author = user);

  }



}

import { Component, OnInit } from '@angular/core';
import CommentModel from 'src/app/models/comment-model';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private NotTwitterService:NotTwitterAPIService) { }

  ngOnInit() {

  }

  comments:CommentModel[];

}

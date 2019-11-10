import { Component, OnInit, Input } from '@angular/core';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import CommentModel from 'src/app/models/comment-model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  getAuthorName(){
  }
  
  constructor(
    private apiService: NotTwitterAPIService
  ) { }

  ngOnInit() {
  }

  @Input()model: CommentModel;

}

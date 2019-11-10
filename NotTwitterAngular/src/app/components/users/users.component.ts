import { Component, OnInit } from '@angular/core';
import { NotTwitterAPIService } from '../../not-twitter-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:any;

  constructor(public rest:NotTwitterAPIService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
}

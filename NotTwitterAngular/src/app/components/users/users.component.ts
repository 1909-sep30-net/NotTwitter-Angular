import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest/rest.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user:any;

  constructor(public rest:RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.rest.getUserByUsername(this.route.snapshot.params['name']).subscribe((data: {}) => {
      console.log(data);
      this.user = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import {RestService} from '../../rest/rest.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private apiService: RestService
    ) { }
    get user() {
      console.log(this.apiService.user);
      return this.apiService.user;
    }

  ngOnInit() {
  }

}
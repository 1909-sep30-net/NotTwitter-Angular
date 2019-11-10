import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NotTwitterAPIService} from '../../not-twitter-api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor(
    public auth: AuthService,
    private apiService: NotTwitterAPIService
    ) { }
    get user() {
      console.log(this.apiService.user);
      return this.apiService.user;
    }

    userId(){
      return this.apiService.user.id;
    }

  ngOnInit() {
  }

}
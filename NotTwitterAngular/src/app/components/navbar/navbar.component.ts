import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NotTwitterAPIService} from '../../not-twitter-api.service';
import navbarItem from 'src/app/models/navbar-item-model';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  //selectedPage: navbarItem;
  pages: navbarItem[] = [
    {title: "Dashboard"},
    {title: "Write a Post"},
    {title: "Friends"},
    {title: "Settings"},
    {title: "Log Out"},
  ]

  constructor(
    public auth: AuthService,
    private NotTwitterApi: NotTwitterAPIService
    ) { }
    get user() {
      //console.log(this.NotTwitterApi.user);
      return this.NotTwitterApi.user;
    }

    selectedPage:number;
    SelectPage(page:number){
      this.selectedPage = page;
      console.log(this.selectedPage);
    }


  ngOnInit() {
  }

}
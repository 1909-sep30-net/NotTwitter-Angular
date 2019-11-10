import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { NotTwitterAPIService} from '../../not-twitter-api.service';
import navbarItem from 'src/app/models/navbar-item-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  selectedPage: navbarItem;
  pages: navbarItem[] = [
    {title: "Dashboard"},
    {title: "Write a Post"},
    {title: "Friends"},
    {title: "Settings"},
    {title: "Log Out"},
  ]

  constructor(
    public auth: AuthService,
    private apiService: NotTwitterAPIService
    ) { }

  get user() {
    //console.log(this.apiService.user);
    return this.apiService.user;
  }

  onSelect(page:navbarItem){
    this.selectedPage = page;
    //console.log(this.selectedPage.title);
  }

  ngOnInit() {
  }

}
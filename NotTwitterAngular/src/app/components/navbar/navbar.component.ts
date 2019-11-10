import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
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
import { Component, OnInit, Input } from '@angular/core';
import UserModel from 'src/app/models/user-model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()model:UserModel;

}

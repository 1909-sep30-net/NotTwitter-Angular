import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import UserModel from 'src/app/models/user-model';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;
  let modelInfo = {
    firstName: "phil",
    lastName: "man",
    id: 1,
    username: "content",
    password: "asasadad",
    email: "asdasd@asdasd.com",
    gender: 1,
    friends: []
  }

  beforeEach(async(() => {
    const twitSpy = jasmine.createSpyObj('NotTwitterAPIService',['getUsersById']);
    twitSpy.getUsersById.and.returnValue(Promise.resolve([]));

    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[
        {provide: NotTwitterAPIService, useValue: twitSpy }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    component.model = modelInfo;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

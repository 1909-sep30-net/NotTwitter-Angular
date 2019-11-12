import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestComponent } from './friend-request.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import { Subscription, Subject } from 'rxjs';

describe('FriendRequestComponent', () => {
  let component: FriendRequestComponent;
  let fixture: ComponentFixture<FriendRequestComponent>;
  let mockNotTwit = {
    userChanged: new Subject(),
    
  };
   

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRequestComponent ],
      imports:[HttpClientTestingModule, RouterTestingModule],
      providers:[
        {provide: NotTwitterAPIService, useValue: mockNotTwit}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const subscrip: Subscription = new Subscription();
    component.userSubscription = subscrip;
  });

  // it('should create', () => {
  //   //let x = fixture.debugElement.;
  //   expect(component).toBeNull();
  // });
  // it('should be null', () => {
  //   expect(component).toBeTruthy();
  // });

});

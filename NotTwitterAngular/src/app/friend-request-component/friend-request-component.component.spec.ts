import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRequestComponentComponent } from './friend-request-component.component';

describe('FriendRequestComponentComponent', () => {
  let component: FriendRequestComponentComponent;
  let fixture: ComponentFixture<FriendRequestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendRequestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

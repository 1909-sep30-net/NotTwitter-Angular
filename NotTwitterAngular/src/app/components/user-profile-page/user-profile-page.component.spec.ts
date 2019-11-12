import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePageComponent } from './user-profile-page.component';
import { PostComponent } from '../post/post.component';

describe('UserProfilePageComponent', () => {
  let component: UserProfilePageComponent;
  let fixture: ComponentFixture<UserProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePageComponent, PostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

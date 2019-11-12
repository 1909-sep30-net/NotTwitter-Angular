import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { PostComponent } from '../post/post.component';
import { CommentComponent } from '../comment/comment.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, PostComponent, CommentComponent],
      imports:[ReactiveFormsModule, FormsModule, HttpClientTestingModule, RouterTestingModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers:[NotTwitterAPIService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

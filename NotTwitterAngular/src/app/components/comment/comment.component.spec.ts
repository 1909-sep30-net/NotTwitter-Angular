import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CommentComponent } from './comment.component';
import { HttpClient } from 'selenium-webdriver/http';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { UserComponent } from '../user/user.component';
import CommentModel from '../../models/comment-model';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let service: NotTwitterAPIService;
  let injector: TestBed;
  let httpMock: HttpTestingController;
  let drift;
  let driftInfo = {
    authorId: 1,
    commentId: 1,
    postId: 1,
    timeSent: Date.prototype,
    content: "content"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [NotTwitterAPIService]
    })
    .compileComponents();
    injector = getTestBed();
    service = injector.get(NotTwitterAPIService);
    httpMock = injector.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    drift = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
    component.model = driftInfo;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

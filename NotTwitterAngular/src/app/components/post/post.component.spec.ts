import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotTwitterAPIService } from '../../not-twitter-api.service';
import { PostComponent } from './post.component';
import { CommentComponent } from '../comment/comment.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Subject } from 'rxjs';


describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;
  let service: NotTwitterAPIService;
  // let mockNotTwit = {
  //   userChanged: new Subject(), 
  // };

  beforeEach(async(() => {
    const twitSpy = jasmine.createSpyObj('NotTwitterAPIService',['getUsersByName','userChanged']);
    // get users by name can return an empty array
    twitSpy.getUsersByName.and.returnValue(Promise.resolve([]));
    //twitSpy.userChanged.and.returnValue(new Subject());

    TestBed.configureTestingModule({
      declarations: [ PostComponent, CommentComponent ],
      imports:[ReactiveFormsModule, FormsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: NotTwitterAPIService, useValue: twitSpy},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    service = TestBed.get(NotTwitterAPIService);
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () =>{
  //   expect(component).toBeTruthy();
  // })

  // it('should create NotTwitService', () => {
  //   const service: NotTwitterAPIService = TestBed.get(NotTwitterAPIService);
  //   expect(service).toBeTruthy();
  // });

  // it(`should have false loading`, () => {
  //   const fixture = TestBed.createComponent(PostComponent);
  //   const comp = fixture.debugElement.componentInstance;
  //   expect(comp.loggedInUser).toBeNull;
  // });
});

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { PostComponentComponent } from './post-component/post-component.component';
import { CommentComponentComponent } from './comment-component/comment-component.component';
import { FriendRequestComponentComponent } from './friend-request-component/friend-request-component.component';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
// /import { FridgeComponent } from './fridge/fridge.component';
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponentComponent,
    CommentComponentComponent,
    FriendRequestComponentComponent
    //add component here (fridgecomponent)
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

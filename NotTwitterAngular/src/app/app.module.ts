import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule } from '@angular/material';



import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { FriendRequestComponent } from './components/friend-request/friend-request.component';
import { CommentComponent } from './components/comment/comment.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListFriendsComponent } from './components/list-friends/list-friends.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';



// /import { FridgeComponent } from './fridge/fridge.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UsersComponent,

    UserComponent,
    PostComponent,
    CommentComponent,
    FriendRequestComponent,
    ListFriendsComponent,
    ListPostsComponent,
    UserProfileComponent,
    DashboardComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,

    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input } from '@angular/core';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import FriendRequestModel from 'src/app/models/friendrequest-model';
import UserModel from 'src/app/models/user-model';
import StatusNames from 'src/app/models/status-names';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-friend-request',
  templateUrl: './friend-request.component.html',
  styleUrls: ['./friend-request.component.css']
})
export class FriendRequestComponent implements OnInit {
  //get the users friends, display their names, display friend requests and friend requests time sent , friend request status
  //go to profile, remove friend
  //it needs to handle accepting or declining requests.
  
  user : UserModel;
  userName: UserModel;
  requestUserModel: UserModel;
  loggedInUser : UserModel=null;
  userSubscription : Subscription;

  statusNames: StatusNames [] = [];
  requestStatus: number [] = [];
  userFriendRequests: UserModel[] = [];
  
  id = this.NotTwitterAPI.user.id;
  request: FriendRequestModel = {senderId : 0, receiverId : 0, status: 0};
  friendRequests: FriendRequestModel [];

  //friendRequestStatus = ['Pending Response', 'You are now friends!', 'Declined'];


  getUserFriends(){
    this.NotTwitterAPI.getUsersById(this.loggedInUser.id).then(user => this.user = user);
    
  }

  getUserFriendRequests(){
    this.NotTwitterAPI.getFriendRequest(this.loggedInUser.id).then(friendRequest => this.friendRequests = friendRequest)
    .then( () => { 
      for (let entry of this.friendRequests) { 
        this.NotTwitterAPI.getUsersById(entry.senderId)
          .then(newUser => this.requestUserModel = newUser)
          .then( () => this.statusNames.push({name: this.requestUserModel.firstName + " " + this.requestUserModel.lastName, status: entry.status, id: entry.senderId}));
      } 
    }
    );
  }

  acceptFriendRequest(senderId:number){
    this.request.receiverId = this.NotTwitterAPI.user.id;
    this.request.senderId = senderId;
    this.NotTwitterAPI.acceptRequest(this.request);
  }

  declineFriendRequest(senderId: number){
    this.request.receiverId = this.NotTwitterAPI.user.id;
    this.request.senderId = senderId;
    this.NotTwitterAPI.declineRequest(this.request);
  }
  
  constructor(private NotTwitterAPI: NotTwitterAPIService) { }

  ngOnInit() {
    this.userSubscription = this.NotTwitterAPI.userChanged.subscribe( newUser => 
      {
        this.loggedInUser = newUser;
        this.getUserFriendRequests();
        this.getUserFriends();
      }
    );

  }
}
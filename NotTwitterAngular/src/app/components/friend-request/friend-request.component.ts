import { Component, OnInit, Input } from '@angular/core';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import FriendRequestModel from 'src/app/models/friendrequest-model';
import UserModel from 'src/app/models/user-model';

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
  requestUserModel: UserModel;
  display: true;

  requestStatus: number [] = [];
  userFriendRequests: UserModel[] = [];
  id = this.NotTwitterAPI.user.id;

  request: FriendRequestModel = {senderId : 0, receiverId : 0, status: 0};
  friendRequests: FriendRequestModel [];

  //friendRequestStatus = ['Pending Response', 'You are now friends!', 'Declined'];


  getUserFriends(){
    this.NotTwitterAPI.getUsersById(this.id).then(user => this.user = user);
  }

  getUserFriendRequests(){

    this.NotTwitterAPI.getFriendRequest(this.id).then(friendRequest => this.friendRequests = friendRequest)
    .then( () => { 
      for (let entry of this.friendRequests) { 
        this.NotTwitterAPI.getUsersById(entry.senderId)
          .then(newUser => this.requestUserModel = newUser)
          .then( () => this.requestStatus.push(entry.status))
          .then( () => this.userFriendRequests.push(this.requestUserModel));
      } 
    }
    );
  }

  //A friend request shows when it is pending (not accepted or declined) -> give it some value
  //A friend request does not show when it is accepted -> change its value and it stops displaying
  //A friend request does not show when it is decline -> change its value and it stops displaying

  acceptFriendRequest(senderId:number){
    this.request.receiverId = this.NotTwitterAPI.user.id;
    this.request.senderId = senderId;
    this.NotTwitterAPI.acceptRequest(this.request)
    .then( () => this.request.status = 1);
  }

  declineFriendRequest(senderId: number){
    this.request.receiverId = this.NotTwitterAPI.user.id;
    this.request.senderId = senderId;
    this.NotTwitterAPI.declineRequest(this.request)
    .then ( () => this.request.status = 1);
  }
  
  constructor(private NotTwitterAPI: NotTwitterAPIService) { }

  ngOnInit() {
    this.getUserFriendRequests();
    this.getUserFriends();
  }
}

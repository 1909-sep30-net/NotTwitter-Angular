import { Component, OnInit } from '@angular/core';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import FriendRequestModel from 'src/app/models/friendrequest-model';
import UserModel from 'src/app/models/user-model';
import FriendModel from 'src/app/models/friend-model';
import { NavbarComponent } from '../navbar/navbar.component';

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
  userFriendRequests: UserModel[];


  friends: FriendModel[];
  friendRequests: FriendRequestModel [];
  friendRequestStatus = ['pending', 'accepted', 'declined'];

  getUserFriends(){
    const id = this.NotTwitterAPI.user.id;
    this.NotTwitterAPI.getUsersById(id).then(user => this.user = user);
  }

  getUserFriendRequests(){
    const id = this.NotTwitterAPI.user.id;
    this.NotTwitterAPI.getFriendRequest(id).then(friendRequest => this.friendRequests = friendRequest);
    //^ will return an array of friendRequests {sender id, receiver id}, now I need to find sender Id with api
    //and display their names.
    for(let friends of this.friendRequests){
      //for each sender id we got from getFriendRequests, use getUsersById(sender.id) and push it onto the userFriend[]
      this.NotTwitterAPI.getUsersById(friends.senderId).then(friendModel => this.userFriendRequests.push(friendModel));
      //after that, in html I need to display just the name properties of such users in the array
    }
  }



  acceptFriendRequest(friendRequest:FriendRequestModel){
    this.NotTwitterAPI.acceptRequest(friendRequest);
  }

  declineFriendRequest(friendRequest:FriendRequestModel){
    this.NotTwitterAPI.declineRequest(friendRequest);
  }


  constructor(private NotTwitterAPI: NotTwitterAPIService) { }

  ngOnInit() {
  }

}

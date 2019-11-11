import { Component, OnInit, Input } from '@angular/core';
import { NotTwitterAPIService } from 'src/app/not-twitter-api.service';
import FriendRequestModel from 'src/app/models/friendrequest-model';
import UserModel from 'src/app/models/user-model';
import FriendModel from 'src/app/models/friend-model';

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
  //id = 0;

  friends: FriendModel[];
  friendRequests: FriendRequestModel [] = [];
  friendRequestStatus = ['Pending Response', 'accepted', 'declined'];

  @Input()model:UserModel;

  get User(){
    return this.NotTwitterAPI.user;
  }

  getUserFriends(){
    // due to freezing bug calling stuff a bunch of times, I'll comment this out for now. However this implementation takes user id that we log in with
    // const id = this.NotTwitterAPI.user.id;
    this.NotTwitterAPI.getUsersById(this.model.id).then(user => this.user = user);
    // this.NotTwitterAPI.getUsersById(this.User.id).then(user => this.user = user);
    // this.friends = this.NotTwitterAPI.user.friends;
    // console.log(this.friends);
  }

  getUserFriendRequests(){
    // due to freezing bug calling stuff a bunch of times, I'll comment this out for now. However this implementation takes user id that we log in with
    // const id = this.NotTwitterAPI.user.id;
    // this.NotTwitterAPI.getFriendRequest(id).then(friendRequest => this.friendRequests = friendRequest);

    this.NotTwitterAPI.getFriendRequest(this.User.id).then(friendRequest => this.friendRequests = friendRequest)
    
    //^ will return an array of friendRequests {sender id, receiver id}, now I need to find sender Id with api
    //and display their names.

    // for(let entry of this.friendRequests){
    // //for each sender id we got from getFriendRequests, use getUsersById(sender.id) and push it onto the userFriend[]

    //   this.NotTwitterAPI.getUsersById(entry.senderId).then(friendModel => this.userFriendRequests.push(friendModel));
    //  // after that, in html I need to display just the name properties of such users that are inside the array
    // }
  }

  //attempt to do it by implementing logic in a different method
  getNamesFromRequests(requests:FriendRequestModel[]){
    for(let entry of requests){
      //for each sender id we got from getFriendRequests, use getUsersById(sender.id) and push it onto the userFriend[]
      this.NotTwitterAPI.getUsersById(entry.senderId).then(userModel => this.userFriendRequests.push(userModel));
      //after that, in html I need to display just the name properties of such users that are inside the array
    }
  }

  acceptFriendRequest(id: number){
    this.NotTwitterAPI.getFriendRequest(id).then(friendRequest => this.friendRequests = friendRequest);
    //this.NotTwitterAPI.acceptRequest(friendRequest);
  }

  declineFriendRequest(friendRequest:FriendRequestModel){
    this.NotTwitterAPI.declineRequest(friendRequest);
  }

  constructor(private NotTwitterAPI: NotTwitterAPIService) { }

  ngOnInit() {

    this.getUserFriends();
    //this.getUserFriendRequests();
  }

}

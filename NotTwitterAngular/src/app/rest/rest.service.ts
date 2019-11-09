import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import {Users} from '../model/user/users';
import {UserCreate} from '../model/user/userCreate';
import { AuthService } from '../auth.service';


@Injectable({
  providedIn: 'root'
})

export class RestService {
  user: Users = null;

  userEndpoint:string = environment.notTwitterBaseUrl;

  constructor(
    private httpClient : HttpClient,
    auth: AuthService
    ) {
      auth.userProfile$.subscribe(data =>{
         if(data){
          this.getUserByEmail(data.email).catch((err: HttpErrorResponse) => {
            if (err.status === 404) {
              // user does not exist, create
              return this.createUser({ email: data.email, 
                firstname: data.firstname,
                lastname: data.lastname, 
                gender: data.gender,
                username:data.username,
                friends:[]});
            } else {
              throw err;
            }
          }).then(apiUser => {
            this.user = apiUser;
          });
         } 
      });
      
    }
    getUserByEmail(email: string): Promise<Users> {
      const url = `${this.userEndpoint}/api/user/email/${email}`;
      return this.httpClient.get<Users>(url).toPromise();
    }
    createUser(user: UserCreate): Promise<Users> {
      const url = `${this.userEndpoint}/api/user`;
      return this.httpClient.post<Users>(url, user).toPromise();
    }
}



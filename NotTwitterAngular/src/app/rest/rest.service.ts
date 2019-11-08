import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

import {Users} from '../model/users';


@Injectable({
  providedIn: 'root'
})

export class RestService {
  userEndpoint:string = environment.notTwitterBaseUrl;

  constructor(private httpClient : HttpClient) {}
    //just an example--> don't care about logic
    getUserByUsername(username:string):Observable<Users> {
      return this.httpClient.get<Users>(
          this.userEndpoint + '/api/user/name/'+username
      );
}

}

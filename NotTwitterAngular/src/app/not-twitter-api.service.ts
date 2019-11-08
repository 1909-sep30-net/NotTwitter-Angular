import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import UserModel from './models/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotTwitterAPIService {

  constructor(private httpClient: HttpClient) { }

  getUsersByName(name:string): Promise<UserModel[]>{
    const url = `${environment.notTwitterApiBaseUrl}/api/User/name/${name}`;
    return this.httpClient.get<UserModel[]>(url).toPromise();

    // Different approach to setting parameters into http (method header: getUsersByName():Observable<any>)
    // let params1 = new HttpParams().set("name", "String");
    // return this.httpClient.get("http://localhost:44381/api/User/name", {params:params1});
  }
}

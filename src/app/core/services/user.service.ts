import { Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly urlUser = environment.apiUrl + '/user'

  constructor(private readonly htpp: HttpClient) { }


  registerUser(body: User){
    return this.htpp.post<User>(this.urlUser, body, { withCredentials: true})
  }

  // getUser(){
  //   return this.htpp.get(this.urlUser)
  // }

}

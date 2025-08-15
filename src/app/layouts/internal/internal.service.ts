import { effect, Injectable, signal } from '@angular/core';
import { User } from '../../shared/models/User';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  private readonly url = environment.apiUrl;

  constructor(private readonly http: HttpClient) {
  }


  getLoggedUser(){
    return this.http.get<User>(this.url + '/user/me', { withCredentials: true })
  }

}

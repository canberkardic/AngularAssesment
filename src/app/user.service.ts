import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from '../environments/environment';
import { IUser } from './models/IUser';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _httpClient: HttpClient
  ) { }
  
  selectedUser : IUser;
  
  getAllUsers() {
    return this._httpClient.get<IUser[]>(apiUrl);
  }

}

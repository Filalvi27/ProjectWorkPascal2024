import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';
import { UserDetail } from '../models/UserDetail';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private service:HttpClient) { }

  getAll() : Observable<User[]>
  {
    return this.service.get<User[]>('https://jsonplaceholder.typicode.com/users')
  }

  getOne(id:number | string)
  {
    return this.service.get<UserDetail>(`https://jsonplaceholder.typicode.com/users/${id}`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Observable } from 'rxjs';
import { User } from '../types';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(url) as Observable<T>;
  }

  getUsers = (): Observable<User> => {
    return this.get('https://jsonplaceholder.typicode.com/users');
  };

  getPosts = (userId: any): Observable<any> => {
    return this.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
    );
  };

  getComments = (postId: any): Observable<any> => {
    return this.get(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    );
  };
}

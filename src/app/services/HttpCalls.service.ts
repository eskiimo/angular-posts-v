import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class HttpCalls {
  constructor() {}

  async getUsers(): Promise<any> {
    try {
      const { data } = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async getUserPost(id: Number): Promise<any> {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?userId=${id}`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

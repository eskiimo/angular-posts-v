import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpCalls } from '../services/httpCalls.service';
import { User } from '../models';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent {
  @Input() user!: User;
  @Output() userChange = new EventEmitter<User>();

  listOfUsers: Array<User> = [];

  constructor(private HttpCalls: HttpCalls) {}

  async fetchUsers(): Promise<void> {
    try {
      this.listOfUsers = await this.HttpCalls.getUsers();
      console.log('users', this.listOfUsers); // Handle the response as needed
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }

  async ngOnInit(): Promise<void> {
    await this.fetchUsers();
  }

  setUserId = (id: any) => {
    this.user.id = id;
    this.userChange.emit(this.user);
  };
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  users: any;
  selectedId: any;
  selectedUserName: string = '';

  ngOnInit() {
    this.apiService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  changeId(item: any) {
    this.selectedId = item.id;
    this.selectedUserName = item.name;
  }
}

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
  selectedUser: any = {};

  ngOnInit() {
    this.apiService.getUsers().subscribe((users: any) => {
      const usersWithPic = users?.map((element: any, index: number) => {
        return {
          ...element,
          profilePic: 'https://picsum.photos/id/' + index + 5 + '/400/300',
        };
      });
      this.users = usersWithPic;
    });
  }

  changeId(item: any) {
    this.selectedId = item.id;
    this.selectedUserName = item.name;
    this.selectedUser = item;
  }
}

import { Component, Input, OnChanges } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.sass'],
})
export class PostsComponent implements OnChanges {
  constructor(private apiSevice: ApiService) {}

  @Input() selectedId!: Number;
  @Input() selectedUserName!: string;
  @Input() selectedUser!: any;

  posts: any;

  ngOnChanges() {
    this.selectedId &&
      this.apiSevice.getPosts(this.selectedId).subscribe((posts) => {
        this.posts = posts;
      });
    console.log(this.selectedUser);
  }
}

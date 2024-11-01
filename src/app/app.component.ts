import { Component } from '@angular/core';
import { Post, User } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'voda';
  user: User = {};
  post: Post = { title: 'title of post', body: 'body of post' };
}

import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpCalls } from '../services/httpCalls.service';
import { Post, User } from '../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit, OnChanges {
  @Input() post!: Post;
  @Input() user!: User;

  postData: { title: string; content: string; imageUrl: string } | null = null;

  constructor(private route: ActivatedRoute, private HttpCalls: HttpCalls) {}

  async getPost(id: any): Promise<void> {
    console.log('calling');
    try {
      const data = await this.HttpCalls.getUserPost(id);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  async ngOnInit(): Promise<void> {
    console.log(this.user?.id, 'ddd'); // Use optional chaining to avoid undefined error
    await this.getPost(this.user.id);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && changes['user'].currentValue) {
      console.log('User ID changed to:', this.user.id);
      this.getPost(this.user.id); // Call to get the post based on the new user ID
    }
  }
}

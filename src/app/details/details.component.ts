import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass'],
})
export class DetailsComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  @Input() postDetails!: any;
  @Input() selectedUserName!: string;

  comments: any[] = [];
  isShowComments = true;

  ngOnInit() {
    this.getComments();
  }

  getComments = () => {
    this.apiService.getComments(this.postDetails.id).subscribe((comments) => {
      this.comments = comments;
    });
  };

  toggleComments() {
    this.isShowComments = !this.isShowComments;
  }
}

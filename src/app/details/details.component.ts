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
  @Input() selectedUser!: any;

  comments: any[] = [];
  isShowComments = false;
  isTextExpanded = false;

  ngOnInit() {
    this.getComments();
    console.log(this.selectedUser);
  }

  getComments = () => {
    this.apiService.getComments(this.postDetails.id).subscribe((comments) => {
      this.comments = comments;
    });
  };

  toggleComments() {
    this.isShowComments = !this.isShowComments;
  }
  toggleText() {
    this.isTextExpanded = !this.isTextExpanded;
  }
}

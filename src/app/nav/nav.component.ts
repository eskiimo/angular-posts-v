import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass'],
})
export class NavComponent {
  @Input() users!: any;
  @Input() selectedId!: Number;
  @Input() selectedUserName!: string;
  @Output() idChanged = new EventEmitter<Number>();

  setUserId = (id: any, name: string) => {
    this.selectedId = id;
    this.selectedUserName = name;
    this.idChanged.emit(this.selectedId);
  };
}

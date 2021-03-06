import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-card-item',
  templateUrl: './user-card-item.component.html',
  styleUrls: ['./user-card-item.component.css']
})
export class UserCardItemComponent implements OnInit {

  @Input() public user: User;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeCard(user) {
    this.remove.emit(user);
  }

}

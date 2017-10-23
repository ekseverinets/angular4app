import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css'],
})

export class UserCardListComponent implements OnInit {

  @Input() users;

  public selectedUser: User;

  constructor() { }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  removeFromArray(user) {
    console.log(user);
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i] === user) {
        this.users.splice(i, 1);
      }
    }
  }

  ngOnInit() {
  }

}

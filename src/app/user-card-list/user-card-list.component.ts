import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-user-card-list',
  templateUrl: './user-card-list.component.html',
  styleUrls: ['./user-card-list.component.css'],
})

export class UserCardListComponent implements OnInit {

  public selectedUser: User;
  public users;

  constructor(private _userService: UserService) { }

  onSelect(user: User) {
    this.selectedUser = user;
  }

  ngOnInit() {
    this.users = this._userService.getAll();
  }

  removeFromUsers(user: User) {
    this._userService.remove(user);
    this.users = this._userService.getAll();
  }

  addToUsers(name: string, role: string) {
    if (!name) {
      return;
    }
    const user = {
      name,
      role
    };
    this._userService.add(user);
    this.users = this._userService.getAll();
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'Users';
  public users = USERS;

}

const USERS: User[] = [
  {
    name: 'Inna Corman',
    role: 'Project Manager'
  },
  {
    name: 'Vincent Porter',
    role: 'Front-end developer'
  },
  {
    name: 'Irina Nils',
    role: 'HR manager'
  },
  {
    name: 'Peter Sun',
    role: 'Java specialist'
  },
  {
    name: 'Ann Monic',
    role: 'UI developer'
  }
];

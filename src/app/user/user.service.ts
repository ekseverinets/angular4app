export class UserService {

  private USERS: User[] = [
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

  constructor() { }

  public getAll() {
    return this.USERS;
  }

  public remove(user: User) {
    console.log(user);
    for (let i = 0; i < this.USERS.length; i++) {
      if (this.USERS[i] === user) {
        this.USERS.splice(i, 1);
      }
    }
  }

  public add(user: User) {
    this.USERS.push(user);
  }


}

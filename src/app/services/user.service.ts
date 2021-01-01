import { Injectable } from '@angular/core';
import { User } from '../classes/User';

@Injectable()

export class UserService{
  users: Array<User> = [
    {
      id:1,
      name: 'Tiburon1',
      lastname: 'Tib',
      email: 'Tiburon.com',
      fiscalcode: '123456789213456',
      provincia: 'Torino',
      phone: '1235467890',
      age: 28
    },
    {
      id: 2,
      name: 'Tiburon2',
      lastname: 'Tib',
      email: 'Tiburon.com',
      fiscalcode: '123456789213456',
      provincia: 'Torino',
      phone: '1235467890',
      age: 28
    },
    {
      id: 3,
      name: 'Tiburon3',
      lastname: 'Tib',
      email: 'Tiburon.com',
      fiscalcode: '123456789213456',
      provincia: 'Torino',
      phone: '1235467890',
      age: 28
    }
  ]

  constructor() {

  }

  getUsers() {
    return this.users;
  }

  deleteUser(user: { id: number; name: string; lastname: string; email: string; fiscalcode: string; provincia: string; phone: string; age: number; }) {
    let index = this.users.indexOf(user);
    if (index >= 0) this.users.splice(index, 1)
  }
}

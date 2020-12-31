import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector:'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']

})

export class UsersComponent implements OnInit {
  title = 'Users';
  users: { name: string; lastname: string; email: string; fiscalcode: string; provincia: string; phone: string; age: number; }[] | undefined;

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user: { name: any; }) {
    alert(user.name)
  }
}

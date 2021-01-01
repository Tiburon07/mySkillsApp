import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../classes/User';
import { UserService } from '../services/user.service';

@Component({
  //inputs:['user:user-data'],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user!: User;
  @Output('onDeletedUser') userDeleted = new EventEmitter();
  @Output('onSelectedUser') selectedUser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    //this.userService.deleteUser(this.user)
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.selectedUser.emit(this.user);
  }

}

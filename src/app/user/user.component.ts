import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users/user.service';

@Component({
  //inputs:['user:user-data'],
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input('user-data') user: any;
  @Output('onDeletedUser') userDeleted = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  deleteUser() {
    //this.userService.deleteUser(this.user)
    this.userDeleted.emit(this.user);
  }

}

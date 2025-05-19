import { Component, Inject } from '@angular/core';
import { USER_Token } from 'src/app/app.module';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(@Inject(USER_Token)private userService:UserService){

  }
userList = this.userService.getAllUser();
showUserDetail(user:User){
  this.userService.showUserDetail(user)
}
}

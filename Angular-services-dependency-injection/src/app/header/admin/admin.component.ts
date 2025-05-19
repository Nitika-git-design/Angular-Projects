import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  // providers:[UserService]
})
export class AdminComponent {
constructor(private userService:UserService){

}
name:string='';
gender:string = 'Male';
subType:string='Yearly';
status:string = 'Active';

createNewUSer(){
  this.userService.createNewUser(this.name,this.gender,this.subType,this.status);
}
}

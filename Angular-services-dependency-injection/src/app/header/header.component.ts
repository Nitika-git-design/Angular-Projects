import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  selectedTab:string = 'Home';
  AdminClicked(){
    this.selectedTab = 'Admin';
  }
  HomeClicked(){
    this.selectedTab = 'Home';
  }
  onSubscribe(){
//add user to the Database

//send email to the user with the subscription details

//Allow the user to access the services
alert("Thank you for subscribing.You can access the services now")

  }
}

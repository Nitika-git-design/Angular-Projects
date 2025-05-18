import { Component } from '@angular/core';
import { subscribtion } from '../service/subscribtion.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[subscribtion]
})
export class HeaderComponent {
  constructor(private subService:subscribtion){

  }
  selectedTab:string = 'Home';
  AdminClicked(){
    this.selectedTab = 'Admin';
  }
  HomeClicked(){
    this.selectedTab = 'Home';
  }
  onSubscribe(){
   this.subService.onSubscribeClicked('Monthly');
  }
}

import { Component } from '@angular/core';
import { subscribtion } from 'src/app/service/subscribtion.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
  providers:[subscribtion]
})
export class SideBarComponent {
  constructor(private subService:subscribtion){

  }
  
  onSubscribe(){
    this.subService.onSubscribeClicked('Quarterly');
  }
}

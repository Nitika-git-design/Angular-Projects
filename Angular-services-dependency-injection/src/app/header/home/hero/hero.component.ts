import { Component } from '@angular/core';
import { subscribtion } from 'src/app/service/subscribtion.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  //what to provide
})
export class HeroComponent {
  //how to provide Dependency
  constructor(private subService:subscribtion){

  }
  
  onSubscribe(){
   this.subService.onSubscribeClicked('Yearly');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
inputVal :string = 'Hello World';
logChange(){
  console.log('focus has changed');
  
}
}

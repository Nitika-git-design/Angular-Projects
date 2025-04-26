import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
title:string = "Example";
@Input() message:string = "Hello";
constructor(){
  console.log("Demo Component Constructor is called");
  //when is constructor is called ,by that time,none of the input properties are updated and available to use
  //hence the result of the below lines of code will not be updated.
  console.log(this.title);
  console.log(this.message);
}
}

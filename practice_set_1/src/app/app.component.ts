import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice_set_1';
  
  currentDate = new Date();
  name ='Nitika';
  // let age = 26
  ngOnInit(){
  let name ='Nitika';
  let age = 26
  console.log(`My name is ${name} and I am ${age} years old`);
  }
  
 }



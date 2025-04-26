import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){
  console.log("App Component Constructor is called");
  }
  title = 'Angular-LifeCycleHooks';
  inputVal:string;
  destroy:boolean = false;
  ngAfterViewInit(){
    console.log("ngAfterViewInit is called from parent Component");
  
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called from parent Component");
  
  }
  onBtnClicked(inputE1:HTMLInputElement){
    this.inputVal = inputE1.value;

  }
  DestroyComponent(){
    this.destroy = !this.destroy;
  }
  
}

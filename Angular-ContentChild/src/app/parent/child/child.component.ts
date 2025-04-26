import { Component, ContentChild, ElementRef } from '@angular/core';
import { TestComponent } from 'src/app/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paraGraphE1: ElementRef;
  @ContentChild(TestComponent) testEl: TestComponent;

  styleElment(){
    console.log(this.paraGraphE1);
    console.log(this.testEl);
    
  }
}

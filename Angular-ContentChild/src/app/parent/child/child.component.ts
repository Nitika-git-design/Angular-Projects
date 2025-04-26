import { Component, ContentChild, ContentChildren, ElementRef, QueryList } from '@angular/core';
import { TestComponent } from 'src/app/parent/test/test.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @ContentChild('para') paraGraphE1: ElementRef;
  @ContentChild(TestComponent) testEl: TestComponent;
  @ContentChildren('para') paraAll:QueryList<ElementRef>;
  @ContentChildren(TestComponent) testAll:QueryList<TestComponent>;

  styleElment(){
    console.log(this.paraGraphE1.nativeElement);
    console.log(this.testEl);
    this.paraAll.forEach((e1)=>{
      console.log(e1.nativeElement);
    })  ;
    this.testAll.forEach((test =>{
     console.log(test);
     
    }))  
  }
}

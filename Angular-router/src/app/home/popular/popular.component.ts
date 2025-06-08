import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent {
 router:Router = inject(Router)

  navigateToCourses(){
   this.router.navigateByUrl('Course');
  }
}

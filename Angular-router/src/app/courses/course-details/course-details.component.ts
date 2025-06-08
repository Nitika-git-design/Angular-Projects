import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/Services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
selectedCourse:string;
courseId:number;
courseService:CourseService = inject(CourseService);
activateRoute:ActivatedRoute = inject(ActivatedRoute);
ngOnInit(){
  // this.courseId = this.activateRoute.snapshot.params[('id')];
  this.courseId = +this.activateRoute.snapshot.paramMap.get('id');
  console.log(this.activateRoute.snapshot.paramMap.get('id'));
}

}

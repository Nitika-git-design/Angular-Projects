import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { BannerComponent } from './home/banner/banner.component';
import { PopularComponent } from './home/popular/popular.component';
import { TestimonyComponent } from './home/testimony/testimony.component';
import { ServicesComponent } from './home/services/services.component';
import { ContactUsComponent } from './home/contact-us/contact-us.component';
import { CourseDetailsComponent } from './courses/course-details/course-details.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CourseService } from './Services/course.service';

const routes:Routes=[
  // {path:'' , redirectTo:'Home',pathMatch:'full'},
  {path:'' ,component:HomeComponent},
  {path:'Home' ,component:HomeComponent},
  {path:'About' ,component:AboutComponent},
  {path:'Contact' ,component:ContactComponent},
  {path:'Course' ,component:CoursesComponent},
  {path:'Course/Course/:id' ,component:CourseDetailsComponent},
  {path:'**' ,component:NotFoundComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  
 }

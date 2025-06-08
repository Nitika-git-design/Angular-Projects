import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    CoursesComponent,
    BannerComponent,
    PopularComponent,
    TestimonyComponent,
    ServicesComponent,
    ContactUsComponent,
    CourseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

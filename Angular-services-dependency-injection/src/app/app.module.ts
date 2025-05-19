import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './header/admin/admin.component';
import { HomeComponent } from './header/home/home.component';
import { SideBarComponent } from './header/home/side-bar/side-bar.component';
import { HeroComponent } from './header/home/hero/hero.component';
import { UserDetailsComponent } from './header/admin/user-details/user-details.component';
import { subscribtion } from './service/subscribtion.service';
import { UserListComponent } from './header/admin/user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { loggerService } from './service/logger.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    SideBarComponent,
    HeroComponent,
    UserDetailsComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [subscribtion,UserService,loggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

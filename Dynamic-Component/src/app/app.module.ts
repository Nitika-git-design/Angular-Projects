import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { RouterModule } from '@angular/router';
import { UserService } from './Services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ConfirmDeleteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }

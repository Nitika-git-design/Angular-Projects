import { NgModule } from "@angular/core";
import { CreateTaskComponent } from "./create-task/create-task.component";
import { TaskDetailsComponent } from "./task-details/task-details.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "../utility/loader/loader.component";
import { SharedModule } from "../shared.module";

@NgModule({
    declarations:[
      DashboardComponent,
      CreateTaskComponent,
      TaskDetailsComponent,
    ],
    imports:[
        CommonModule,
        RouterModule,
        FormsModule,
        SharedModule
    ],
    exports:[ 
      CreateTaskComponent,
      TaskDetailsComponent,
      DashboardComponent,
      SharedModule
    ],
    providers:[]
})
export class dashboardModule{

}
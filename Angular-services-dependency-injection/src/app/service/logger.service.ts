import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class loggerService{
  logMessage(name:string,status:string){
    alert(`A new User with ${name} and ${status} is added`);
    
  }
}
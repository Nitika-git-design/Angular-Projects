import { Injectable } from "@angular/core";

@Injectable()
export class loggerService{
  logMessage(name:string,status:string){
    console.log(`A new User with ${name} and ${status} is added`);
    
  }
}
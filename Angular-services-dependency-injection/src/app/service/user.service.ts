import { Injectable } from "@angular/core";
import { User } from "../Models/user";
import { loggerService } from "./logger.service";
@Injectable()
export class UserService{
    user:User[]=[new User('steve','Male','Monthly','Active'),
        new User('nitika','Female','Quarterly','Expired')
    ];

    constructor(private logger:loggerService){

    }

getAllUser(){
    return this.user;
}
createNewUser(name:string,gender:string,subType:string,status:string){
    let user = new User(name,gender,subType,status);
    this.user.push(user);
    // let logger = new loggerService();
    this.logger.logMessage(name,status);
}
}
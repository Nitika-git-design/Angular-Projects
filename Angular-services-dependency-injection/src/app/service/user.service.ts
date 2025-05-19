import { User } from "../Models/user";

export class UserService{
    user:User[]=[new User('steve','Male','Monthly','Active'),
        new User('nitika','Female','Quarterly','Expired')
    ];

getAllUser(){
    return this.user;
}
createNewUser(name:string,gender:string,subType:string,status:string){
    let user = new User(name,gender,subType,status);
    this.user.push(user);
}
}
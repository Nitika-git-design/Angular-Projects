import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template-Driven-Forms';
  firstName :string ='';
  lastName:string='';
  emailAddress:string='';
  dob:string = '';
  @ViewChild('registerForm') form:NgForm;
  FormSubmitted(){
    console.log(this.form);
    console.log(this.form.value.firstName);
    console.log(this.form.controls['firstName'].value);
    this.form.reset();
  }
  generateUsername(){
    let username = '';
    if(this.firstName.length >= 3){
       username += this.firstName.slice(0,3);
    }
    else{
      username += this.firstName;
    }
    if(this.lastName.length >= 3){
      username += this.lastName.slice(0,3);
   }
   else{
     username += this.lastName;
   }

    username = username.toLowerCase();
    console.log(username);
    this.form.value.username = username;
    console.log(this.form.value.username);
    // this.form.setValue({
    //   DOB: this.form.value.DOB,
    //   firstName: this.form.value.firstName,
    //   address: 
    //   {add1: this.form.value.address.add1, 
    //     add2: this.form.value.address.add2, 
    //     country: this.form.value.address.country, 
    //     city: this.form.value.address.city,
    //     region: this.form.value.address.region, 
    //     postal:this.form.value.address.postal
    //   },
    //   email: this.form.value.email,
    //   gender: this.form.value.gender,
    //   lastName: this.form.value.lastName,
    //   phone: this.form.value.phone,
    //   username: username
    // })

    this.form.form.patchValue({
      username :username
    })
  }
}

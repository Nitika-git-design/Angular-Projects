import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Reactive-form';
  reactiveForm:FormGroup;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      firstName :new FormControl(null,Validators.required),
      lastName :new FormControl(null,Validators.required),
      email :new FormControl(null,[Validators.required,Validators.email]),
      username :new FormControl(null),
      dob :new FormControl(null),
      gender :new FormControl('Male'),
      address:new FormGroup({
      street:new FormControl(null,Validators.required),
      city:new FormControl(null,Validators.required),
      country :new FormControl('India',Validators.required),
      region :new FormControl(null),
      postal :new FormControl(null,Validators.required),
      // skills:new FormArray([
      //   new FormControl(null),
      //   new FormControl(null),
      //   new FormControl(null)
      // ])
       })
    })
  }
  onFormSubmit(){
    console.log(this.reactiveForm);
    
  }
}

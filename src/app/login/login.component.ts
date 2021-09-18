import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   public LoginForm = this.formBuilder.group (
     {
       userName:['',[Validators.email, Validators.required]],
       password:['',Validators.required]
     }
   )

  constructor( private formBuilder:FormBuilder, private service:UserService) {

   }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log("on submit");
    let userName = this.LoginForm.controls["userName"].value;
    let password = this.LoginForm.controls["password"].value;
    this.service.login(userName,password).subscribe((data)=>
    {
       console.log("Response"+data)
    },error=>
    {
      console.log("Response",error)
    })
  }

}

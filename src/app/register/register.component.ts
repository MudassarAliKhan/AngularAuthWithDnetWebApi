import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public RegisterForm = this.formBuilder.group (
    {
      name:['',[Validators.required]],
      accountType:['',Validators.required],
      phoneNo:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      Password:['',Validators.required],
      shopName:['',Validators.required],
      businessTye:['',Validators.required],
      role:['',Validators.required]
    }
  )

  constructor( private formBuilder:FormBuilder, private service:UserService) {

  }

 ngOnInit(): void {
 }

 onSubmit()
 {
   console.log("on submit");
    let name = this.RegisterForm.controls["name"].value;
    let accountType = this.RegisterForm.controls["accountType"].value;
    let phoneNo = this.RegisterForm.controls["phoneNo"].value;
    let userName = this.RegisterForm.controls["userName"].value;
    let email = this.RegisterForm.controls["email"].value;
    let Password = this.RegisterForm.controls["Password"].value;
    let shopName = this.RegisterForm.controls["shopName"].value;
    let businessTye = this.RegisterForm.controls["businessTye"].value;
    let role = this.RegisterForm.controls["role"].value;
    this.service.register(name,accountType,phoneNo,userName,email,Password,shopName,businessTye,role).subscribe((data)=>
    {
       console.log("Response"+data)
    },error=>
    {
      console.log("Response",error)
    })
 }

}
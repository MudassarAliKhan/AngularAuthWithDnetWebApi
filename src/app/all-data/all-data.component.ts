import { UserService } from 'src/Services/user.service';
import { Component, OnInit } from '@angular/core';
import { weatherdata } from '../Models/weatherdata';
@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  public userlist:weatherdata[] =[];
  constructor(private userservice:UserService) {
   }
  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.userservice.getallData().subscribe((data:any)=>
    {
     this.userlist= data;
    });
  }
}


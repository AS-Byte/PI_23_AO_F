import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/Models/user/UserModel';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-side-bar-back',
  templateUrl: './side-bar-back.component.html',
  styleUrls: ['./side-bar-back.component.css']
})
export class SideBarBackComponent implements OnInit {

administrateur:UserModel=new UserModel()
mail!:any;
  constructor(private userservice:UserService) { }

  ngOnInit(): void {
this.mail=sessionStorage.getItem('email');
this.userservice.getUserByEmail(this.mail).subscribe(

  (data:UserModel)=>{this.administrateur=data;
  console.log(this.administrateur);}
);



  }

}

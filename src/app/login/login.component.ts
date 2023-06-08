import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../Models/user/UserModel';
import { UserService } from '../Services/user.service';
import { ContratModel } from '../Models/contrat/ContratModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user!:UserModel;
  listusers!:UserModel[];
   role!:string;
   mail:string='hanen.azzouz@esprit.tn';


  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    
  
  }

    verifData(t:any){
      
           this.mail=t.email;
           let pass=t.password;

         


    this.userService.getUserByEmail(t.email).subscribe(
    (data:UserModel)=>{this.user=data;



      console.log(this.user.role.typeRole);
    this.role=this.user.role.typeRole;

    sessionStorage.setItem('email',this.mail);

    if(this.role=="ADMIN"){

      this.router.navigate(['/admin/']);
     }
     if(this.role=="CLIENT")

     {

      this.router.navigate(['//']);}


      if(this.role=="PROPRIETAIRE")

      {
 
       this.router.navigate(['//']);}


    });
    

   

      

          
       

       }

}

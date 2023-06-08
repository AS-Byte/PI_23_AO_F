import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../Models/user/UserModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http :HttpClient) { }


  getUserById(id:any){
    return this.http.get<UserModel>("http://localhost:8080/immobilier/getUserById/"+id);
  
   }
   
   getUserByEmail(email:any){
    return this.http.get<UserModel>("http://localhost:8080/immobilier/getUserByEmail/"+email);
  
   }
   



   
}

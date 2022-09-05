import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { userObj } from 'src/app/Interfaces/user';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userObj: userObj;
  constructor( 
    private route: ActivatedRoute,
    private title: Title,
    ) {
    this.userObj = new userObj();
    this.route.params.subscribe((res)=> {
      this.userObj.userId = res['id'];
    });
   }

  ngOnInit(): void {

    const allUsers = localStorage.getItem('userList');
    if(allUsers !== null){
      const userList = JSON.parse(allUsers);
      const currentUser = userList.find((m: any) => m.userId == this.userObj.userId);
      if(currentUser !== undefined) {
        this.userObj.userName = currentUser.userId;
        this.userObj.userName = currentUser.userName;
        this.userObj.userSurname = currentUser.userSurname;
        this.userObj.userPatronymic = currentUser.userPatronymic;
        this.userObj.userSkills = currentUser.userSkills;
        this.userObj.userGender = currentUser.userGender;
        this.userObj.userBirthDate = currentUser.userBirthDate;


        this.title.setTitle(`Edit ${this.userObj.userName}`);
      }
    }  
  }
 
  updateUser(){
      const allUsers = localStorage.getItem('userList');
      console.log(allUsers)
      if(allUsers !== null){
        const userList = JSON.parse(allUsers);
        userList.splice(userList.findIndex((a:any) => a.userId == this.userObj.userId), 1,this.userObj)
        localStorage.setItem('userList', JSON.stringify(userList));
      } 
      
 }

 deleteUser (id: any) {
  const allUsers = localStorage.getItem('userList');
  if(allUsers !== null){
    const userList = JSON.parse(allUsers);
    const currentIndex = userList.findIndex((a:any) => a.userId == id);
    userList.splice(currentIndex, 1);
    localStorage.setItem('userList', JSON.stringify(userList));
  } 
 }

}

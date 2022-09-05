import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { userObj } from 'src/app/Interfaces/user';


@Component({
  selector: 'app-add-user',
  templateUrl: 'add-user.component.html',
  styleUrls: ['add-user.component.css']
})
export class AddUserComponent implements OnInit {
  

 
  
  userObj: userObj;


  
  userGender: string = 'boy';
  constructor(
    private title: Title) 
    {
    this.userObj = new userObj();
    this.userObj.userName = 'Name';
    this.userObj.userSurname = 'Surname';
    this.userObj.userPatronymic = 'Patronymic';
    this.userObj.userGender = 'value1';
    this.userObj.userSkills = '123';
    this.userObj.userBirthDate = '01.01.2000';
   }

  ngOnInit(): void {
    this.title.setTitle("Home");

  }
 


  getNewUserId(){
    const oldUsers  = localStorage.getItem('userList');
    if (oldUsers !== null) {
      const userList = JSON.parse(oldUsers);
      return userList.length +1;
    } else {
      return 1;
    }
  }
    

  saveUser(){
      const lastUserId = this.getNewUserId();
      this.userObj.userId = lastUserId;
      const allUsers = localStorage.getItem('userList');
      if(allUsers !== null){
        const userList = JSON.parse(allUsers);
        userList.push(this.userObj);
        localStorage.setItem('userList', JSON.stringify(userList));
      } else {
        const userArr =[];
        userArr.push(this.userObj);
        localStorage.setItem('userList', JSON.stringify(userArr));
      }
      
  }

  display() {
    console.log(this.userObj)
  }

}

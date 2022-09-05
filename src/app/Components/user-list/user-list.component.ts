import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { userObj } from 'src/app/Interfaces/user';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList: userObj  [];
  constructor(
    private title: Title,
  ) {
    this.userList = [];
   }

   ngOnInit(): void {
    this.title.setTitle('User List')
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }

    
  }
  deleteUser (id: any) {
    const allUsers = localStorage.getItem('userList');
    if(allUsers !== null){
      const userList = JSON.parse(allUsers);
      userList.splice(userList.findIndex((a:any) => a.userId == id), 1)
      localStorage.setItem('userList', JSON.stringify(userList));
    } 
    const records = localStorage.getItem('userList');
    if (records !== null) {
      this.userList = JSON.parse(records);
    }
   }
  

}

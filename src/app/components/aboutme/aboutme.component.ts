import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  
  public aboutMeData:any;
  aboutMeInput:string = '';
  aboutMe = new FormControl();
  public userEdited:any;
  public currentPath: string = "";
  

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.aboutMeData=data;
    })
    this.currentPath = this.router.url;
    
  }
  
  setAboutMeEdit() {
    this.aboutMe.setValue(this.aboutMeData.sobre_mi);
  }

  sendAboutMe() {
    this.userEdited = {
        ...this.aboutMeData,
        sobre_mi: this.aboutMe.value
      }
      
      this.userData.saveUser(this.userEdited);
    }
    

  userLogged() {
    if (this.currentPath === '/user/edit'){
      return true
    } else {
      return false
    }
  }

}

import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {

  aboutMeData:any;

  public currentPath: string = "";

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.aboutMeData=data.sobre_mi;
    })
    this.currentPath = this.router.url;
  }

  userLogged() {
    if (this.currentPath === '/user/edit'){
      return true
    } else {
      return false
    }
  }

}

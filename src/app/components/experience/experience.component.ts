import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  expData:any;
  public currentPath: string = "";

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.expData=data.experiencias;
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

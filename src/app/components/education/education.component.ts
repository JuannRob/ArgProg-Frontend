import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationData:any;
  public currentPath: string = "";

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.educationData=data.formaciones;
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

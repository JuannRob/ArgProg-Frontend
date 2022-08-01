import { UserdataService } from "./../../services/userdata.service";
import { Router } from "@angular/router";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectData:any;
  public currentPath: string = "";

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.projectData=data.proyectos;
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

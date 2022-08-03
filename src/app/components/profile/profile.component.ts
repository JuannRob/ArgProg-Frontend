import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileData:any;
  ubicationData:any;
  public currentPath: string = "";

  constructor(private userData:UserdataService, private router: Router) { }

  ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.profileData=data;
    })

    console.log('datos:', this.profileData);

    this.userData.getUserUbication().subscribe(data => {
      this.ubicationData=data;
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

  goToSpecificUrl(url:string): void {
    window.open(url, "_blank");
  }

}

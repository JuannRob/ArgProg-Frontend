import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentPath: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentPath = this.router.url;
    console.log(this.currentPath);
  }

  userLogged() {
    if (this.currentPath === '/user/edit'){
      return true
    } else {
      return false
    }
  }

  onClick() {
    sessionStorage.setItem('isLogged', 'false');
    this.router.navigate(['/user']);
  }

}

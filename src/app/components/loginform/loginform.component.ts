import { Router } from "@angular/router";
import { UserdataService } from "./../../services/userdata.service";
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  form:FormGroup;
  loginData:any;

  constructor(private formBuilder:FormBuilder, private userData:UserdataService, private router: Router) {
    this.form=this.formBuilder.group({
      email:['', [Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
   }

   ngOnInit(): void {
    this.userData.getUserData().subscribe(data => {
      this.loginData=data;
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password')
  }

  onSubmit(event:Event){
    event.preventDefault;
    if(this.form.get('email')?.value == this.loginData.email && this.form.get('password')?.value == this.loginData.password){
      sessionStorage.setItem('isLogged', 'true')
      this.router.navigate(["/user/edit"])
    } else {
      sessionStorage.setItem('isLogged', 'false')
      alert('El email o la contraseña no corresponden a un usuario existente. Vuelve a intentar.')
    }
    
  }

}

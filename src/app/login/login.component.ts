import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  lsRememberMe!:boolean;
  emailUser="";
  passUser="";
  ngOnInit(): void {
  }
  
  submit() {
    let rememberMe = <HTMLInputElement> document.getElementById("rememberMe");
    let username = <HTMLInputElement> document.getElementById("emailInput");
    let password = <HTMLInputElement> document.getElementById("passwordInput");
    let isChecked = rememberMe.checked;
    console.log(isChecked);
    if(isChecked){
      console.log(username.value);
      console.log(password.value);
      console.log('remember');

    }
  }

  gotoRegister() {
    this.router.navigateByUrl('/register');
  }

}

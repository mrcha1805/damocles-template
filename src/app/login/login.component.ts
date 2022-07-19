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
  ngOnInit(): void {
  }
  
  submit() {
    let rememberMe = <HTMLInputElement> document.getElementById("rememberMe");
    let isChecked = rememberMe.checked;
    console.log(isChecked);
    if(isChecked){
      
      console.log('remember');
    }
  }

  gotoRegister() {
    this.router.navigateByUrl('/register');
  }

}
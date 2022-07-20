import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router) { }
  industrySelected= "";
  dropdownIconSrc = "../../../assets/icons/arrow_Close_black.svg";
  ngOnInit(): void {
    this.industrySelected = "Banking"
  }

  submit() {
    this.router.navigateByUrl('/verify');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
  name!: string;
  ngOnInit(): void {
    this.name = "Nicholas Ellison";
  }

  dashboardNav() {
    this.router.navigateByUrl('/dashboard');
  }
  homeNav() {
    this.router.navigateByUrl('/home');
  }


}

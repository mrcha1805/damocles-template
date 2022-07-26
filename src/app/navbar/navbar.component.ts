import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,
    private activatedRoute: ActivatedRoute) { }
  name!: string;
  dashboardActive: boolean = false;
  ngOnInit(): void {
    this.name = "Nicholas Ellison";
    this.dashboardActive = false;
    console.log('active route: '+ this.activatedRoute.snapshot.url )
    if(this.activatedRoute.snapshot.url.toString() ==='dashboard') {
      this.dashboardActive = true;
      console.log(this.dashboardActive)
    }
  }

  dashboardNav() {
    this.router.navigateByUrl('/dashboard');
  }
  homeNav() {
    this.router.navigateByUrl('/home');
  }


}

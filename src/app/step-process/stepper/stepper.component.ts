import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent implements OnInit {
  stepCurrent!: number;
  userIsExist: boolean = false;

  permissionTarget: number = 0;
  buttonShow: Boolean = false;
  nextToKpiList: Boolean = false;
  nextToKpiTest: Boolean = false;
  stepToggleShow: Boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.stepCurrent = 1;
    if (this.activatedRoute.snapshot.params.username) {
      console.log('user is exist');
      this.userIsExist = true;
    }
  }

  stepDisplay(tab: number, current: number) {
    if (tab === 1 || (tab === 4 && current === 4)) {
      return '../../../assets/images/step-active.svg';
    }
    if (tab <= current) {
      return '../../../assets/images/step-continue.svg';
    } else {
      return '../../../assets/images/step.svg';
    }
  }

  stepAction(index: number) {
    this.stepCurrent = index;
  }

  nextMenu() {
    if (this.permissionTarget == 2 && !this.nextToKpiTest) {
      this.nextToKpiTest = true;
    } else {
      this.stepCurrent += 1;
      if (this.stepCurrent > 4) {
        this.goDashboard();
      }
    }
  }

  previousMenu() {
    console.log('stepCurrent : ', this.stepCurrent);
    console.log('nextToKpiList : ', this.nextToKpiList);
    console.log('nextToKpiTest : ', this.nextToKpiTest);
    console.log('buttonShow : ', this.buttonShow);

    if (this.permissionTarget == 1) {
      if (this.stepCurrent >= 3) {
        this.stepCurrent -= 1;
      } else if ((this.nextToKpiList = true)) {
        this.nextToKpiList = !this.nextToKpiList;
        this.buttonShow = false;
      } else {
        this.stepCurrent -= 1;
      }
    } else {
      if (
        this.permissionTarget == 2 &&
        this.stepCurrent == 2 &&
        this.nextToKpiTest
      ) {
        this.nextToKpiTest = false;
      } else {
        this.stepCurrent -= 1;
      }
    }
  }

  receiveChildData(e: any) {
    console.log(e);

    this.stepCurrent = 2;
    switch (Number(e)) {
      case 1 && 1.1:
        this.permissionTarget = 1;
        break;
      case 2:
        this.permissionTarget = 2;
        this.buttonShow = true;
        break;
      default:
        this.permissionTarget = 3;
        this.stepToggleShow = false;
        break;
    }
  }

  receiveChildDataKpiByProduct(e: any) {
    console.log(e);

    if (e == 'selected') {
      this.nextToKpiList = true;
      this.buttonShow = true;
    }
  }

  receiveChildDataTestProduct(e: any) {
    console.log(e);

    if (e == 'previous') {
      this.stepCurrent = 1;
      this.stepToggleShow = true;
    }
  }

  receiveChildDataDashboard(e: any) {
    if (!e) {
      console.log(e);
      this.goDashboard();
    }
  }

  goDashboard() {
    this.router.navigateByUrl('/dashboard');
  }
}

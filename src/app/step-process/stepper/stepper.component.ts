import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  stepCurrent!: number;
  userIsExist: boolean = false;
  ngOnInit(): void {
    this.stepCurrent = 1;
    if(this.activatedRoute.snapshot.params.username) {
      console.log('user is exist');
      this.userIsExist = true;
    }
  }

  stepDisplay(tab:number, current: number) {

    if ((tab === 1) || ((tab === 4) && (current === 4))) {
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
    this.stepCurrent+=1;
  }

  previousMenu() {
    this.stepCurrent-= 1;
  }

}

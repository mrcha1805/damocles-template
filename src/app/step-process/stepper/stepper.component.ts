import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  constructor() { }
  stepCurrent!: number;
  ngOnInit(): void {
    this.stepCurrent = 1;
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

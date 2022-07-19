import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-test-project',
  templateUrl: './test-project.component.html',
  styleUrls: ['./test-project.component.scss'],
})
export class TestProjectComponent implements OnInit {
  search: any;
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[0]);
  myKPI: any[] = [
    {
      image: '../../../assets/images/project_default.png',
      name: 'Test KPI',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'App e-Payment User',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'First Job Search',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'Support family',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

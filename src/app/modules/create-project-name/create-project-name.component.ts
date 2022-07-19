import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
@Component({
  selector: 'app-create-project-name',
  templateUrl: './create-project-name.component.html',
  styleUrls: ['./create-project-name.component.scss'],
})
export class CreateProjectNameComponent implements OnInit {
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
  myProjects: any[] = [
    {
      image: '../../../assets/images/project_default.png',
      name: 'My insurance1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      status: 'New request',
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'My insurance2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      status: 'Processing',
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'My insurance3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      status: 'KPI Ready to use!',
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'My insurance4',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      status: 'Done',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-lets-start',
  templateUrl: './lets-start.component.html',
  styleUrls: ['./lets-start.component.scss'],
})
export class LetsStartComponent implements OnInit {
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[0]);
  LetsStart: any[] = [
    {
      image: '../../../assets/images/project_default.png',
      name: 'Standard audience',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      target: [
        {
          name: 'Target by Product',
          isSelected: true,
        },
        {
          name: 'Target by Category',
          isSelected: false,
        },
      ],
      isSelected: false,
    },
    {
      image: '../../../assets/images/audience.png',
      name: 'Custom audience',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
  ];

  myProjects: any[] = [
    {
      image: '../../../assets/images/project_default.png',
      name: 'My insurance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'My banking',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle1(list: any, item: any, index: number) {
    list.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    this.myProjects.forEach((e: any) => {
      e.isSelected = false;
    });
    item.isSelected = !item.isSelected;
  }

  toggle2(list: any, item: any, index: number) {
    list.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    this.LetsStart.forEach((e: any) => {
      e.isSelected = false;
    });
    item.isSelected = !item.isSelected;
  }

  toggle3(itemList: any, target: any, item: any, index: number) {
    target.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    item.isSelected = false;
    itemList.isSelected = false;
  }
}

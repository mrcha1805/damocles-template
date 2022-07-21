import { Component, OnInit } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import { ThemePalette } from '@angular/material/core';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-lets-start',
  templateUrl: './lets-start.component.html',
  styleUrls: ['./lets-start.component.scss'],
})
export class LetsStartComponent implements OnInit {
  triggers = NgxPopperjsTriggers;
  placements = NgxPopperjsPlacements;
  offsetModifiers = [
    {
      name: 'offset',
      options: {
        offset: [0, 2],
      },
    },
    {
      name: 'flip',
      options: {
        flipVariations: false,
      },
    },
  ];
  LetsStart: any[] = Prototype.LetsStart;
  myProjects: any[] = Prototype.MyProjects;

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

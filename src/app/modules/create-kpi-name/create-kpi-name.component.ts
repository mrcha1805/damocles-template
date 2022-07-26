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
  selector: 'app-create-kpi-name',
  templateUrl: './create-kpi-name.component.html',
  styleUrls: ['./create-kpi-name.component.scss'],
})
export class CreateKpiNameComponent implements OnInit {
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
  name: any;
  search: any;
  dataMaster = Prototype.Kpi;
  groupList: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.dataMaster.forEach((element) => {
      this.groupList.push({
        group: element.group,
        selected: element.selected,
      });
    });
  }

  toggle1(list: any, item: any, index: number) {
    list.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    item.isSelected = true;
  }
}

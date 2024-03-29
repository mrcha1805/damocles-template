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
  selector: 'app-create-project-name',
  templateUrl: './create-project-name.component.html',
  styleUrls: ['./create-project-name.component.scss'],
})
export class CreateProjectNameComponent implements OnInit {
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
  search: any;
  myProjects: any[] = Prototype.CreateProjectName;
  constructor() {}

  ngOnInit(): void {}
}

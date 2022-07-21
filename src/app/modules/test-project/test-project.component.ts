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
  selector: 'app-test-project',
  templateUrl: './test-project.component.html',
  styleUrls: ['./test-project.component.scss'],
})
export class TestProjectComponent implements OnInit {
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
  myKPI: any[] = Prototype.TestProject;

  constructor() {}

  ngOnInit(): void {}
}

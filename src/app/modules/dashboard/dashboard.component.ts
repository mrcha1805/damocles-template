import { Component, OnInit } from '@angular/core';
import { NgxPopperjsPlacements, NgxPopperjsTriggers } from 'ngx-popperjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
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
  kpiSelected= "";
  dropdownIconSrc ="../../../assets/icons/dropdown.svg";
  project = [
    {
      name: 'Test KPI',
      value: 0
    },
    {
      name: 'ChartB',
      value: 1
    },
    {
      name: 'ChartC',
      value: 2
    },
  ]
  dropdownShow = false;
  ngOnInit(): void {
    this.kpiSelected = this.project[0].name;
  }

}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  kpiValue: number = 0;
  dropdownIconSrc ="../../../assets/icons/dropdown.svg";
  project = [
    {
      name: 'Test KPI',
      value: 1
    },
    {
      name: 'ChartB',
      value: 2
    },
    {
      name: 'ChartC',
      value: 3
    },
  ]
  dropdownShow = false;
  @ViewChild('kpis') kpis!: ElementRef;
  ngOnInit(): void {
   
    this.kpiSelected = this.project[0].name;
    this.kpiValue = this.project[0].value;
  }

  openDropdown(open: boolean) {
    console.log('dropdown')
    this.dropdownShow = !this.dropdownShow;
  }
  selectItem(select: any) {
    console.log(select)
    this.kpiValue = select;
    this.dropdownShow = !this.dropdownShow;
  }

}

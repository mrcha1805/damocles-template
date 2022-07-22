import { Component, OnInit, ViewChild } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import * as _ from 'lodash';
import { ThemePalette } from '@angular/material/core';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';
import {
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ChartComponent,
} from 'ng-apexcharts';

import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  legend: ApexLegend;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  strock: ApexStroke;
};

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

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
  dropdownIconSrc = '../assets/images/down.png';
  openOption = true;
  selectItemAll = false;
  search = '';
  affinitySelected = '';
  index = 0;
  dataMaster: any = [];
  summary: number = 0;

  constructor() {
    this.chartOptions = {
      series: [155000, 155000, 30000],
      chart: {
        width: '100%',
        type: 'pie',
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 375,
          animateGradually: {
            enabled: true,
            delay: 125,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 250,
          },
        },
      },
      labels: ['count 1', 'count 2', 'count 3'],
      theme: {
        mode: 'light',
        monochrome: {
          enabled: true,
          color: '#3B4F4D',
          shadeTo: 'light',
          shadeIntensity: 0.65,
        },
      },
      tooltip: {
        enabled: true,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
      legend: {
        show: false,
        position: 'bottom',
      },
      dataLabels: {
        enabled: false,
        textAnchor: 'middle',
      },
      stroke: {
        show: true,
        curve: 'smooth',
        lineCap: 'butt',
        colors: undefined,
        width: 2,
        dashArray: 0,
      },
    };
  }

  recommendedKPI: any[] = [
    {
      name: 'Job Type - Regular',
      summary: 360000,
    },
    {
      name: 'App e-Payment User',
      summary: 150000,
    },
    {
      name: 'First Job Search',
      summary: 360000,
    },
  ];

  ngOnInit() {
    this.affinitySelected = '';
    this.selectItemAll = true;
    this.dataMaster = Prototype.Kpi;

    this.summary = _.sum(this.chartOptions.series);
  }

  selectSubLevel(sub: any, header: any) {
    console.log(sub);
    console.log(header);

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        if (data.label === header.label) {
          data.selected = false;
          console.log('--->' + data.label);
          if (data.subLevel?.every((t: any) => t.selected) == true) {
            data.indeterminate = false;
            data.selected = true;
          } else {
            let unselect = true;
            data.subLevel?.forEach((sub: any) => {
              if (sub.selected) {
                unselect = false;
              }
            });
            if (unselect) {
              data.selected = false;
              data.indeterminate = false;
            } else {
              data.selected = false;
              data.indeterminate = true;
            }
          }
        }
      });
    });
  }

  setAllItem(select: boolean, header: any) {
    console.log('setAll');

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        if (data.label === header.label) {
          data.subLevel?.forEach((t: any) => (t.selected = select));
        }
      });
    });
  }

  selectAll(event: boolean) {
    this.selectItemAll = event;
    console.log(event);
    console.log(this.selectItemAll);

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        data.selected = this.selectItemAll;
        if (this.selectItemAll && data.indeterminate) {
          data.indeterminate = false;
        }
        if (!this.selectItemAll) {
          data.indeterminate = false;
        }
        data.subLevel?.forEach((sub: any) => {
          sub.selected = this.selectItemAll;
        });
      });
    });
  }

  iconDropdownGroup(open: boolean, header: any) {
    this.dataMaster.find((element: any) => {
      if (element.group === header.group) {
        element.dropdownShow = open;
        if (open) {
          element.iconSrc = '../assets/images/down.png';
        } else {
          element.iconSrc = '../assets/images/up.png';
        }
      }
    });
  }

  iconDropdownSubGroup(open: boolean, header: any) {
    this.dataMaster.find((element: any) => {
      element.data.find((data: any) => {
        if (data.label === header.label) {
          data.dropdownShow = open;
          if (open) {
            data.iconSrc = '../assets/images/down.png';
          } else {
            data.iconSrc = '../assets/images/up.png';
          }
        }
      });
    });
  }
}

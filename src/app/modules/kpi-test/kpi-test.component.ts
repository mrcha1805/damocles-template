import { Component, Input, OnInit, ViewChild } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import * as _ from 'lodash';
import { ThemePalette } from '@angular/material/core';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';
import { LabelType, Options } from '@angular-slider/ngx-slider';
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
  selector: 'app-kpi-test',
  templateUrl: './kpi-test.component.html',
  styleUrls: ['./kpi-test.component.scss'],
})
export class KpiTestComponent implements OnInit {
  @Input() kpiList: any;
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
  dropdownIconSrc = './assets/images/down.png';
  openOption = true;
  selectItemAll = false;
  search = '';
  affinitySelected = '';
  index = 0;
  dataMaster: any = [];
  summary: number = 0;

  options: Options = {
    floor: 0,
    ceil: 100,
    selectionBarGradient: {
      from: '#B3D235',
      to: '#B3D235',
    },
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return value.toLocaleString();
        case LabelType.High:
          return value.toLocaleString();
        case LabelType.Floor:
          return '';
        case LabelType.Ceil:
          return '';
        default:
          return value.toLocaleString();
      }
    },
  };

  constructor() {
    this.chartOptions = {
      series: [155000, 155000, 30000],
      chart: {
        width: '100%',
        type: 'pie',
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

    if (this.kpiList === undefined) {
      this.dataMaster = Prototype.KpiTest;
    } else {
      var dataMaster = this.kpiList.filter((item: any) => {
        return item.selected == true;
      });

      dataMaster.forEach((item: any) => {
        console.log(
          this.dataMaster.push(
            Prototype.KpiTestRef.find((data: any) => {
              return item.group == data.group;
            })
          )
        );
      });
      this.dataMaster = this.dataMaster;

      console.log('dataMaster : ', this.dataMaster);
    }
    this.summary = _.sum(this.chartOptions.series);
  }

  selectSubLevel(sub: any, header: any, item: any) {
    console.log(sub);
    console.log(header);

    this.dataMaster.forEach((element: any) => {
      element.subLevel.forEach((data: any) => {
        if (element.group === item.group) {
          element.selected = false;
          console.log('--->' + data.label);
          if (element.subLevel?.every((t: any) => t.selected) == true) {
            element.indeterminate = false;
            element.selected = true;
          } else {
            let unselect = true;
            element.subLevel?.forEach((sub: any) => {
              if (sub.selected) {
                unselect = false;
              }
            });
            if (unselect) {
              element.selected = false;
              element.indeterminate = false;
            } else {
              element.selected = false;
              element.indeterminate = true;
            }
          }
        }
      });
    });
  }

  setAllItem(select: boolean, header: any) {
    console.log('setAll');
    this.dataMaster.find((element: any) => {
      if (element.group === header.group) {
        element.subLevel?.forEach((t: any) => (t.selected = select));
      }
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
          element.iconSrc = './assets/images/up.png';
        } else {
          element.iconSrc = './assets/images/down.png';
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
            data.iconSrc = './assets/images/up.png';
          } else {
            data.iconSrc = './assets/images/down.png';
          }
        }
      });
    });
  }
}

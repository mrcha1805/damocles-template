import { AfterViewInit, Component, OnInit } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import * as _ from 'lodash';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsVenn from 'highcharts/modules/venn';
import { LabelType, Options } from '@angular-slider/ngx-slider';

HighchartsMore(Highcharts);
HighchartsVenn(Highcharts);

@Component({
  selector: 'app-select-channel',
  templateUrl: './select-channel.component.html',
  styleUrls: ['./select-channel.component.scss'],
})
export class SelectChannelComponent implements AfterViewInit, OnInit {
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

  value = 0;
  highValue = 0;
  options: Options = {
    floor: 0,
    ceil: 100,
    selectionBarGradient: {
      from: '#4E4E4E',
      to: '#4E4E4E',
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

  constructor() {}

  public ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnInit(): void {
    this.affinitySelected = '';
    this.selectItemAll = true;
    this.dataMaster = Prototype.SelectChannel;

    this.summary = _.sum([340000]);
  }

  private createChart(): void {
    const chart = Highcharts.chart('chart-container', {
      credits: {
        enabled: false,
      },
      accessibility: {
        enabled: false,
      },
      chart: {
        backgroundColor: '',
      },
      plotOptions: {
        venn: {
          dataLabels: {
            enabled: true,
            style: {
              textOutline: false,
              width: 175,
              fontSize: '16px',
              color: '#ffffff',
            },
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      title: {
        text: null,
      },

      series: [
        {
          type: 'venn',
          data: [
            {
              name: ['Facebook'],
              sets: ['Facebook'],
              value: 100000,
              color: 'rgba(0, 0, 0, .25)',
            },
            {
              name: ['THAN'],
              sets: ['THAN'],
              value: 300000,
              color: 'rgba(0, 0, 0, .75)',
            },
            {
              name: ['Google'],
              sets: ['Google'],
              value: 50000,
              color: 'rgba(0, 0, 0, .75)',
            },
            {
              sets: ['Facebook', 'THAN'],
              value: 10000,
              name: ['Facebook', 'THAN'],
              color: 'transparent',
              dataLabels: {
                enabled: false,
              },
            },
            {
              sets: ['Facebook', 'Google'],
              value: 10000,
              name: ['Facebook', 'Google'],
              color: 'transparent',
              dataLabels: {
                enabled: false,
              },
            },
            {
              sets: ['THAN', 'Google'],
              value: 10000,
              name: ['THAN', 'Google'],
              color: 'transparent',
              dataLabels: {
                enabled: false,
              },
            },
            {
              sets: ['Facebook', 'THAN', 'Google'],
              value: 10000,
              name: ['THAN', 'Google'],
              color: 'transparent',
              dataLabels: {
                enabled: false,
              },
            },
          ],
        },
      ],
    } as any);
  }
}

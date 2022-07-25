import { AfterViewInit, Component, OnInit } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import * as _ from 'lodash';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsVenn from 'highcharts/modules/venn';

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
  dropdownIconSrc = '../assets/images/down.png';
  openOption = true;
  selectItemAll = false;
  search = '';
  affinitySelected = '';
  index = 0;
  dataMaster: any = [];
  summary: number = 0;
  constructor() {}

  public ngAfterViewInit(): void {
    this.createChart();
  }

  ngOnInit(): void {
    this.affinitySelected = '';
    this.selectItemAll = true;
    this.dataMaster = Prototype.SelectChannel;

    this.summary = _.sum([]);
  }

  private createChart(): void {
    const chart = Highcharts.chart('chart-container', {
      credits: {
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
        enabled: true,
      },
      title: {
        text: null,
      },
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 650,
            },
            chartOptions: {
              plotOptions: {
                venn: {
                  dataLabels: {
                    style: {
                      fontSize: '16px',
                      width: '100px',
                    },
                  },
                },
              },
            },
          },
        ],
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
          ],
        },
      ],
    } as any);
  }
}

import { Component, OnInit } from '@angular/core';
import { Chart, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import * as funnelChartPlugins from 'chartjs-plugin-funnel';

@Component({
  selector: 'app-chartjs-template',
  templateUrl: './chartjs-template.component.html',
  styleUrls: ['./chartjs-template.component.scss'],
})
export class ChartjsTemplateComponent implements OnInit {
  constructor() {
    Chart.plugins.register(funnelChartPlugins);
    Chart.pluginService.register(funnelChartPlugins);
  }

  ngOnInit(): void {}

  funnelChartOptions: funnelChartPlugins = {
    sort: 'desc',
    legend: {
      display: false,
      position: 'right',
    },
    gap: 5,
  };

  funnelChartLabels: Label[] = [
    'Nitrogen',
    'Oxygen',
    'Argon',
    'Carbon dioxide',
  ];

  funnelChartData: ChartDataSets[] = [
    {
      data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      backgroundColor: [
        'rgba(0,255,0,0.1)',
        'rgba(0,255,0,0.2)',
        'rgba(0,255,0,0.3)',
        'rgba(0,255,0,0.4)',
        'rgba(0,255,0,0.5)',
        'rgba(0,255,0,0.6)',
        'rgba(0,255,0,0.7)',
        'rgba(0,255,0,0.8)',
        'rgba(0,255,0,0.9)',
        'rgba(0,255,0,1.0)',
      ],
      borderWidth: 10,
      borderColor: [
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
        '#000',
      ],
    },
  ];

  funnelChartType: funnelChartPlugins = 'funnel';

  funnelChartLegend: funnelChartPlugins = true;

  funnelChartPlugins: any = [funnelChartPlugins];

  funnelChartColors: funnelChartPlugins = [
    {
      backgroundColor: [
        'rgba(0,255,0,0.1)',
        'rgba(0,255,0,0.2)',
        'rgba(0,255,0,0.3)',
        'rgba(0,255,0,0.4)',
        'rgba(0,255,0,0.5)',
        'rgba(0,255,0,0.6)',
        'rgba(0,255,0,0.7)',
        'rgba(0,255,0,0.8)',
        'rgba(0,255,0,0.9)',
        'rgba(0,255,0,1.0)',
      ],
      hoverBackgroundColor: [
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
        '#fff',
      ],
      borderWidth: 1,
    },
  ];

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
  };
  public barChartLabels = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
  ];
}

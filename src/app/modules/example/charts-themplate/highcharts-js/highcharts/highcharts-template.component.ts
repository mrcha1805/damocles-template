import { AfterViewInit, Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsSolidGauge from 'highcharts/modules/solid-gauge';
import HighchartsFunnel from 'highcharts/modules/funnel';

HighchartsMore(Highcharts);
HighchartsSolidGauge(Highcharts);
HighchartsFunnel(Highcharts);

@Component({
  selector: 'app-highcharts-template',
  templateUrl: './highcharts-template.component.html',
  styleUrls: ['./highcharts-template.component.scss'],
})
export class HighchartsTemplateComponent implements AfterViewInit {
  public ngAfterViewInit(): void {
    this.createChartGauge();
    this.createChartPie();
    this.createChartColumn();
    this.createChartLine();
    this.createChartFunnel();
  }

  private getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  private createChartGauge(): void {
    const chart = Highcharts.chart('chart-gauge', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'solidgauge',
      },
      title: {
        text: 'Gauge Chart',
      },
      credits: {
        enabled: false,
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        center: ['50%', '85%'],
        size: '160%',
        background: {
          innerRadius: '60%',
          outerRadius: '100%',
          shape: 'arc',
        },
      },
      yAxis: {
        min: 0,
        max: 100,
        stops: [
          [0.1, '#55BF3B'], // green
          [0.5, '#DDDF0D'], // yellow
          [0.9, '#DF5353'], // red
        ],
        minorTickInterval: null,
        tickAmount: 2,
        labels: {
          y: 16,
        },
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -25,
            borderWidth: 0,
            useHTML: true,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      series: [
        {
          name: null,
          data: [this.getRandomNumber(0, 100)],
          dataLabels: {
            format:
              '<div style="text-align: center"><span style="font-size: 1.25rem">{y}</span></div>',
          },
        },
      ],
    } as any);

    setInterval(() => {
      chart.series[0].points[0].update(this.getRandomNumber(0, 100));
    }, 1000);
  }

  private createChartPie(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 5; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart('chart-pie', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Pie Chart',
      },
      credits: {
        enabled: false,
      },
      tooltip: {
        headerFormat: `<span class="mb-2">Date: {point.key}</span><br>`,
        pointFormat: '<span>Amount: {point.y}</span>',
        useHTML: true,
      },
      series: [
        {
          name: null,
          innerSize: '50%',
          data,
        },
      ],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        {
          name: `${date.getDate()}/${date.getMonth() + 1}`,
          y: this.getRandomNumber(0, 1000),
        },
        true,
        true
      );
    }, 1500);
  }

  private createChartColumn(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push({
        name: `${date.getDate()}/${date.getMonth() + 1}`,
        y: this.getRandomNumber(0, 1000),
      });
    }

    const chart = Highcharts.chart(
      'chart-column' as any,
      {
        accessibility: {
          enabled: false,
        },
        chart: {
          type: 'column',
        },
        title: {
          text: 'Column Chart',
        },
        credits: {
          enabled: false,
        },
        legend: {
          enabled: false,
        },
        yAxis: {
          min: 0,
          title: undefined,
        },
        xAxis: {
          type: 'category',
        },
        tooltip: {
          headerFormat: `<div>Date: {point.key}</div>`,
          pointFormat: `<div>{series.name}: {point.y}</div>`,
          shared: true,
          useHTML: true,
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true,
            },
          },
        },
        series: [
          {
            name: 'Amount',
            data,
          },
        ],
      } as any
    );

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        {
          name: `${date.getDate()}/${date.getMonth() + 1}`,
          y: this.getRandomNumber(0, 1000),
        },
        true,
        true
      );
    }, 1500);
  }

  private createChartLine(): void {
    let date = new Date();
    const data: any[] = [];

    for (let i = 0; i < 10; i++) {
      date.setDate(new Date().getDate() + i);
      data.push([
        `${date.getDate()}/${date.getMonth() + 1}`,
        this.getRandomNumber(0, 1000),
      ]);
    }

    const chart = Highcharts.chart('chart-line', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'line',
      },
      title: {
        text: 'Line Chart',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      yAxis: {
        title: {
          text: null,
        },
      },
      xAxis: {
        type: 'category',
      },
      tooltip: {
        headerFormat: `<div>Date: {point.key}</div>`,
        pointFormat: `<div>{series.name}: {point.y}</div>`,
        shared: true,
        useHTML: true,
      },
      series: [
        {
          name: 'Amount',
          data,
        },
      ],
    } as any);

    setInterval(() => {
      date.setDate(date.getDate() + 1);
      chart.series[0].addPoint(
        [
          `${date.getDate()}/${date.getMonth() + 1}`,
          this.getRandomNumber(0, 1000),
        ],
        true,
        true
      );
    }, 1500);
  }

  private createChartFunnel(): void {
    var data = [
      ['Total Customers', 2908380],
      ['Digital Activity', 2840780],
      ['Demographics', 2756345],
      ['Financial', 2710000],
      ['Financial Services Engagement', 2698456],
      ['Personality Traits', 2623368],
      ['Product Demand', 2598567],
      ['Life', 2547896],
      ['Location', 2495712],
      ['Affinity', 2440780],
    ];

    var color: any = [];
    var red: number = 191;
    var blue: number = 190;
    var green: number = 190;
    for (var i = 0; i <= data.length; i++) {
      i == 0
        ? color.push(`rgba(${red}, ${blue}, ${green}, 1)`)
        : color.push(
            `rgba(${(red += 1)}, ${(blue += 5)}, ${(green -= 17)}, 1)`
          );
    }

    const chart = Highcharts.chart('chart-funnel', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'funnel',
      },
      colors: color,
      credits: {
        enabled: false,
      },
      title: {
        text: 'Funnel',
      },
      plotOptions: {
        series: {
          dataLabels: {
            enabled: false,
            format: '<b>{point.name}</b> ({point.y:,.0f})',
            color: Highcharts.theme || 'black',
            softConnector: true,
          },
          center: ['50%', '50%'],
          neckWidth: '30%',
          neckHeight: 0,
          width: '80%',
          borderWidth: 5,
          states: {
            hover: {
              brightness: 0.1,
              enabled: true,
            },
          },
        },
      },
      legend: {
        enabled: false,
      },
      series: [
        {
          name: 'Count: ',
          data: data,
          enableMouseTracking: false,
        },
      ],
      tooltip: {
        enabled: false,
      },
    } as any);
  }
}

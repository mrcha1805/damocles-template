import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';
import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsFunnel from 'highcharts/modules/funnel';

HighchartsMore(Highcharts);
HighchartsFunnel(Highcharts);

@Component({
  selector: 'app-chart-homepage',
  templateUrl: './chart-homepage.component.html',
  styleUrls: ['./chart-homepage.component.scss'],
})
export class ChartHomepageComponent implements AfterViewInit, OnInit {
  @ViewChild('section', { static: true }) section: ElementRef | any;
  @ViewChild('chart_header', { static: true }) chart_header: ElementRef | any;
  @ViewChild('chart_funnel', { static: true }) chart_funnel: ElementRef | any;

  chart: any;
  style: object = {};
  countDefault: number = 0;
  MIN_DIMENSIONS_PX: number = 0;

  constructor() {}

  ngAfterViewInit(): void {
    this.createChartFunnel();
  }

  ngOnInit(): void {}

  validate = (event: ResizeEvent): boolean => {
    this.countDefault += 1;
    this.MIN_DIMENSIONS_PX =
      this.countDefault === 1
        ? this.section.nativeElement.offsetHeight
        : this.MIN_DIMENSIONS_PX;
    if (
      event.rectangle.height &&
      event.rectangle.height < this.MIN_DIMENSIONS_PX
    ) {
      return false;
    }
    return true;
  };

  onResizeEnd = (event: ResizeEvent): void => {
    this.style = {
      height: `${event.rectangle.height}px`,
    };
    setTimeout(() => {
      this.chart.setSize(
        null,
        this.section.nativeElement.offsetHeight -
          this.chart_header.nativeElement.offsetHeight -
          8
      );
    }, 0);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.countDefault = 0;
    this.style = {
      height: '100%',
    };
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

    this.chart = Highcharts.chart('chart-funnel', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'funnel',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        // height: 400,
      },
      colors: color,
      credits: {
        enabled: false,
      },
      title: {
        text: null,
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
          borderColor: 'rgba(255, 255, 255, 1)',
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

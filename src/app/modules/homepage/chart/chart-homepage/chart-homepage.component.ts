import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as _ from 'lodash';
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
  @ViewChild('chart_funnel_list', { static: true }) chart_funnel_list:
    | ElementRef
    | any;

  chart: any;
  style: object = {};
  style_user: object = {};
  countDefault: number = 0;
  MIN_DIMENSIONS_PX: number = 0;
  DIFFERENT_PX: number = 25;

  chartData: any = [];
  integrateData: any = [];
  chartColor: any = [];
  userBackgroundColor: any = [];

  constructor() {}

  ngAfterViewInit(): void {
    this.setOptionChartFunnel();
  }

  ngOnInit(): void {
    this.integrateData = [
      { customer: 'Total Customers', summary: 2908380 },
      { customer: 'Digital Activity', summary: 2840780 },
      { customer: 'Demographics', summary: 2756345 },
      { customer: 'Financial', summary: 2710000 },
      { customer: 'Financial Services Engagement', summary: 2698456 },
      { customer: 'Personality Traits', summary: 2623368 },
      { customer: 'Product Demand', summary: 2598567 },
      { customer: 'Life', summary: 2547896 },
      { customer: 'Location', summary: 2495712 },
      { customer: 'Affinity', summary: 2440780 },
    ];
    this.integrateData = _.orderBy(this.integrateData, ['summary'], ['desc']);
    this.integrateData.forEach((element: any) => {
      this.chartData.push([element.customer, element.summary]);
    });
    this.setColorChart();
  }

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
      if (Number(event.rectangle.width) >= 945) {
        this.chart.setSize(
          null,
          this.section.nativeElement.offsetHeight -
            this.chart_header.nativeElement.offsetHeight -
            this.DIFFERENT_PX
        );
      } else {
        this.chart.setSize(
          null,
          this.section.nativeElement.offsetHeight -
            this.chart_header.nativeElement.offsetHeight -
            this.chart_funnel_list.nativeElement.offsetHeight -
            this.DIFFERENT_PX
        );
      }
    }, 0);
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    setTimeout(() => {
      this.countDefault = 0;
      this.style = {
        height: '100%',
      };
      this.setOptionChartFunnel();
    }, 0);
  }

  setColorChart() {
    var red: number = 191;
    var blue: number = 190;
    var green: number = 190;
    for (var i = 0; i <= this.chartData.length; i++) {
      if (i == 0) {
        this.chartColor.push(`rgba(${red}, ${blue}, ${green}, 1)`);
        this.userBackgroundColor.push({
          backgroundColor: `rgba(${red}, ${blue}, ${green}, 1)`,
        });
      } else {
        this.chartColor.push(
          `rgba(${(red += 1)}, ${(blue += 5)}, ${(green -= 17)}, 1)`
        );
        this.userBackgroundColor.push({
          backgroundColor: `rgba(${(red += 1)}, ${(blue += 5)}, ${(green -= 17)}, 1)`,
        });
      }
    }
  }

  getColor(index: number): any {
    if (index == 0) {
      return {
        backgroundColor: this.chartColor[index],
        borderRadius: '25px',
      };
    }
  }

  setOptionChartFunnel() {
    this.chart = Highcharts.chart('chart-funnel', {
      accessibility: {
        enabled: false,
      },
      chart: {
        type: 'funnel',
        backgroundColor: 'rgba(255, 255, 255, 0)',
        height: Number(this.chart_funnel_list.nativeElement.offsetHeight),
      },
      colors: this.chartColor,
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
          neckWidth: '33%',
          neckHeight: 0,
          width: '67%',
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
          data: this.chartData,
          enableMouseTracking: true,
        },
      ],
      tooltip: {
        enabled: false,
      },
    } as any);
  }
}

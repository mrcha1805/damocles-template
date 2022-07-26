import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexYAxis,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-column-stacked-chart',
  templateUrl: './column-stacked-chart.component.html',
  styleUrls: ['./column-stacked-chart.component.scss']
})
export class ColumnStackedChartComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions>| any;
  constructor() { 
    this.chartOptions = {
      
      //colors: ['#FFBD98', '#808080', '#A48EE2', '#E1F594', '#FFA36F', '#7F61D6', '#4E4E4E', '#D5F169'],
      colors: ['#D5F169', '#4E4E4E', '#7F61D6', '#FFA36F', '#E1F594', '#A48EE2', '#808080', '#FFBD98'],
      series: [
        {
          name: "Travel",
          data: [44, 55, 41, 67, 22, 43, 12, 10, 15, 39, 20, 35, 67]
        },
        {
          name: "Life style dinning",
          data: [13, 23, 20, 8, 13, 27, 50, 43, 61, 98, 12, 41, 60],
     
        },
        {
          name: "Investment",
          data: [11, 17, 15, 15, 21, 14, 12, 5, 9, 11, 45, 80, 78]
        },
        {
          name: "Music",
          data: [21, 7, 25, 13, 22, 8, 17, 15, 15, 21, 14, 12, 5]
        },
        {
          name: "Game",
          data: [44, 55, 41, 67, 22, 43, 20, 8, 13, 27, 50, 43, 61]
        },
        {
          name: "Working",
          data: [13, 23, 20, 8, 13, 27, 11, 17, 15, 13, 27, 50, 39]
        },
        {
          name: "Streaming",
          data: [11, 17, 15, 15, 21, 14, 20, 8, 13, 27, 11, 17, 15]
        },
        {
          name: "Shopping online",
          data: [21, 7, 25, 13, 22, 8, 23, 20, 8, 13, 27, 50, 43]
        }
      ],
      chart: {
        type: "bar",
        height: 450,
        width: 800,
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 1200,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false,
 
        }
      },
      yaxis: {
        tickAmount: 4,
        //reversed: true,
      },
      xaxis: {
        type: "category",
        categories: [
          "< 17",
          "17-22",
          "23-25",
          "26-30",
          "31-35",
          "36-40",
          "41-45",
          "46-50",
          "51-55",
          "56-60",
          "61-65",
          "66-70",
          ">70"
        ]
      },
      legend: {
        position: "right",
        offsetY: 40,
        labels: {
          
          useSeriesColors: false,
        },
      },
      fill: {
        colors: ['#D5F169', '#4E4E4E', '#7F61D6', '#FFA36F', '#E1F594', '#A48EE2', '#808080', '#FFBD98'],
        opacity: 1
      },
      tooltip: {
        custom: function({series, seriesIndex, dataPointIndex, w}:any): any {
          return '<div class="p-1">Age group: '+w.globals.labels[dataPointIndex]+ '</div><div class="p-1">Count: ' + series[seriesIndex][dataPointIndex]+' </div>' 
        }
      }
    };
  }
  

  ngOnInit(): void {
  }

}

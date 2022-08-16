import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-chart-homepage',
  templateUrl: './chart-homepage.component.html',
  styleUrls: ['./chart-homepage.component.scss'],
})
export class ChartHomepageComponent implements OnInit {
  style: object = {};

  constructor() {}

  ngOnInit(): void {}

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 0;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
  }
}

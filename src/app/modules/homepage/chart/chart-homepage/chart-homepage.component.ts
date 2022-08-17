import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-chart-homepage',
  templateUrl: './chart-homepage.component.html',
  styleUrls: ['./chart-homepage.component.scss'],
})
export class ChartHomepageComponent implements OnInit {
  @ViewChild('chart', { static: true }) element: ElementRef | any;
  style: object = {};
  countDefault: number = 0;
  MIN_DIMENSIONS_PX: number = 0;

  constructor() {}

  ngOnInit(): void {}

  validate = (event: ResizeEvent): boolean => {
    this.countDefault += 1;
    this.MIN_DIMENSIONS_PX =
      this.countDefault === 1
        ? this.element.nativeElement.offsetHeight
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
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`,
    };
  };

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.countDefault = 0;
    this.onResizeEnd = (event: ResizeEvent): void => {
      this.style = {
        height: '100%',
      };
    };
  }
}

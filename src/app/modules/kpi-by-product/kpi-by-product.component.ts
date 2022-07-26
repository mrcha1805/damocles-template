import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Prototype from '../../data/prototype-data.json';
import { ThemePalette } from '@angular/material/core';
import { NgxPopperjsTriggers, NgxPopperjsPlacements } from 'ngx-popperjs';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}
@Component({
  selector: 'app-kpi-by-product',
  templateUrl: './kpi-by-product.component.html',
  styleUrls: ['./kpi-by-product.component.scss'],
})
export class KpiByProductComponent implements OnInit {
  @Output() outputFromChild = new EventEmitter<string>();

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
  search: any;
  myKPI: any[] = Prototype.KpiByProduct;
  constructor() {}

  ngOnInit(): void {}

  toggle1(list: any, item: any, index: number) {
    list.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    item.isSelected = true;

    setTimeout(() => {
      this.outputFromChild.emit('selected');
    }, 500);
  }
}

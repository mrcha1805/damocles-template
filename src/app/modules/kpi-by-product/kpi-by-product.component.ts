import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-kpi-by-product',
  templateUrl: './kpi-by-product.component.html',
  styleUrls: ['./kpi-by-product.component.scss'],
})
export class KpiByProductComponent implements OnInit {
  search: any;
  positionOptions: TooltipPosition[] = [
    'after',
    'before',
    'above',
    'below',
    'left',
    'right',
  ];
  position = new FormControl(this.positionOptions[0]);
  myKPI: any[] = [
    {
      image: '../../../assets/images/project_default.png',
      name: 'Loan',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'Credit Card',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
    {
      image: '../../../assets/images/project_default.png',
      name: 'Finance',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis accumsan lorem.',
      isSelected: false,
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  toggle1(list: any, item: any, index: number) {
    list.forEach((e: any, i: any) => {
      if (i !== index) e.isSelected = false;
    });
    item.isSelected = !item.isSelected;
  }
}

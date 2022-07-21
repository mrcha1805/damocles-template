import { Component, OnInit } from '@angular/core';
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
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.scss'],
})
export class KpiComponent implements OnInit {
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
  term = '';
  affinitySelected = '';
  index = 0;
  dataMaster: any = [];

  constructor() {}

  ngOnInit() {
    this.affinitySelected = '';
    this.selectItemAll = true;
    this.dataMaster = Prototype.Kpi;
  }

  selectSubLevel(sub: any, header: any) {
    console.log(sub);
    console.log(header);

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        if (data.label === header.label) {
          data.selected = false;
          console.log('--->' + data.label);
          if (data.subLevel?.every((t: any) => t.selected) == true) {
            data.indeterminate = false;
            data.selected = true;
          } else {
            let unselect = true;
            data.subLevel?.forEach((sub: any) => {
              if (sub.selected) {
                unselect = false;
              }
            });
            if (unselect) {
              data.selected = false;
              data.indeterminate = false;
            } else {
              data.selected = false;
              data.indeterminate = true;
            }
          }
        }
      });
    });
  }

  setAllItem(select: boolean, header: any) {
    console.log('setAll');

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        if (data.label === header.label) {
          data.subLevel?.forEach((t: any) => (t.selected = select));
        }
      });
    });
  }

  selectAll(event: boolean) {
    this.selectItemAll = event;
    console.log(event);
    console.log(this.selectItemAll);

    this.dataMaster.forEach((element: any) => {
      element.data.forEach((data: any) => {
        data.selected = this.selectItemAll;
        if (this.selectItemAll && data.indeterminate) {
          data.indeterminate = false;
        }
        if (!this.selectItemAll) {
          data.indeterminate = false;
        }
        data.subLevel?.forEach((sub: any) => {
          sub.selected = this.selectItemAll;
        });
      });
    });
  }

  iconDropdownGroup(open: boolean, header: any) {
    this.dataMaster.find((element: any) => {
      if (element.group === header.group) {
        element.dropdownShow = open;
        if (open) {
          element.iconSrc = '../assets/images/down.png';
        } else {
          element.iconSrc = '../assets/images/up.png';
        }
      }
    });
  }

  iconDropdownSubGroup(open: boolean, header: any) {
    this.dataMaster.find((element: any) => {
      element.data.find((data: any) => {
        if (data.label === header.label) {
          data.dropdownShow = open;
          if (open) {
            data.iconSrc = '../assets/images/down.png';
          } else {
            data.iconSrc = '../assets/images/up.png';
          }
        }
      });
    });
  }
}

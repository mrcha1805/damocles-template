import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'filterKpiDropdown' })
export class FilterKpiDropDownPipe implements PipeTransform {
  transform(value: any, search: string): any {
    search = search.toLowerCase();
    if (!value) return null;
    if (!search) {
      value.forEach((o1: any) => {
        o1.dropdownShow = false;
        o1.data.forEach((o2: any) => {
          o2.dropdownShow = false;
        });
      });
      return value;
    }
    var filter = value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(search);
    });

    filter.forEach((o1: any) => {
      o1.dropdownShow = true;
      o1.data.forEach((o2: any) => {
        o2.dropdownShow = true;
      });
    });

    return filter;
  }
}

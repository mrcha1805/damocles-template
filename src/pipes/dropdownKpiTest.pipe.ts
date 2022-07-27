import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({ name: 'filterKpiTestDropdown' })
export class FilterKpiTestDropDownPipe implements PipeTransform {
  transform(value: any, search: string): any {
    var arrowUp = './assets/images/up.png';
    var arrowDown = './assets/images/down.png';

    if (!value) return null;
    if (!search) {
      value.forEach((o1: any) => {
        o1.dropdownShow = false;
        o1.iconSrc = arrowDown;
      });
      return value;
    }

    search = search.toLowerCase();

    var result = value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(search);
    });

    result = result.filter((item: any) => {
      item.dropdownShow = JSON.stringify(item).toLowerCase().includes(search);
      item.iconSrc = item.dropdownShow ? arrowUp : arrowDown;
      return item.subLevel.filter((o1: any) => {
        o1.dropdownShow = JSON.stringify(o1).toLowerCase().includes(search);
        o1.iconSrc = o1.dropdownShow ? arrowUp : arrowDown;
      });
    });

    console.log(result);

    return result;
  }
}

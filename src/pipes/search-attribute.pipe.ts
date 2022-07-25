import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filterAttribute' })
export class FilterAttributePipe implements PipeTransform {
  transform(value: any, search: string, attr: string): any {
    if (!value) return null;
    if (!search) {
      return value;
    }

    search = search.toLowerCase();

    var result = value.filter((item: any) => {
      return String(item[attr]).toLowerCase().includes(search);
    });

    return result;
  }
}

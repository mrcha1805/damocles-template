import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterSearchPipe implements PipeTransform {
  transform(value: any, search: string): any {
    if (!value) return null;
    if (!search) return value;
    search = search.toLowerCase();
    return value.filter((item: any) => {
      return JSON.stringify(item).toLowerCase().includes(search);
    });
  }
}

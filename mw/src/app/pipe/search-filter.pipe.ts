import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  standalone: true // ✅ If you're using standalone components
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any[], searchfilter: string): any[] {
    if (!value || !searchfilter) {
      return value;
    }

    searchfilter = searchfilter.toLowerCase();

    return value.filter((item: any) => {
      return (
        (item.title?.toLowerCase?.() || '').includes(searchfilter) ||
        (item.subtitle?.toLowerCase?.() || '').includes(searchfilter) ||
        (item.batchCode?.toLowerCase?.() || '').includes(searchfilter) ||
        (item.name?.toLowerCase?.() || '').includes(searchfilter) ||
        (item._id?.toLowerCase?.() || '').includes(searchfilter) ||
        (item.phoneNumber?.toLowerCase?.() || '').includes(searchfilter)  ||
        (item.email?.toLowerCase?.() || '').includes(searchfilter)  ||
        (item.subject?.toLowerCase?.() || '').includes(searchfilter)
      );
    });
  }
}

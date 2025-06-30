import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStudentByBatch'
})
export class FilterStudentByBatchPipe implements PipeTransform {

   transform(value: any[], batch: string): any[] {
    if (!value || !batch) {
      return value;
    }

    return value.filter((student: any) =>
      student.batch_code?.includes(batch)
    );
  }

}

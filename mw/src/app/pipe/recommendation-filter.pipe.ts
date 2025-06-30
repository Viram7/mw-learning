

import { Pipe, PipeTransform } from '@angular/core';
import { retry } from 'rxjs';

@Pipe({
  name: 'recommendationFilter'
})
export class RecommendationFilterPipe implements PipeTransform {

  transform(course: any ,buyed_batch :[], current_student_exams : []): any {

    if(!course || !current_student_exams && !buyed_batch ){
      return course;
    }

    return course.filter((course : any)=>{
      
    //   return recommendationFilter.includes(Batche.batchCode)


    return current_student_exams.some(exam_name => course.stu_for.includes(exam_name)) && !buyed_batch.some(batch_name => course.batchCode.includes(batch_name) ) ;
      });
      
   

    return null;
  }

}

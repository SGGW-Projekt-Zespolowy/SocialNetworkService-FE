import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundedDate'
})
export class RoundedDatePipe implements PipeTransform {

  day = 86400000;

  transform(value: Date): string {
    const dateNow = new Date();
    const timeDiff = dateNow.getTime() - value.getTime();

    if(timeDiff < this.day) {
      return `${timeDiff/3600000}h temu`
    }

    return 'coś nie tak';
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundedDate'
})
export class RoundedDatePipe implements PipeTransform {

  hour = 3600000;
  day = 86400000;
  week = 604800000;
  month = 2419200000;
  year = 29030400000;

  transform(value: Date): string {
    const dateNow = new Date();
    const timeDiff = dateNow.getTime() - value.getTime();

    if(timeDiff < this.hour) {
      return `chwilę temu`;
    }

    if(timeDiff < this.day) {
      const hours = Math.round(timeDiff/this.hour);
      return `${hours}h temu`;
    }

    if(timeDiff < this.week) {
      const days = Math.round(timeDiff/this.day);
      return `${days} dni temu`;
    }

    if(timeDiff < this.month) {
      const weeks = Math.round(timeDiff/this.week);
      return `${weeks} tygodnie temu`;
    }

    if(timeDiff < this.year) {
      const months = Math.round(timeDiff/this.month);
      return `${months} miesięcy temu`;
    }

    const years = Math.round(timeDiff/this.year);
    return `${years} lat temu`;
  }

}

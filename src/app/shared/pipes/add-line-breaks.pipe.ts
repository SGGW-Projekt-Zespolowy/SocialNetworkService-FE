import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLineBreaks'
})
export class AddLineBreaksPipe implements PipeTransform {

  transform(value: string): unknown {
    return value.replaceAll('\n', '<br>');
  }

}

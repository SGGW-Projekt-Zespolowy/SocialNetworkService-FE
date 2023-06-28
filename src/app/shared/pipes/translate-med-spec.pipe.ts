import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateMedSpec'
})
export class TranslateMedSpecPipe implements PipeTransform {

  transform(value: unknown, specializations: {key: string, value: string}[],
  ): unknown {
    return specializations.find(spec => spec.key === value).value
  }

}

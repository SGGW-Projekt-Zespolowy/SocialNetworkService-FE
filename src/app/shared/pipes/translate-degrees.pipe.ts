import { Pipe, PipeTransform } from '@angular/core';
import { MedicalConsts } from 'src/app/models/specializations.model';

@Pipe({
  name: 'translateDegrees'
})
export class TranslateDegreesPipe implements PipeTransform {

  transform(key: unknown): unknown {
    return MedicalConsts.degrees.find(x => x.key === key).value;
  }

}

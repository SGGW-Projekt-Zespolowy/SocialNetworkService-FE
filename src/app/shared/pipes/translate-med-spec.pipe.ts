import { Pipe, PipeTransform } from '@angular/core';
import { MedicalConsts } from 'src/app/models/specializations.model';

@Pipe({
  name: 'translateMedSpec'
})
export class TranslateMedSpecPipe implements PipeTransform {

  transform(value: unknown): string {
    return MedicalConsts.specializations.find(spec => spec.key === value).value
  }

}

import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomAuthValidators {
    static passwordIsTheSame(
        target: string,): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceCtrl = control;
            const targetCtrl = control.root.get(target);
            
            return sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value
                ? { mismatch: true }
                : null;
        };
    }
}
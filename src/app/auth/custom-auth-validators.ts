import { AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, debounceTime, first, map, switchMap } from "rxjs";
import { AuthService } from "../services/auth.service";

export class CustomAuthValidators {

    static matchValidator(source: string, target: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const sourceCtrl = control.get(source);
            const targetCtrl = control.get(target);

            const mismatch = sourceCtrl && targetCtrl && sourceCtrl.value !== targetCtrl.value;

            if (mismatch) {
                targetCtrl.setErrors({ mismatch: true })
            }

            return null;
        }
    }

    static validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    static EmailIsUnique(authService: AuthService): AsyncValidatorFn {
        return (control: AbstractControl):  Observable<ValidationErrors | null> => {
            return control.valueChanges
              .pipe(
                debounceTime(350),
                switchMap(value => authService.isEmailUnique(value)),
                map((unique: boolean) => (!unique ? null : {emailNotUnique: control.value})),
                first()
              )
        }
    }
}
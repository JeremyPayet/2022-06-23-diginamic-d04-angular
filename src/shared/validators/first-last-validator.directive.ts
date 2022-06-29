import { Directive } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[tcFirstLastValidator]',
  providers: [{
    provide: NG_VALIDATORS, useExisting: FirstLastValidatorDirective,
    multi: true
  }]
})
export class FirstLastValidatorDirective implements Validator {
  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    if (control?.get("surname")?.value == control?.get("name")?.value) {
      return {
        error: "Nom et prénom sont identiques"
      }
    }
    return null;
  }

}

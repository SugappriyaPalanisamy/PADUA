import { Validator, NG_VALIDATORS, FormControl } from '@angular/forms'
import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[gteValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: GteValidatorDirective, multi: true }
  ]
})
export class GteValidatorDirective implements Validator, OnInit {
  ngOnInit() {}

  validate(c: FormControl) {
    let v: number = +c.value;
    if (isNaN(v)) {
      return { 'gte': true, 'requiredValue': 45,'maxValue' :90}
    }
    if (v <= 45 || v >= 90) {
      return { 'gte': true, 'requiredValue': 45, 'maxValue': 90 }
    }
    return null;
  }
}

import { AbstractControl } from '@angular/forms';

export function ValidateUrl(control: AbstractControl) {
  if (!control.value.startsWith('https')) {
    return { validUrl: true };
  }
  return null;
}
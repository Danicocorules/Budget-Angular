import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationsService {

  constructor() { }

  validationForm( form: FormGroup, field: string ) {
    return form.controls[field].touched && form.controls[field].errors;
  }

}

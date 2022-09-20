import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ValidationsService } from '../services/validations/validations.service';
import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  budgetIntro!: number;
  budgetCurrent!: number;

  numberRegEx = /^[+]?([.]\d+|\d+([.]\d+)?)$/;

  constructor( private fb: FormBuilder,
               private validationsServ: ValidationsService,
               private counterServ: CounterService ) {}

  budgetForm: FormGroup = this.fb.group({
    budget: [this.budgetIntro, [ Validators.required, Validators.pattern(this.numberRegEx), Validators.min(1) ]],
  })

  ngOnInit(): void {
  }

  getBudget( budget:number ) {

      this.budgetIntro = Number(budget);
      this.budgetCurrent = Number(budget);
      this.counterServ.remainingBudget = this.budgetIntro;
      this.budgetForm.controls['budget'].disable();

  }

  validate( field: string ) {
    return this.validationsServ.validationForm( this.budgetForm, field );
  }

}

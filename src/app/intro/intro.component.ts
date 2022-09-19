import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  budgetIntro!: number;
  numberRegEx = /^[+]?([.]\d+|\d+([.]\d+)?)$/;

  constructor( private fb: FormBuilder ) {}

  budgetForm: FormGroup = this.fb.group({
    budget: [this.budgetIntro, [ Validators.required, Validators.pattern(this.numberRegEx), Validators.min(1) ]],
  })

  ngOnInit(): void {
  }

  getBudget( budget:number ) {

    console.log(typeof(budget));

      this.budgetIntro = Number(budget);
      console.log(typeof(this.budgetIntro));
      console.log('asdsadasd');

  }

  validate( field: string ) {

    return this.budgetForm.controls[field].touched && this.budgetForm.controls[field].errors

  }

}

import { Component } from '@angular/core';
import { billForm } from '../interfaces/bill.interface'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidationsService } from '../services/validations/validations.service';
import { CounterService } from '../services/counter/counter.service'

@Component({
  selector: 'app-form-expense',
  templateUrl: './form-expense.component.html',
  styleUrls: ['./form-expense.component.css']
})

export class FormExpenseComponent {

  numberRegEx = /^[+]?([.]\d+|\d+([.]\d+)?)$/;
  billsAmount: billForm[] = [];

  constructor( private fb: FormBuilder,
               private validationsServ: ValidationsService,
               public counterServ: CounterService ) { }

  billsForm: FormGroup = this.fb.group({
    spent: [ , [Validators.required]],
    quantity: [ , [Validators.required, Validators.pattern(this.numberRegEx), Validators.min(1)]]
  })

  addBill() {

    if ( this.billsForm.value.spent === null || this.billsForm.value.quantity === null ) {
      this.billsForm.markAllAsTouched();
      return;
    }

    if ( this.counterServ.remainingBudget <= 0 ) {
      // ToDo - block add expense
      this.billsForm.controls['spent'].disable();
      this.billsForm.controls['quantity'].disable();
      return;
    } else {
      this.billsForm.controls['spent'].enable();
      this.billsForm.controls['quantity'].enable();
    }

    const newBill: billForm = {
      spent : this.billsForm.value.spent,
      quantity : Number(this.billsForm.value.quantity),
      id : Date.now(),
    }
    this.billsAmount.push(newBill);
    this.counterServ.addedExpense( newBill.quantity );
    this.billsForm.reset();
  }

  deleteBill(pos: number) {

    let quantity = this.billsAmount[pos].quantity;
    this.billsAmount.splice( pos, 1 );
    this.counterServ.deleteExpense(quantity);
  }

  validate( field: string ) {
    return this.validationsServ.validationForm(this.billsForm, field)
  }
}

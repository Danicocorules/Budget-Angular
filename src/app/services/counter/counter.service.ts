import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CounterService {

  remainingBudget!: number;

  constructor() { }

  addedExpense( quantity: number ) {
    this.remainingBudget -= quantity;
    if ( this.remainingBudget >= 0 ) {
      console.log('asddsaasd');

      // -------------------------------
      // // ToDo - Bloquear el Formulario (con un observable???)
      // this.billsForm.controls['spent'].disable();
      // this.billsForm.controls['quantity'].disable();
      // -------------------------------
    }
  }

  deleteExpense ( quantity: number ) {
    console.log('asdasdas');
    this.remainingBudget += quantity;
  }

}

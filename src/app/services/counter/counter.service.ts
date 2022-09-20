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
  }

  deleteExpense ( quantity: number ) {
    this.remainingBudget += quantity;
  }

}

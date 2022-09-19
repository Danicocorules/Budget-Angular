import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-budget',
  templateUrl: './current-budget.component.html',
  styleUrls: ['./current-budget.component.css']
})
export class CurrentBudgetComponent implements OnInit {


  @Input() budgetRecibed: number = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

}

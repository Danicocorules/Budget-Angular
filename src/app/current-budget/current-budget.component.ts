import { Component, OnInit, Input } from '@angular/core';
import { CounterService } from '../services/counter/counter.service';

@Component({
  selector: 'app-current-budget',
  templateUrl: './current-budget.component.html',
  styleUrls: ['./current-budget.component.css']
})
export class CurrentBudgetComponent implements OnInit {


  @Input() budgetRecibed: number = 0;
  @Input() currentBudget: number = 0;

  constructor( public counterServ: CounterService ) {
   }

  ngOnInit(): void {
  }

}

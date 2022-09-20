import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { ValidationsService } from './services/validations/validations.service';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { CurrentBudgetComponent } from './current-budget/current-budget.component';
import { FormExpenseComponent } from './form-expense/form-expense.component';
import { BillCardComponent } from './bill-card/bill-card.component';
import { CounterService } from './services/counter/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CurrentBudgetComponent,
    FormExpenseComponent,
    BillCardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [
    ValidationsService,
    CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

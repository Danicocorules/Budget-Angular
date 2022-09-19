import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { CurrentBudgetComponent } from './current-budget/current-budget.component';
import { FormExpenseComponent } from './form-expense/form-expense.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    CurrentBudgetComponent,
    FormExpenseComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

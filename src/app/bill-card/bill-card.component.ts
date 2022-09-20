import { Component, Input, Output, EventEmitter } from '@angular/core';
import { billForm } from '../interfaces/bill.interface'

@Component({
  selector: 'app-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.css']
})
export class BillCardComponent {

  @Input() listBills!: billForm[];
  @Output() deletedBill: EventEmitter<number> = new EventEmitter();

  deletedBillPos!: number;

  constructor() { }

  deleteBill(pos: number) {
    this.deletedBillPos = pos;
    this.deletedBill.emit(this.deletedBillPos);
  }

}

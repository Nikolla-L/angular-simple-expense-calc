import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] | undefined;
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>()
  
  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClick = (item: BudgetItem) => {
    this.delete.emit(item);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/shared/models/budget-item.module';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  @Input() budgetItems: BudgetItem[] | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}

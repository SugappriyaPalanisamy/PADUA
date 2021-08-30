import { Component, OnInit, Input } from '@angular/core';
import { ICapitalBalanceOutputModel } from '../model/capital-balance-output.model';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  @Input() capitalBalanceOutput: ICapitalBalanceOutputModel[];

  constructor() { }

  ngOnInit(): void {
  }

}

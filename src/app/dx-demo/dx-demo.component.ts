import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IGridColumn } from '../grid/grid.component';

@Component({
  selector: 'app-dx-demo',
  templateUrl: './dx-demo.component.html',
  styleUrls: ['./dx-demo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DxDemoComponent implements OnInit {
  rows: ITestRow[] = [];
  columns: IGridColumn[] = [];

  ngOnInit(): void {
    this.columns = [
      { label: 'First Name' },
      { label: 'Last Name' },
    ];

    this.rows = [
      {
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        firstName: 'Jack',
        lastName: 'Black'
      },
    ];
  }
}

export interface ITestRow {
  firstName: string;
  lastName: string;
}

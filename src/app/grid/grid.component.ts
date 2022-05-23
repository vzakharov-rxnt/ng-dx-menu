import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  @Input() rows: any[] = [];
  @Input() columns: IGridColumn[] = [];
  // @ts-ignore
  @Input() rowTemplate: TemplateRef<any>;
}

export interface IGridColumn {
  label: string;
}

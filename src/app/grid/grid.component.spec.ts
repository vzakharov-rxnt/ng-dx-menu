import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridComponent, IGridColumn } from './grid.component';
import { MockBuilder } from 'ng-mocks';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { By } from '@angular/platform-browser';
import { GridChildComponent } from '../grid-child/grid-child.component';

@Component({
  selector: 'test-container',
  template: `<app-grid [rows]="rows"
                       [columns]="columns"
                       [rowTemplate]="rowTemplate"></app-grid>

  <ng-template #rowTemplate let-row>
    <tr>
      <td>{{ row.firstName }}</td>
      <td>{{ row.lastName }}</td>
    </tr>
  </ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
class TestContainer {
  columns: IGridColumn[] = [];
  rows: any[] = [];

  constructor() {}
}

describe('GridComponent', () => {
  let component: TestContainer;
  let fixture: ComponentFixture<TestContainer>;

  beforeEach(() => {
    return MockBuilder()
      .keep(TestContainer)
      .keep(GridComponent)
      .keep(DxDataGridModule)

      .mock(GridChildComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestContainer);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render rows', async() => {
    component.columns = [
      { label: 'First Name' },
      { label: 'Last Name' },
    ];
    component.rows = [
      {
        firstName: 'John',
        lastName: 'Doe'
      },
      {
        firstName: 'Jack',
        lastName: 'Black'
      },
    ];

    fixture.detectChanges();
    await fixture.whenStable();

    const gridChild = fixture.debugElement.query(By.directive(GridChildComponent));
    const gridChildInstance = gridChild.componentInstance; // TypeError: Cannot read properties of null (reading 'componentInstance')

    const gridInstance = fixture.debugElement.query(By.directive(GridComponent)).componentInstance;

    // example of what could be tested
    const methodStub = spyOn(gridInstance, 'someFuncToBeCalled');
    gridChildInstance.someEvent.emit();
    expect(methodStub).toHaveBeenCalledOnceWith();
  });
});

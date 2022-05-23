import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxDemoComponent } from './dx-demo.component';
import { MockBuilder } from 'ng-mocks';

describe('DxDemoComponent', () => {
  let component: DxDemoComponent;
  let fixture: ComponentFixture<DxDemoComponent>;

  beforeEach(() => {
    return MockBuilder()
      .keep(DxDemoComponent);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxDemoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

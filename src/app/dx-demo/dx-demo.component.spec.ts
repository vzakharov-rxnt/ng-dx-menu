import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DxDemoComponent } from './dx-demo.component';

describe('DxDemoComponent', () => {
  let component: DxDemoComponent;
  let fixture: ComponentFixture<DxDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DxDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DxDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

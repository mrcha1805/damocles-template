import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnDuoStackedChartComponent } from './column-duo-stacked-chart.component';

describe('ColumnDuoStackedChartComponent', () => {
  let component: ColumnDuoStackedChartComponent;
  let fixture: ComponentFixture<ColumnDuoStackedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnDuoStackedChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnDuoStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

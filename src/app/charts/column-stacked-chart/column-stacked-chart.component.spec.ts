import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnStackedChartComponent } from './column-stacked-chart.component';

describe('ColumnStackedChartComponent', () => {
  let component: ColumnStackedChartComponent;
  let fixture: ComponentFixture<ColumnStackedChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnStackedChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnStackedChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

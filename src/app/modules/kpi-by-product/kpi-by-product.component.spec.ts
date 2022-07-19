import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KpiByProductComponent } from './kpi-by-product.component';

describe('KpiByProductComponent', () => {
  let component: KpiByProductComponent;
  let fixture: ComponentFixture<KpiByProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KpiByProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KpiByProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

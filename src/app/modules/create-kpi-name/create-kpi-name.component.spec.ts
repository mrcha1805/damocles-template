import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKpiNameComponent } from './create-kpi-name.component';

describe('CreateKpiNameComponent', () => {
  let component: CreateKpiNameComponent;
  let fixture: ComponentFixture<CreateKpiNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKpiNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKpiNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

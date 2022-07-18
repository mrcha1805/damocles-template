import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectNameComponent } from './create-project-name.component';

describe('CreateProjectNameComponent', () => {
  let component: CreateProjectNameComponent;
  let fixture: ComponentFixture<CreateProjectNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProjectNameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

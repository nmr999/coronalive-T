import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthconditionComponent } from './healthcondition.component';

describe('HealthconditionComponent', () => {
  let component: HealthconditionComponent;
  let fixture: ComponentFixture<HealthconditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthconditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthconditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

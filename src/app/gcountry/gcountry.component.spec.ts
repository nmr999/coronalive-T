import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GcountryComponent } from './gcountry.component';

describe('GcountryComponent', () => {
  let component: GcountryComponent;
  let fixture: ComponentFixture<GcountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GcountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

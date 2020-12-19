import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcompComponent } from './ncomp.component';

describe('NcompComponent', () => {
  let component: NcompComponent;
  let fixture: ComponentFixture<NcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

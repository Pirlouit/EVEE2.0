import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockCalendarComponent } from './clock-calendar.component';

describe('ClockCalendarComponent', () => {
  let component: ClockCalendarComponent;
  let fixture: ComponentFixture<ClockCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

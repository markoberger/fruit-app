import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaladDashboardComponent } from './salad-dashboard.component';

describe('SaladDashboardComponent', () => {
  let component: SaladDashboardComponent;
  let fixture: ComponentFixture<SaladDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaladDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaladDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

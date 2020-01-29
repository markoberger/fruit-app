import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitSaladComponent } from './fruit-salad.component';

describe('FruitSaladComponent', () => {
  let component: FruitSaladComponent;
  let fixture: ComponentFixture<FruitSaladComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitSaladComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitSaladComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

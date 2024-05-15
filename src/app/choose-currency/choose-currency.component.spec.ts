import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCurrencyComponent } from './choose-currency.component';

describe('ChooseCurrencyComponent', () => {
  let component: ChooseCurrencyComponent;
  let fixture: ComponentFixture<ChooseCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseCurrencyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

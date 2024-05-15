import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChooseCurrencyComponent } from './tipoCambio.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <select id='selectA' name="selectA" #selectA (change)="onSelectedCurrent(selectA.value)">
        <option [selected]="baseCurrency === 'EUR' " >EUR</option>
    </select>
  `
})

class TestCurrencyComponent {
  baseCurrency = '';
}

describe('ChooseCurrencyComponent', () => {
  let component: ChooseCurrencyComponent;
  let fixture: ComponentFixture<ChooseCurrencyComponent>;
  let directiveComponent: TestCurrencyComponent;
  let directiveFixture: ComponentFixture<TestCurrencyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChooseCurrencyComponent],
      declarations: [TestCurrencyComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ChooseCurrencyComponent);
    component = fixture.componentInstance;
    directiveFixture = TestBed.createComponent(TestCurrencyComponent);
    directiveComponent = directiveFixture.componentInstance;
    fixture.detectChanges();
    directiveFixture.detectChanges();
  });

  it('should create ChooseCurrencyComponent', () => {
    const fixture = TestBed.createComponent(ChooseCurrencyComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show currency and currencySellValue Inputs', () => {
    directiveComponent.baseCurrency = 'EUR';
    directiveFixture.detectChanges();
    let e = (document.getElementById("selectA")) as HTMLSelectElement;
    var sel = e.selectedIndex;
    var opt = e.options[sel].value;
    expect(opt).toEqual(directiveComponent.baseCurrency);
  });

  it('should call callCurrencyList() on init method',()=>{
    spyOn(component,'callCurrencyList').and.callThrough();
    component.ngOnInit();
    expect(component.callCurrencyList).toHaveBeenCalled()
})

  it('should emit with parameter "Active" when onChange is called with "Active"', () => {
    const spy = spyOn(component.newBaseCurrency, 'emit');
    component.onSelectedCurrent('Active');
    expect(spy).toHaveBeenCalledWith('Active');
  });
});

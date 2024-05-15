import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasasComponent } from './tasas.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div class="tasas"><p>Venta: {{currency}} {{currencySellValue}}</p></div>
  `
})

class TestTasasComponent {
  currency = '';
  currencySellValue = '';
}

describe('TasasComponent', () => {
  let component: TasasComponent;
  let directiveComponent: TestTasasComponent
  let fixture: ComponentFixture<TasasComponent>;
  let directiveFixture: ComponentFixture<TestTasasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TasasComponent],
      declarations: [TestTasasComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(TasasComponent);
    directiveFixture = TestBed.createComponent(TestTasasComponent);
    component = fixture.componentInstance;
    directiveComponent = directiveFixture.componentInstance;
    fixture.detectChanges();
    directiveFixture.detectChanges();
  });

  it('should create TasasComponent', () => {
    const fixture = TestBed.createComponent(TasasComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should show currency and currencySellValue Inputs', () => {
    directiveComponent.currency = '$';
    directiveComponent.currencySellValue = '0.98'
    directiveFixture.detectChanges();
    let tagContent = document.getElementsByClassName("tasas")[0].textContent;
    expect(tagContent).toEqual('Venta: '+directiveComponent.currency+' '+directiveComponent.currencySellValue+'');
  });

});

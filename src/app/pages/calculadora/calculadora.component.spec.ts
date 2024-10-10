import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraComponent } from './calculadora.component';
import { TasasComponent } from '../../components/tasas/tasas.component';
import { ChooseCurrencyComponent } from '../../components/tipoCambio/tipoCambio.component';

describe('CalculadoraComponent', () => {
  let component: CalculadoraComponent;
  let fixture: ComponentFixture<CalculadoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CalculadoraComponent, TasasComponent, ChooseCurrencyComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(CalculadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CalculadoraComponent', () => {
    const fixture = TestBed.createComponent(CalculadoraComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have TasasComponent', () => {
    const fixture = TestBed.createComponent(CalculadoraComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-tasas')).not.toBe(null);
  });

  it('should have ChooseCurrencyComponent', () => {
    const fixture = TestBed.createComponent(CalculadoraComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-tipoCambio')).not.toBe(null);
  });

  it('should call executeAPIS() on init method',()=>{
      spyOn(component,'executeAPIS').and.callThrough();
      component.ngOnInit();
      expect(component.executeAPIS).toHaveBeenCalled()
  })

});

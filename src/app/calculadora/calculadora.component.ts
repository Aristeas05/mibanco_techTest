import { Component } from '@angular/core';
import { TasasComponent } from '../tasas/tasas.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ChooseCurrencyComponent } from '../tipoCambio/tipoCambio.component';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [TasasComponent, FormsModule, HttpClientModule, ChooseCurrencyComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css',
  providers: [ApiService]
})

export class CalculadoraComponent {

  resp: any = {};

  initBaseCurrency: string = 'USD';
  initChangeCurrency: string = 'EUR';
  baseCurrencySymbol: string = '$';
  initValue: number = 0;
  changeValue: number = 0;
  currency: number = 0;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void{
    this.executeAPIS()
  }

  //Parent Methods
  executeAPIS(): void{
    this.callExchangeData();
    this.callCurrencyData();
  }

  changeCurrency(): void{
    let oldBase = this.initBaseCurrency;
    let oldChange = this.initChangeCurrency;
    
    this.initBaseCurrency = oldChange;
    this.initChangeCurrency = oldBase;
    this.initValue = +(this.initValue*this.currency).toFixed(10);
    this.executeAPIS()
  }

  callExchangeData(): void{
    this.apiService.getExchangeData(this.initBaseCurrency, this.initChangeCurrency).subscribe( 
    data => {
      this.resp = data;      
      let keys = this.resp.data;
      const map = new Map(Object.entries(keys));
      this.currency = map.get(this.initChangeCurrency) as number;
    },
    err => console.log('HTTP Error: ', err),
    () => console.log('HTTP request completed.')
  )
  }

  callCurrencyData(): void{
    this.apiService.getCurrencyData(this.initBaseCurrency).subscribe( rspn => { 
      let keys = rspn.data;
      const map = new Map(Object.entries(keys));
      let currencySymbol = map.get(this.initBaseCurrency) as any;
      this.baseCurrencySymbol = currencySymbol.symbol;
    },
    err => console.log('HTTP Error: ', err),
    () => console.log('HTTP request completed.')
  );
  }

  //Output Child Methods
  onSelectedCurrent(newItem: string): void{
    this.initBaseCurrency = newItem;
    this.executeAPIS();
  }

  onSelectedToConvert(newItem: string): void{
    this.initChangeCurrency = newItem;
    this.executeAPIS();
  }
}
import { Component } from '@angular/core';
import { TasasComponent } from '../tasas/tasas.component';
import { InputBoxComponent } from '../input-box/input-box.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [TasasComponent, InputBoxComponent, FormsModule, HttpClientModule],
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
    this.callExchangeData();
    this.callCurrencyData();
  }

  changeCurrency(){
    let oldBase = this.initBaseCurrency;
    let oldChange = this.initChangeCurrency;
    
    this.initBaseCurrency = oldChange;
    this.initChangeCurrency = oldBase;
    this.callExchangeData();
    this.callCurrencyData();
  }

  callExchangeData(){
    this.apiService.getExchangeData(this.initBaseCurrency, this.initChangeCurrency).subscribe( data => {
      this.resp = data;      
      let keys = this.resp.data;
      const map = new Map(Object.entries(keys));
      this.currency = map.get(this.initChangeCurrency) as number;
      console.log(this.resp);
    })
  }

  callCurrencyData(){
    this.apiService.getCurrencyData(this.initBaseCurrency).subscribe( rspn => { 
      let keys = rspn.data;
      const map = new Map(Object.entries(keys));
      let currencySymbol = map.get(this.initBaseCurrency) as any;
      this.baseCurrencySymbol = currencySymbol.symbol;
      console.log(this.resp);
    });
  }
}

/*{
  "data": {
    "EUR": {
      "symbol": "€",
      "name": "Euro",
      "symbol_native": "€",
      "decimal_digits": 2,
      "rounding": 0,
      "code": "EUR",
      "name_plural": "Euros",
      "type": "fiat"
    }
  }
}*/
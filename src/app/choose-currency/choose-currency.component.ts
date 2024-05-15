import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-choose-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './choose-currency.component.html',
  styleUrl: './choose-currency.component.css'
})
export class ChooseCurrencyComponent {

  @Input() baseCurrency: string = '';
  @Input() convertCurrency: string = '';
  @Output() newBaseCurrency = new EventEmitter<string>();
  @Output() newConvertCurrency = new EventEmitter<string>();

  resp: any = {};
  selectKeys: any[] = []

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void{
    this.callCurrencyList();
  }

  callCurrencyList(): void{
    this.apiService.getAllCurrencies().subscribe( rspn => { 
      this.selectKeys = Object.keys(rspn.data);
    });
  }

  onSelectedCurrent(value:string): void {
		this.baseCurrency = value;
    this.newBaseCurrency.emit(value);
    console.log(this.baseCurrency);
    
    
	}

  onSelectedToConvert(value:string): void {
		this.convertCurrency = value;
    this.newConvertCurrency.emit(value);
    console.log(this.convertCurrency);
	}

}

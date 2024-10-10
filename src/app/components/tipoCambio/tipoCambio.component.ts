import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tipoCambio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './tipoCambio.component.html',
  styleUrl: './tipoCambio.component.scss'
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
    },
    err => console.log('HTTP Error: ', err),
    () => console.log('HTTP request completed.')
  );
  }

  onSelectedCurrent(value:string): void {
		this.baseCurrency = value;
    this.newBaseCurrency.emit(value);
	}

  onSelectedToConvert(value:string): void {
		this.convertCurrency = value;
    this.newConvertCurrency.emit(value);
	}

}

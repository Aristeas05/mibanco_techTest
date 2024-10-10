import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasas',
  standalone: true,
  imports: [],
  templateUrl: './tasas.component.html',
  styleUrl: './tasas.component.scss'
})

export class TasasComponent implements OnChanges{

  @Input() currency: string = '';
  @Input() currencySellValue: string = '';

  currencyBuyValue: number = 0;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.currencyBuyValue = +(parseFloat(this.currencySellValue) - parseFloat(this.currencySellValue)*0.1).toFixed(10);
  }

  
}

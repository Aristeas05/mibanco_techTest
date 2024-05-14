import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasas',
  standalone: true,
  imports: [],
  templateUrl: './tasas.component.html',
  styleUrl: './tasas.component.css'
})
/*export class TasasComponent {
  @Input() currency: string ;
  ngOnChanges(changes: SimpleChanges) {
        
    this.doSomething(changes.currency.currentValue);
    // You can also use categoryId.previousValue and 
    // categoryId.firstChange for comparing old and new values
    
  }
}*/

export class TasasComponent{

  @Input() currency: string = '';
  @Input() currencySellValue: string = '';

  currencyBuyValue: number = 0;
  
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.currencyBuyValue = +(parseFloat(this.currencySellValue) - parseFloat(this.currencySellValue)*0.01).toFixed(10);
    console.log('algo: ', this.currencyBuyValue.toFixed(10));
  }

  
}

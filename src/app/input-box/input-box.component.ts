import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent implements OnChanges{
  @Input() tag: string = "";
  @Input() currencyText: string = "";
  @Input() valueMdl: string = "";
  @Input() valueQty: string = "";

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //this.valueQty = parseFloat(this.valueQty.currentValue);
    console.log('Changos: ', changes);
  }
}
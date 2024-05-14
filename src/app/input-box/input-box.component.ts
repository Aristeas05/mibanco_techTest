import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-box.component.html',
  styleUrl: './input-box.component.css'
})
export class InputBoxComponent {
  @Input() tag: string = "";
  @Input() currencyText: string = "";
  @Input() valueQty: string = "";
}
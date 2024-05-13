import { Component } from '@angular/core';
import { TasasComponent } from '../tasas/tasas.component';
import { InputBoxComponent } from '../input-box/input-box.component';
@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [TasasComponent, InputBoxComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

}

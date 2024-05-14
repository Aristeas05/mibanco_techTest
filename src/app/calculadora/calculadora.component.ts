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
  initValue: number = 0;
  changeValue: number = 0;
  currency: number = 0;

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void{
    this.llenarData();
  }

  changeCurrency(){
    let oldBase = this.initBaseCurrency;
    let oldChange = this.initChangeCurrency;
    
    this.initBaseCurrency = oldChange;
    this.initChangeCurrency = oldBase;
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData(this.initBaseCurrency, this.initChangeCurrency).subscribe( data => {
      this.resp = data;      
      let keys = this.resp.data;
      const map = new Map(Object.entries(keys));
      this.currency = map.get(this.initChangeCurrency) as number;
      console.log(this.resp);
    })
  }
}
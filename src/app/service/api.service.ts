import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //api_id: string = '91eb8f49c46b43e8b9a26689e733d2c5';
  api_id: string = 'fca_live_Zr7ZpFlBgh33q77tl00NgoTOosksTgnE1eNPI1uN';

  //private urlApi = 'https://openexchangerates.org/api/latest.json?app_id='+this.api_id;
  private urlApi = 'https://api.freecurrencyapi.com/v1/latest?apikey='+this.api_id;

  constructor(private http: HttpClient) { }

  public getData(baseCoin: string, changeCoin: string): Observable<any>{
    return this.http.get<any>(this.urlApi+'&base_currency='+baseCoin+'&currencies='+changeCoin);
  }
}

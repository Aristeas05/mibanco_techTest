import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //API Key
  api_key: string = 'fca_live_Zr7ZpFlBgh33q77tl00NgoTOosksTgnE1eNPI1uN';

  //Urls
  private URL_EXCHANGE_API = 'https://api.freecurrencyapi.com/v1/latest?apikey='+this.api_key;
  private URL_CURRENCYDATA_API = 'https://api.freecurrencyapi.com/v1/currencies?apikey='+this.api_key;

  //Constructor
  constructor(private http: HttpClient) { }

  //Methods
  public getExchangeData(baseCoin: string, changeCoin: string): Observable<any>{
    return this.http.get<any>(this.URL_EXCHANGE_API+'&base_currency='+baseCoin+'&currencies='+changeCoin);
  }

  public getCurrencyData(baseCoin: string): Observable<any>{
    return this.http.get<any>(this.URL_CURRENCYDATA_API+'&currencies='+baseCoin);
  }

  public getAllCurrencies(): Observable<any>{
    return this.http.get<any>(this.URL_CURRENCYDATA_API);
  }
}

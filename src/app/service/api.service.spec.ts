import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('can test getExchangeData', () =>{
    const testData: any = {
      "data": {
          "EUR": Number
      }
    }
    service.getExchangeData('USD','EUR')
      .subscribe( data =>
        expect(data).toEqual(testData)
      );
      const req = httpTestingController.expectOne('https://api.freecurrencyapi.com/v1/latest?apikey='+service.api_key+'&base_currency=USD&currencies=EUR');

      expect(req.request.method).toEqual('GET');

      req.flush(testData);

      httpTestingController.verify()
  });

  it('can test getCurrencyData', () =>{
    const testData: any = {
      "data": {
          "USD": {
              "symbol": "$",
              "name": "US Dollar",
              "symbol_native": "$",
              "decimal_digits": 2,
              "rounding": 0,
              "code": "USD",
              "name_plural": "US dollars",
              "type": "fiat"
          }
      }
  }
    service.getCurrencyData('USD')
      .subscribe( data =>
        expect(data).toEqual(testData)
      );
      const req = httpTestingController.expectOne('https://api.freecurrencyapi.com/v1/currencies?apikey='+service.api_key+'&currencies=USD');

      expect(req.request.method).toEqual('GET');

      req.flush(testData);

      httpTestingController.verify()
  });
});

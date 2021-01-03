import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IExchangeRatesResponse } from './payloads/iexchange-rates-response';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  constructor(private httpClient: HttpClient) {}

  getRates = (base: string): Observable<IExchangeRatesResponse> =>
    this.httpClient.get<IExchangeRatesResponse>(
      `https://api.exchangeratesapi.io/latest?base=${base}`
    );
}

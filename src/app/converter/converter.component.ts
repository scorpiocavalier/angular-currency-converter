import { Component, OnInit } from '@angular/core';
import { ExchangeRatesService } from '../services/exchange-rates.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
})
export class ConverterComponent implements OnInit {
  amount = 1;
  from = 'CAD';
  to = 'USD';
  rates: { [key: string]: number };

  convert = () => (this.amount * this.rates[this.to]).toFixed(2);

  loadRates = () =>
    this.exchangeRateService
      .getRates(this.from)
      .subscribe((res) => (this.rates = res.rates));

  getAllCurrencies = (): string[] => Object.keys(this.rates);

  constructor(private exchangeRateService: ExchangeRatesService) {}

  ngOnInit(): void {
    this.loadRates();
  }
}

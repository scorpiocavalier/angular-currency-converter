export interface IExchangeRatesResponse {
  rates: {
    [key: string]: number;
  };
  base: string;
  date: string;
}

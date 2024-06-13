import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root',
})
export class ProdottiService {
  private apiUrl = 'https://projectworkapi-z5nzzkwikq-oc.a.run.app/products';
  private apiUrl2 = 'https://projectworkapi-z5nzzkwikq-oc.a.run.app';

  constructor(private http: HttpClient) {}
  ricerca: string | undefined;
  can: boolean = true;

  getProdotti(n: number): Observable<prodottoModel[]> {
    return this.http
      .get<{ result: prodottoModel[] }>(`${this.apiUrl}?page=${n}&pagesize=10`)
      .pipe(
        map((response) =>
          response.result.map((prodotto) => {
            return prodotto;
          })
        )
      );
  }

  getProdotto(id: number): Observable<prodottoModel> {
    return this.http.get<prodottoModel>(`${this.apiUrl}/${id}`);
  }

  getSearch(n: number): Observable<prodottoModel[]> {
    return this.http
      .get<{ result: prodottoModel[] }>(
        `${this.apiUrl}?search=${this.ricerca}&page=${n}&pagesize=99`
      )
      .pipe(
        map((response) => response.result) 
      );
  }

  getCategory(id: number, n: number) {
    return this.http
      .get<{ result: prodottoModel[] }>(
        `${this.apiUrl2}/categories/${id}/products?page=${n}&pagesize=${99}`
      )
      .pipe(
        map((response) =>
          response.result.map((prodotto) => {
            return prodotto;
          })
        )
      );
  }

  getTotal(id: number, n: number) {
    return this.http
      .get<{ totalRecordsCount: number }>(
        `${this.apiUrl2}/categories/${id}/products?page=${n}&pagesize=${10}`
      )
      .pipe(map((response) => response.totalRecordsCount));
  }

  setSearchValue(search: string | undefined, idCa: number) {
    this.ricerca = search;
  }

  getApiUrl(): string {
    return this.apiUrl2;
  }
  getCan() {
    return this.can;
  }

  setCan(can: boolean) {
    this.can = can;
  }
}

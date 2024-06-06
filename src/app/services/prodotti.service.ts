import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private apiUrl = 'https://projectworkapi-z5nzzkwikq-oc.a.run.app/products';

  constructor(private http: HttpClient) {}

  getProdotti(): Observable<prodottoModel[]> {
    return this.http.get<{ result: prodottoModel[] }>(`${this.apiUrl}?pagesize=99`)
      .pipe(
        map(response => response.result)
      );
  }

  getProdotto(id: number): Observable<prodottoModel> {
    
    return this.http.get<{ result: prodottoModel }>(`${this.apiUrl}/${id}`)
      .pipe(
        map(response => response.result)
      );
  }
}

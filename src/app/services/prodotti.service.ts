import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { prodottoModel } from '../models/prodottoModel';
import { utenteCheckoutModel } from '../models/utenteCheckoutModel';


@Injectable({
  providedIn: 'root'
})
export class ProdottiService {
  private apiUrl = 'https://projectworkapi-z5nzzkwikq-oc.a.run.app/products';
  private apiUrl2 = 'https://projectworkapi-z5nzzkwikq-oc.a.run.app';
  //private imageBaseUrl = 'https://storage.googleapis.com/projectworkpascal/';

  constructor(private http: HttpClient) {}
  ricerca : string | undefined;
  can:boolean = true;

  getProdotti(n:number): Observable<prodottoModel[]> {
    return this.http.get<{ result: prodottoModel[] }>(`${this.apiUrl}?page=${n}&pagesize=10`)
      .pipe(
        map(response => response.result.map(prodotto => {
          //prodotto.images = prodotto.images.split(';').map(img => this.imageBaseUrl + img).join(';');
          return prodotto;
        }))
      );
  }

  getProdotto(id: number): Observable<prodottoModel> {
    return this.http.get<prodottoModel>(`${this.apiUrl}/${id}`);
  }
 
  
  getSearch(n: number): Observable<prodottoModel[]> {
    return this.http.get<{ result: prodottoModel[] }>(`${this.apiUrl}?search=${this.ricerca}&page=${n}&pagesize=10`)
      .pipe(
        map(response => response.result) // Estrai l'array di prodotti dalla proprietà `result`
      );
  }
  
  


  getCategory(id:number,n:number) {
    return this.http.get<{result : prodottoModel[]}>(`${this.apiUrl2}/categories/${id}/products?page=${n}&pagesize=${99}`)
    .pipe(
      map(response => response.result.map(prodotto => {
        return prodotto;
      }))
    );
  }

  getTotal(id:number,n:number) {
    return this.http.get<{totalRecordsCount : number}>(`${this.apiUrl2}/categories/${id}/products?page=${n}&pagesize=${10}`)
    .pipe(
      map(response => response.totalRecordsCount)
    );
  }
  
  
  setSearchValue(search: string | undefined, idCa:number) {
    this.ricerca = search;
  }

  metodoPost(ordine: utenteCheckoutModel){
    return this.http.post(this.apiUrl2+'/orders', ordine).subscribe();
  }

  getCan(){
    return this.can;
  }

  setCan(can:boolean){
    this.can = can;
  }
}
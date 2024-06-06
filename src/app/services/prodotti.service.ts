import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {prodottoModel} from "../models/prodottoModel";

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

  constructor(private http:HttpClient) { }

  //generica
  getProdotti(){
    return this.http.get<prodottoModel[]>(`https://projectworkapi-z5nzzkwikq-oc.a.run.app/products?pagesize=99`);
  }

  
  //prodotto specifica con id 
  getProdotto(id:number){
    return this.http.get<prodottoModel>(`https://projectworkapi-z5nzzkwikq-oc.a.run.app/products/${id}`);
  }

}

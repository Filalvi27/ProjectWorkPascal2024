import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';
import { utenteCheckoutModel } from '../models/utenteCheckoutModel';
import { prodottoPiccoloModel } from '../models/utenteCheckoutModel';
import { CarrelloService } from './carrello.service';
import { ProdottiService } from './prodotti.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  ordiniPrecedenti: utenteCheckoutModel[] = [];

  constructor(private ProdottiService: ProdottiService, private http: HttpClient) { }


  aggiornaOrdini(utente: utenteCheckoutModel) {
    this.ordiniPrecedenti.push(utente);
  }

  getOrdini(): utenteCheckoutModel[] {
    return this.ordiniPrecedenti;
  }

  //post all api col carrello
  // getCarrello(): {
  //   //  return this.utente;
  // }


  metodoPost(ordine: utenteCheckoutModel){
    return this.http.post(this.ProdottiService.getApiUrl()+'/orders', ordine).subscribe();
  }

}

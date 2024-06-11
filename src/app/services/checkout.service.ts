import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';
import { utenteCheckoutModel } from '../models/utenteCheckoutModel';
import { prodottoPiccoloModel } from '../models/utenteCheckoutModel';
import { CarrelloService } from './carrello.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  ordiniPrecedenti: utenteCheckoutModel[] = [];

  constructor() { }


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

}

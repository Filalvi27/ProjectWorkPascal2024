import { Injectable } from '@angular/core';
import { utenteCheckoutModel } from '../models/utenteCheckoutModel';
import { ProdottiService } from './prodotti.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  ordiniPrecedenti: utenteCheckoutModel[] = [];

  constructor(
    private ProdottiService: ProdottiService,
    private http: HttpClient
  ) {}

  aggiornaOrdini(utente: utenteCheckoutModel) {
    this.ordiniPrecedenti.push(utente);
  }

  getOrdini(): utenteCheckoutModel[] {
    return this.ordiniPrecedenti;
  }
  metodoPost(ordine: utenteCheckoutModel) {
    this.ordiniPrecedenti.push(ordine);
    console.log(this.ordiniPrecedenti);
    console.log('post fatto');
    this.http
      .post(this.ProdottiService.getApiUrl() + '/orders', ordine)
      .subscribe();
  }
}

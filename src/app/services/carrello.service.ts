import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root',
})
export class CarrelloService {
  private carrello: prodottoModel[] = [];
  totale: number = 0;

  constructor() {}

  
  private saveTotaleLocalStorage() {
    localStorage.setItem('totale', JSON.stringify(this.totale));
  }

  private loadTotaleLocalStorage() {
    const storedTotale = localStorage.getItem('totale');
    if (storedTotale) {
      this.totale = JSON.parse(storedTotale);
    }
  }


  private saveCarrelloLocalStorage() {
    localStorage.setItem('carrello', JSON.stringify(this.carrello));
  }

  private loadCarrelloLocalStorage() {
    const storedCarrello = localStorage.getItem('carrello');
    if (storedCarrello) {
      this.carrello = JSON.parse(storedCarrello);
    }
  }

  getCarrello(): prodottoModel[] {
    console.log('carrello service');
    console.log('asd' + this.carrello);
    this.loadCarrelloLocalStorage();
    return this.carrello;
  }

  trovaCarrello(prodotto: prodottoModel) {
    return this.carrello.find(
      (r) => r.id == prodotto.id && r.taglia == prodotto.taglia
    );
  }

  aggiungiCarello(prodotto: prodottoModel) {
    console.log('carrello service');

    let pp = this.trovaCarrello(prodotto);
    if (pp) {
      pp.quantity = Number(pp.quantity) + Number(prodotto.quantity);
      console.log(pp);
    } else {
      prodotto.addedToCart = true;
      this.carrello.push(prodotto);
      console.log(this.carrello);
    }
    this.saveCarrelloLocalStorage();
  }

  filtraCarrello(prodotto: prodottoModel): prodottoModel[] {
    return this.carrello.filter(
      (x) => x.id !== prodotto.id || x.taglia !== prodotto.taglia
    );
  }

  aggiungi1AlCarrello(prodotto: prodottoModel) {
    let item = this.trovaCarrello(prodotto);
    if (item) {
      item.quantity++;
      if (item.quantity <= 0) {
        this.carrello = this.filtraCarrello(prodotto);
      }
    }
    this.saveCarrelloLocalStorage();
  }

  rimuoviCarrello(prodotto: prodottoModel) {
    let item = this.trovaCarrello(prodotto);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.carrello = this.filtraCarrello(prodotto);
      }
    }
    this.saveCarrelloLocalStorage();

  }

  eliminaCarrello(prodotto: prodottoModel) {
    this.carrello = this.filtraCarrello(prodotto);
    this.saveCarrelloLocalStorage();
  }

  isItemInCart(id: number, taglia: string): boolean {
    return this.carrello.some((item) => item.id == id && item.taglia == taglia);
  }

  setTotale(totale: number) {
    this.totale = totale;
    this.saveTotaleLocalStorage();
  }

  getTotale(): number {
    // console.log(this.totale);
     this.loadTotaleLocalStorage();
    return this.totale;
  }
}

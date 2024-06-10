import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root'
})
//memorizzo qua il carrello
export class CarrelloService {

  private carrello: prodottoModel[] = [];
  totale: number = 0;
  constructor() { }

  getCarrello():prodottoModel[] {
    console.log("carrello service");
    console.log("asd"+ this.carrello);
    return this.carrello;
  }

  aggiungiCarello(prodotto: prodottoModel) {
    console.log("carrello service");

    let pp = this.carrello.find(p => p.id == prodotto.id);
    if (pp?.addedToCart) {
      pp.quantity++;
      console.log(pp);
    } else {
      this.carrello.push(prodotto);
      prodotto.quantity = 1;
      prodotto.addedToCart = true;
      // console.log(prodotto1);
      console.log(this.carrello);

    }

    
  }

  rimuoviCarrello(prodotto: prodottoModel) {
    let gg = this.carrello.filter(r => r.id == prodotto.id);
    gg[0].quantity--;
    if (gg[0].quantity <= 0) {
      this.carrello = this.carrello.filter(x => x.quantity != 0);
    }
  }


  // public aggiungi(id:number){
  //   let item : prodottoModel;
  //   this.serviceP.getProdotto(id).subscribe({
  //     next: (data: prodottoModel) => {
  //       item = data;
  //       this.carrello.push(item);
  //     },
  //     error: (error) => console.log(error)
  //   });
  //   console.log("aggiungi fatto");

  // }
  setTotale(totale:number) {
    this.totale = totale;
  }

  getTotale():number {
    return this.totale;
  }

}

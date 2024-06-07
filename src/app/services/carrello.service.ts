import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root'
})
//memorizzo qua il carrello
export class CarrelloService {

  carrello: prodottoModel[] = [];

  constructor() { }

  getCarrello():prodottoModel[] {
    console.log("carrello service");
    console.log("asd"+ this.carrello);
    return this.carrello;
  }

  aggiungiCarello(prodotto: prodottoModel) {
    // let prodotto1 = {
    //   id: 2,
    //   title: 'T-Shirt Grafica Montagna Maestosa',
    //   description: 'Eleva il tuo guardaroba con questa elegante t-shirt nera caratterizzata da una sorprendente grafica monocromatica di una catena montuosa. Perfetta per chi ama la natura o desidera aggiungere un tocco di design ispirato alla natura al proprio look, questa maglietta è realizzata in tessuto morbido e traspirante che garantisce comfort per tutto il giorno. Ideale per uscite casual o come regalo unico, questa t-shirt è un\'aggiunta versatile a qualsiasi collezione.',
    //   price: 44,
    //   stars: 4.5,
    //   images: 'QkIa5tT.jpeg;jb5Yu0h.jpeg;UlxxXyG.jpeg',
    //   idCategory: 1,
    //   category: {
    //     id: 1,
    //     name: 'Abbigliamento',
    //     image: 'QkIa5tT.jpeg'
    //   },
    //   quantity: 1,
    //   addedToCart: false
    // }

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
}

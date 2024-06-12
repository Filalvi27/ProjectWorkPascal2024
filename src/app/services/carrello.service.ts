// import { Injectable } from '@angular/core';
// import { prodottoModel } from '../models/prodottoModel';

// @Injectable({
//   providedIn: 'root'
// })
// //memorizzo qua il carrello
// export class CarrelloService {

//   private carrello: prodottoModel[] = [];
//   totale: number = 0;
//   constructor() { }

//   getCarrello():prodottoModel[] {
//     console.log("carrello service");
//     console.log("asd"+ this.carrello);
//     return this.carrello;
//   }

//   aggiungiCarello(prodotto: prodottoModel) {
    // console.log("carrello service");

    // let pp = this.carrello.find(p => p.id == prodotto.id && p.taglia == prodotto.taglia);
    // if (pp?.addedToCart) {
    //   pp.quantity = Number(pp.quantity) + Number(prodotto.quantity);

    //   // pp.quantity++;
    //   console.log(pp);
    // } else {
    //   this.carrello.push(prodotto);
    //   // prodotto.quantity = 1;
    //   prodotto.addedToCart = true;
    //   // console.log(prodotto1);
    //   console.log(this.carrello);

    // }

    
//   }

//   rimuoviCarrello(prodotto: prodottoModel) {
//     let gg = this.carrello.filter(r => r.id == prodotto.id && r.taglia == prodotto.taglia);
//     gg[0].quantity--;
//     if (gg[0].quantity <= 0) {
//       this.carrello = this.carrello.filter(x => x.quantity != 0);
//     }
//   }

//   eliminaCarrello(prodotto: prodottoModel) {
//     this.carrello = this.carrello.filter(x => x.id != prodotto.id && x.taglia == prodotto.taglia);
//   }


//   // public aggiungi(id:number){
//   //   let item : prodottoModel;
//   //   this.serviceP.getProdotto(id).subscribe({
//   //     next: (data: prodottoModel) => {
//   //       item = data;
//   //       this.carrello.push(item);
//   //     },
//   //     error: (error) => console.log(error)
//   //   });
//   //   console.log("aggiungi fatto");

//   // }
//   setTotale(totale:number) {
//     this.totale = totale;
//   }

//   getTotale():number {
//     console.log(this.totale);
//     return this.totale;
//   }

// }



import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {
  private carrello: prodottoModel[] = [];
  totale: number = 0;

  constructor() { }

  getCarrello(): prodottoModel[] {
    console.log("carrello service");
    console.log("asd" + this.carrello);
    return this.carrello;
  }

  aggiungiCarello(prodotto: prodottoModel) {
    console.log("carrello service");

    // const index = this.carrello.findIndex(item => item.id === prodotto.id && item.taglia === prodotto.taglia);
    // if (index !== -1) {
    //   // Aggiorna la quantità esistente
    //   this.carrello[index].quantity = Number(this.carrello[index].quantity) + Number(prodotto.quantity);
    //   console.log(this.carrello[index]);
    // } else {
    //   // Aggiungi un nuovo prodotto
    //   prodotto.addedToCart = true;
    //   this.carrello.push(prodotto);
    //   console.log(this.carrello);
    // }
    let pp = this.carrello.find(p => p.id == prodotto.id && p.taglia == prodotto.taglia);
    if (pp?.addedToCart) {
      pp.quantity = Number(pp.quantity) + Number(prodotto.quantity);

      // pp.quantity++;
      console.log(pp);
    } else {
      this.carrello.push(prodotto);
      // prodotto.quantity = 1;
      prodotto.addedToCart = true;
      // console.log(prodotto1);
      console.log(this.carrello);

    }

  }

  rimuoviCarrello(prodotto: prodottoModel) {
    let item = this.carrello.find(r => r.id == prodotto.id && r.taglia == prodotto.taglia);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.carrello = this.carrello.filter(x => x.id !== prodotto.id || x.taglia !== prodotto.taglia);
      }
    }
  }

  eliminaCarrello(prodotto: prodottoModel) {
    this.carrello = this.carrello.filter(x => x.id !== prodotto.id || x.taglia !== prodotto.taglia);
  }

  isItemInCart(id: number, taglia: string): boolean {
    return this.carrello.some(item => item.id == id && item.taglia == taglia);
  }

  setTotale(totale: number) {
    this.totale = totale;
  }

  getTotale(): number {
    console.log(this.totale);
    return this.totale;
  }
}

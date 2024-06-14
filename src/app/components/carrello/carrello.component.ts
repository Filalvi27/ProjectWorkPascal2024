import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prodottoModel } from '../../models/prodottoModel';
import { ImgService } from '../../services/img.service';
import { CarrelloService } from '../../services/carrello.service';
import { RouterModule } from '@angular/router';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule, RouterModule, RicercaNomeComponent],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css',
})
export class CarrelloComponent {
  carrello: prodottoModel[];

  constructor(private service: ImgService, private serviceC: CarrelloService,private serviceP:ProdottiService) {
    this.carrello = this.setCarrello() ?? [];
    this.serviceP.setCan(false);
    console.log(this.carrello);
  }

  incrementa(item: prodottoModel) {
    this.serviceC.aggiungi1AlCarrello(item);
    this.carrello = this.setCarrello();
  }

  decrementa(item: prodottoModel) {
    this.serviceC.rimuoviCarrello(item);
    this.carrello = this.setCarrello();
  }

  setCarrello() : prodottoModel[] {
    return this.serviceC.getCarrello();
  }

  calcolaTotale() {
    let totale = 0;
    totale = this.carrello.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    this.serviceC.setTotale(totale);
    return totale;
  }

  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }

  elimina(item: prodottoModel) {
    this.serviceC.eliminaCarrello(item);
    this.carrello = this.setCarrello();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prodottoModel } from '../../models/prodottoModel';
import { ImgService } from '../../services/img.service';
import { CarrelloService } from '../../services/carrello.service';
import { RouterModule } from '@angular/router';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';


@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule, RouterModule, RicercaNomeComponent],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css',
})
export class CarrelloComponent {
  carrello: prodottoModel[];

  constructor(private service: ImgService, private serviceC: CarrelloService) {
    this.carrello = this.serviceC.getCarrello() ?? [];

    console.log(this.carrello);
  }

  incrementa(item: prodottoModel) {
    this.serviceC.aggiungi1AlCarrello(item);
    this.carrello = this.serviceC.getCarrello();
  }

  decrementa(item: prodottoModel) {
    this.serviceC.rimuoviCarrello(item);
    this.carrello = this.serviceC.getCarrello();
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
    this.carrello = this.serviceC.getCarrello();
  }
}

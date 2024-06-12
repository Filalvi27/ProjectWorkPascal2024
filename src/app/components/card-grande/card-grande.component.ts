import { Component, Input } from '@angular/core';
import { prodottoModel } from '../../models/prodottoModel';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';

@Component({
  selector: 'app-card-grande',
  standalone: true,
  imports: [CommonModule, RicercaNomeComponent],
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css']
})
export class CardGrandeComponent {
  prodotto: prodottoModel | undefined;
  tagliaSelezionata: string | undefined;

  constructor(private route: ActivatedRoute, private prodottoService: ProdottiService, private serviceC: CarrelloService) {
    const id = +this.route.snapshot.params['id'];
    prodottoService.setCan(false);
    this.prodottoService.getProdotto(id).subscribe({
      next: (data: prodottoModel) => this.prodotto = data,
      error: (error) => console.log(error)
    });
  }

  aggiungiAlCarrello() {
    if (this.prodotto) {
      this.prodotto.taglia = this.tagliaSelezionata || '';
      this.serviceC.aggiungiCarello(this.prodotto);
    }
    console.log("aggiungi al carrello fatto");
  }

  selezionaTaglia(taglia: string) {
    this.tagliaSelezionata = taglia;
  }

  getImmagini(prodotto: prodottoModel): string[] {
    return prodotto.images.split(';').map(img => `https://storage.googleapis.com/projectworkpascal/${img}`);
  }

  getStars(rating: number): number[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(1);
      } else if (rating >= i - 0.5) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }
    return stars;
  }
}

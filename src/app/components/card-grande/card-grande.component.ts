import { Component, Input } from '@angular/core';
import { prodottoModel } from '../../models/prodottoModel';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-card-grande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css']
})
export class CardGrandeComponent {
  prodotto: prodottoModel | undefined;

  constructor(private route: ActivatedRoute, private prodottoService: ProdottiService, private serviceC: CarrelloService) {
    const id = +this.route.snapshot.params['id'];
    this.prodottoService.getProdotto(id).subscribe({
      next: (data: prodottoModel) => this.prodotto = data,
      error: (error) => console.log(error)
    });
  }

  aggiungiAlCarrello() {
    const id = +this.route.snapshot.params['id'];
    this.prodottoService.getProdotto(id).subscribe({
      next: (data: prodottoModel) => {
        this.prodotto = data;
        this.serviceC.aggiungiCarello(this.prodotto)
      },
      error: (error) => console.log(error)
    });

    console.log("aggiungi al carrello fatto");
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

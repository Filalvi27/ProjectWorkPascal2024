import { Component } from '@angular/core';
import { prodottoModel } from '../../models/prodottoModel';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';
import { CarrelloService } from '../../services/carrello.service';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-grande',
  standalone: true,
  imports: [
    CommonModule,
    RicercaNomeComponent,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css'],
})
export class CardGrandeComponent {
  prodotto: prodottoModel | undefined;
  tagliaSelezionata: string | number = 'S'; // Default to "S" for clothing
  quantitaSelezionata: number = 1;
  itemInCart: boolean = false;

  constructor( private route: ActivatedRoute, private prodottoService: ProdottiService, private serviceC: CarrelloService) 
  {
    const id = +this.route.snapshot.params['id'];
    prodottoService.setCan(false);
    this.prodottoService.getProdotto(id).subscribe({
      next: (data: prodottoModel) => {
        this.prodotto = data;
        if (this.prodotto.idCategory === 4) {
          this.tagliaSelezionata = '38'; // Default shoe size
        }
        this.checkItemInCart();
      },
      error: (error) => console.log(error),
    });
  }

  selezionaTaglia(taglia: string | number) {
    this.tagliaSelezionata = taglia;
    this.checkItemInCart();
  }

  checkItemInCart() {
    if (this.prodotto) {
      this.itemInCart = this.serviceC.isItemInCart(
        this.prodotto.id,
        this.tagliaSelezionata.toString()
      );
    }
  }

  aggiungiAlCarrello() {
    if (this.prodotto) {
      const prodottoDaAggiungere = {
        ...this.prodotto, // copia tutte le proprietà
        taglia: this.tagliaSelezionata.toString(),
        quantity: this.quantitaSelezionata,
      };
      this.serviceC.aggiungiCarello(prodottoDaAggiungere);
      this.checkItemInCart(); // fa un controllo generale dopo aver aggiunto/modificato
    }

    console.log('aggiungi al carrello/modifica carrello fatto');
  }

  getImmagini(prodotto: prodottoModel): string[] {
    return prodotto.images
      .split(';')
      .map((img) => `https://storage.googleapis.com/projectworkpascal/${img}`);
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

  getTaglie(idCategory: number): string[] {
    if (idCategory === 1) {
        return ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    } else if (idCategory === 4) {
        return ['36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48'];
    }
    return [];
}

}
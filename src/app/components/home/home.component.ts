import { Component } from '@angular/core';
import { CardPiccolaComponent } from '../card-piccola/card-piccola.component';
import { ProdottiService } from '../../services/prodotti.service';
import { prodottoModel } from '../../models/prodottoModel';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CardPiccolaComponent,
    RouterModule,
    CommonModule,
    RicercaNomeComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  prodotti: prodottoModel[] = [];
  currentPage: number = 1;

  constructor(private prodottoService: ProdottiService) {
    this.loadCards(this.currentPage);
    this.prodottoService.setCan(false);
  }

  loadCards(page: number) {
    this.prodottoService.getProdotti(page).subscribe(
      (prodotti) => {
        this.prodotti = prodotti;
        console.log(this.currentPage);
        console.log(this.prodotti);
      },
      (error) => console.error(error)
    );
  }

  onPageSelect(page: number) {
    this.currentPage = page;
    this.loadCards(page);
  }
}

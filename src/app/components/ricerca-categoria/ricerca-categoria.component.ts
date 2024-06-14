import { Component } from '@angular/core';
import { CardPiccolaComponent } from '../card-piccola/card-piccola.component';
import { ProdottiService } from '../../services/prodotti.service';
import { prodottoModel } from '../../models/prodottoModel';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardPiccolaComponent, RouterModule, CommonModule],
  templateUrl: './ricerca-categoria.component.html',
  styleUrls: ['./ricerca-categoria.component.css'],
})
export class RicercaCategoriaComponent {
  prodotti: prodottoModel[] = [];
  // numeri categoria
  id: number = 1;
  currentPage: number = 1;
  tot: number = 0;
  totArray: number[] = [];

  constructor(private prodottoService: ProdottiService) {
    this.loadCards(this.id, this.currentPage);

  }

  loadCards(id: number, page: number) {
    this.totArray = [];
    this.id = id;
    this.prodottoService.getTotal(id,page).subscribe({
      next: (t) => {
        this.tot = t;
        this.tot = Math.ceil(this.tot / 10);
        console.log(this.tot);
        for (let i = 0; i < this.tot; i++) {
          this.totArray.push(i + 1);
        }
        console.log(this.totArray);
      },
      error: (error) => console.error(error),
    });


    this.prodottoService.getCategory(id, page).subscribe({
      next: (prodotti) => (this.prodotti = prodotti),
      error: (error) => console.error(error),
    });

    // this.prodottoService.getTotal(id, page).subscribe({
    //   next: prodotti => this.tot = prodotti,
    //   error: error => console.error(error)
    // });

    console.log(this.tot);
    console.log(this.prodotti);
  }

  onPageSelect(page: number) {
    this.currentPage = page;
    this.loadCards(this.id, page);
  }

  onSubmit(id:number) {
    
    this.currentPage = 1;
    this.loadCards(id, 1);
  }
}
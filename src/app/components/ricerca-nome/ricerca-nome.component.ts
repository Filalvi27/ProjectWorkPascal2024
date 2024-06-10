import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { prodottoModel } from '../../models/prodottoModel';
import { CardPiccolaComponent } from '../card-piccola/card-piccola.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ricerca-nome',
  standalone: true,
  imports: [CardPiccolaComponent, RouterModule, CommonModule],
  templateUrl: './ricerca-nome.component.html',
  styleUrls: ['./ricerca-nome.component.css']
})
export class RicercaNomeComponent implements OnInit  {
  prodotti: prodottoModel[] = [];
  search:string = '';

  constructor(private prodottiService: ProdottiService) {

   }
   

  ngOnInit() {
    this.prodottiService.getSearch(1).subscribe(
      prodotti => {
        this.prodotti = prodotti;
      },
      error => console.error(error)
    );
  }



  // this.prodottoService.getTotal(this.id, this.currentPage).subscribe({
  //   next: t => {
  //     this.tot = t;
  //     this.tot = Math.ceil(this.tot / 10);
  //     console.log(this.tot);
  //     for (let i = 0; i < this.tot; i++) {
  //       this.totArray.push(i + 1);
  //     };
  //     console.log(this.totArray);
  //   },
  //   error: error => console.error(error)
  // });


  }
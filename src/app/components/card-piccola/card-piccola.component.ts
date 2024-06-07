import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { prodottoModel } from '../../models/prodottoModel';
import { ProdottiService } from '../../services/prodotti.service';
import { ImgService } from '../../services/img.service';

@Component({
  selector: 'app-card-piccola',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-piccola.component.html',
  styleUrls: ['./card-piccola.component.css']
})
export class CardPiccolaComponent {
  prodotti: prodottoModel[] = [];

  constructor(private prodottiService: ProdottiService,private service:ImgService) {
    this.prodottiService.getProdotti().subscribe({
      next: prodotti => this.prodotti = prodotti,
      error: error => console.error(error)
    });
  }
  
  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }

}

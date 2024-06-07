import { Component, Input } from '@angular/core';
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
  @Input() prodotti: prodottoModel[] = [];

  constructor(private service: ImgService) {}

  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }
}

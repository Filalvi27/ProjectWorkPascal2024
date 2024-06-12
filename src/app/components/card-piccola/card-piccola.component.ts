import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { prodottoModel } from '../../models/prodottoModel';
import { ImgService } from '../../services/img.service';

@Component({
  selector: 'app-card-piccola',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-piccola.component.html',
  styleUrls: ['./card-piccola.component.css'],
})
export class CardPiccolaComponent {
  @Input() prodotti: prodottoModel[] = [];

  constructor(private service: ImgService) {}

  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }

  onMouseEnter(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.add('hovered');
  }

  onMouseLeave(event: MouseEvent) {
    const target = event.target as HTMLElement;
    target.classList.remove('hovered');
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

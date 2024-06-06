import { Component, Input } from '@angular/core';
import { prodottoModel } from '../../models/prodottoModel';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-grande',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-grande.component.html',
  styleUrls: ['./card-grande.component.css']
})
export class CardGrandeComponent {
  prodotto: prodottoModel | undefined;

  constructor(private route: ActivatedRoute, private ProdottoService: ProdottiService) {
    const id = +this.route.snapshot.params['id'];
    this.ProdottoService.getProdotto(id).subscribe({
      next: (data: prodottoModel) => this.prodotto = data,
      error: (error) => console.log(error)
    });
  }
}

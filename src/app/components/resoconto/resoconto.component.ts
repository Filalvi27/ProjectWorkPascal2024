import { Component } from '@angular/core';
import { utenteCheckoutModel } from '../../models/utenteCheckoutModel';
import { prodottoPiccoloModel } from '../../models/utenteCheckoutModel';
import { CheckoutService } from '../../services/checkout.service';
import {ImgService} from '../../services/img.service'
import { prodottoModel } from '../../models/prodottoModel';
import { ProdottiService } from '../../services/prodotti.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-resoconto',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './resoconto.component.html',
  styleUrl: './resoconto.component.css'
})
export class ResocontoComponent {
  itemscazzo : number[] = [1, 2, 3, 4, 5];
  constructor(private CheckoutService: CheckoutService, private imgService: ImgService, private prodottiService: ProdottiService) {}

  ordini: utenteCheckoutModel[] = this.CheckoutService.getOrdini();

  get orderTotal(): number {
    return 2;
    //return this.orderItems.reduce((total) => total + item.price, 0);
  }
  
  goToHome() {
    // Logica per tornare alla home page
    console.log('Tornando alla home...');
  }
  

}

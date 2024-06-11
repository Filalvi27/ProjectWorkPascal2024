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

  // resoconto: utenteCheckoutModel[] = [];
  resoconto: utenteCheckoutModel[];
  prodotti: prodottoModel[] = [];
  prodottiList: prodottoModel[][] = []; // crea un array di array che contiene l array prodotti


  constructor(private serviceU :CheckoutService,private service:ImgService,private prodottoService:ProdottiService) {
    this.resoconto = this.serviceU.getOrdini() ?? [];
    console.log(this.resoconto);

    // for(let i = 0; i < this.resoconto.length; i++){
    //   // this.prodottiList = new Array(this.resoconto.length).fill([]).map(() => new Array());
    //   this.prodottiList[i] = [];

    //   for(let j=0;j<this.resoconto[i].details.length;j++){
    //     this.prodottoService.getProdotto(this.resoconto[i].details[j].idproduct).subscribe({
    //       next: (data: prodottoModel) => {
    //         this.prodottiList[i].push(data);
    //       },
    //       error: (error) => console.log(error)
    //     });
    //   }
    // }

    // console.log(this.prodottiList);

  }
  


  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }



  

}

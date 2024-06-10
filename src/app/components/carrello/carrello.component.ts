import { Component } from '@angular/core';
import { carrelloModel } from '../../models/carrelloModel';
import { CommonModule } from '@angular/common';
import { prodottoModel } from '../../models/prodottoModel';
import {ImgService} from '../../services/img.service';
import {ProdottiService} from '../../services/prodotti.service';
import {CarrelloService} from '../../services/carrello.service';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})

export class CarrelloComponent {

  carrello: prodottoModel[];


  constructor(private service:ImgService,private serviceP:ProdottiService, private serviceC: CarrelloService) 
  { 
    this.carrello = this.serviceC.getCarrello() ?? [];
    
    console.log(this.carrello);
  }



  incrementa(item: prodottoModel)
  {
    this.serviceC.aggiungiCarello(item);
    this.carrello = this.serviceC.getCarrello();
  }

  decrementa(item: prodottoModel){
    this.serviceC.rimuoviCarrello(item);
    this.carrello = this.serviceC.getCarrello();

  }

  calcolaTotale(){

    let totale = 0;
    totale= this.carrello.reduce((acc, item) => acc + (item.price*item.quantity), 0);
    // console.log(totale);

    this.serviceC.setTotale(totale);
    return totale;
  }

  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }


}



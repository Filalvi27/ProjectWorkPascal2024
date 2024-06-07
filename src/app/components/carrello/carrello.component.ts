import { Component } from '@angular/core';
import { carrelloModel } from '../../models/carrelloModel';
import { CommonModule } from '@angular/common';
import { prodottoModel } from '../../models/prodottoModel';
import {ImgService} from '../../services/img.service';
import {ProdottiService} from '../../services/prodotti.service';
import {CarrelloService} from '../../services/carrello.service';



@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})

export class CarrelloComponent {

  carrello: prodottoModel[];


  // itemProva: prodottoModel = {
  //   id: 1,
  //   title: 'T-Shirt Grafica Montagna Maestosa',
  //   description: 'Eleva il tuo guardaroba con questa elegante t-shirt nera caratterizzata da una sorprendente grafica monocromatica di una catena montuosa. Perfetta per chi ama la natura o desidera aggiungere un tocco di design ispirato alla natura al proprio look, questa maglietta è realizzata in tessuto morbido e traspirante che garantisce comfort per tutto il giorno. Ideale per uscite casual o come regalo unico, questa t-shirt è un\'aggiunta versatile a qualsiasi collezione.',
  //   price: 44,
  //   stars: 4.5,
  //   images: 'QkIa5tT.jpeg;jb5Yu0h.jpeg;UlxxXyG.jpeg',
  //   idCategory: 1,
  //   category: {
  //     id: 1,
  //     name: 'Abbigliamento',
  //     image: 'QkIa5tT.jpeg'
  //   },
  //   quantity:1,
  //   addedToCart: true
  // }

  // itemProva2: prodottoModel = {
  //   id: 2,
  //   title: 'T-Shirt Grafica Montagna Maestosa',
  //   description: 'Eleva il tuo guardaroba con questa elegante t-shirt nera caratterizzata da una sorprendente grafica monocromatica di una catena montuosa. Perfetta per chi ama la natura o desidera aggiungere un tocco di design ispirato alla natura al proprio look, questa maglietta è realizzata in tessuto morbido e traspirante che garantisce comfort per tutto il giorno. Ideale per uscite casual o come regalo unico, questa t-shirt è un\'aggiunta versatile a qualsiasi collezione.',
  //   price: 44,
  //   stars: 4.5,
  //   images: 'QkIa5tT.jpeg;jb5Yu0h.jpeg;UlxxXyG.jpeg',
  //   idCategory: 1,
  //   category: {
  //     id: 1,
  //     name: 'Abbigliamento',
  //     image: 'QkIa5tT.jpeg'
  //   },
  //   quantity:1,
  //   addedToCart: true
  // }


  

  constructor(private service:ImgService,private serviceP:ProdottiService, private serviceC: CarrelloService) 
  { 
    // this.carrello.push(this.itemProva);
    // this.carrello.push(this.itemProva2);
    this.carrello = this.serviceC.getCarrello() ?? [];
    
    console.log(this.carrello);
  }


  /*ngOnInit() {
    this.carrello = this.serviceC.getCarrello();
    console.log(this.carrello);

  }*/



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
    return totale;
  }

  setImage(item: prodottoModel) {
    return this.service.getImmagine(item)[0];
  }

}



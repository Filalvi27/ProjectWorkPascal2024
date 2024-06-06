import { Component } from '@angular/core';
import { carrelloModel } from '../../models/carrelloModel';
import { CommonModule } from '@angular/common';
import { prodottoModel } from '../../models/prodottoModel';


@Component({
  selector: 'app-carrello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})

export class CarrelloComponent {

  carrello: prodottoModel[] =[];



  itemProva: prodottoModel = {
    id: 1,
    title: 'T-Shirt Grafica Montagna Maestosa',
    description: 'Eleva il tuo guardaroba con questa elegante t-shirt nera caratterizzata da una sorprendente grafica monocromatica di una catena montuosa. Perfetta per chi ama la natura o desidera aggiungere un tocco di design ispirato alla natura al proprio look, questa maglietta è realizzata in tessuto morbido e traspirante che garantisce comfort per tutto il giorno. Ideale per uscite casual o come regalo unico, questa t-shirt è un\'aggiunta versatile a qualsiasi collezione.',
    price: 44,
    stars: 4.5,
    images: 'QkIa5tT.jpeg;jb5Yu0h.jpeg;UlxxXyG.jpeg',
    idCategory: 1,
    category: {
      id: 1,
      name: 'Abbigliamento',
      image: 'QkIa5tT.jpeg'
    },
    quantity:1
  }

  itemProva2: prodottoModel = {
    id: 2,
    title: 'T-Shirt Grafica Montagna Maestosa',
    description: 'Eleva il tuo guardaroba con questa elegante t-shirt nera caratterizzata da una sorprendente grafica monocromatica di una catena montuosa. Perfetta per chi ama la natura o desidera aggiungere un tocco di design ispirato alla natura al proprio look, questa maglietta è realizzata in tessuto morbido e traspirante che garantisce comfort per tutto il giorno. Ideale per uscite casual o come regalo unico, questa t-shirt è un\'aggiunta versatile a qualsiasi collezione.',
    price: 44,
    stars: 4.5,
    images: 'QkIa5tT.jpeg;jb5Yu0h.jpeg;UlxxXyG.jpeg',
    idCategory: 1,
    category: {
      id: 1,
      name: 'Abbigliamento',
      image: 'QkIa5tT.jpeg'
    },
    quantity:1
  }


  

  constructor() 
  { 
    this.carrello.push(this.itemProva);
    this.carrello.push(this.itemProva2);

  }


  incrementa(item: prodottoModel)
  {
    let gg = this.carrello.filter(r => r.id = item.id);
    gg[0].quantity++;
  }

  decrementa(item: prodottoModel){
    let gg = this.carrello.filter(r => r.id = item.id);
    gg[0].quantity--;
    if(gg[0].quantity<=0){
      this.carrello = this.carrello.filter(x => x.quantity != 0);
    }
  }

  calcolaTotale(){

    let totale = 0;
    totale= this.carrello.reduce((acc, item) => acc + (item.price*item.quantity), 0);
    console.log(totale);
    return totale;
  }

  
}

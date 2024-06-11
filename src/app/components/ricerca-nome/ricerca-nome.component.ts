import { Component, OnInit } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { prodottoModel } from '../../models/prodottoModel';
import { CardPiccolaComponent } from '../card-piccola/card-piccola.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ricerca-nome',
  standalone: true,
  imports: [CardPiccolaComponent, RouterModule, CommonModule,SearchBarComponent],
  templateUrl: './ricerca-nome.component.html',
  styleUrls: ['./ricerca-nome.component.css']
})
export class RicercaNomeComponent implements OnInit  {
  prodotti: prodottoModel[] = [];
  search:string = '';
  searchText: string = '';
  selectedCategory: number = 0;
  selectedCategoryNome: string = "All";

  constructor(private prodottiService: ProdottiService,private route: ActivatedRoute) {

   }

   can:boolean = this.prodottiService.getCan();
   
   onSubmit(form: HTMLFormElement) {
    const searchInput = form.querySelector('input[type="search"]');
    this.searchText = (searchInput as HTMLInputElement).value;
    // Cancello il contenuto dell'input
    (searchInput as HTMLInputElement).value = '';
    //this.prodottiService.setSearchValue(this.searchText);
    console.log(this.selectedCategoryNome);
    console.log("Cerca da header: " + this.searchText);
    this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
    this.prodottiService.setCan(true);
    this.ngOnInit();
  }
  
  ngOnInit() {
    this.prodottiService.getSearch(1).subscribe(
      prodotti => {
        this.prodotti = prodotti;
        console.log(this.prodotti);
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
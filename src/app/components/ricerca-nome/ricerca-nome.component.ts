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
  imports: [
    CardPiccolaComponent,
    RouterModule,
    CommonModule,
    SearchBarComponent,
  ],
  templateUrl: './ricerca-nome.component.html',
  styleUrls: ['./ricerca-nome.component.css'],
})
export class RicercaNomeComponent implements OnInit {
  prodotti: prodottoModel[] = [];
  searchText: string = '';
  selectedCategory: number = 0;
  selectedCategoryNome: string = 'All';
  isLoading: boolean = false;
  
  constructor(private prodottiService: ProdottiService, private route: ActivatedRoute) {}

  can: boolean = this.prodottiService.getCan();

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchText = params['searchText'] || '';
      this.selectedCategory = params['selectedCategory'] || 0;
      console.dir(this.searchText)
      //if (this.searchText) {
        this.prodottiService.setCan(true);
        this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
        this.cerca();
      //}
    });
  }

  /*onSubmit(form: HTMLFormElement) {
    this.isLoading = true;

    const searchInput = form.querySelector('input[type="search"]');
    this.searchText = (searchInput as HTMLInputElement).value;
    (searchInput as HTMLInputElement).value = '';
    
    this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
    this.prodottiService.setCan(true);
    this.cerca();
  }*/

  cerca() {
    this.prodottiService.getSearch(1).subscribe(
      (prodotti) => {
        this.prodotti = prodotti;
        this.isLoading = false;//
        console.log(this.prodotti);
        console.log(this.prodotti.length);
        console.log(this.prodottiService.can)
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
      }
    );
  }
}

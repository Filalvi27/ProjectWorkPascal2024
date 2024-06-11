import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reactive } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText: string = '';
  selectedCategory: number = 0;
  selectedCategoryNome: string = "All";

  constructor(private prodottiService: ProdottiService) { }

  onSubmit(form: HTMLFormElement) {
    const searchInput = form.querySelector('input[type="search"]');
    this.searchText = (searchInput as HTMLInputElement).value;
    // Cancello il contenuto dell'input
    (searchInput as HTMLInputElement).value = '';
    //this.prodottiService.setSearchValue(this.searchText);
    console.log(this.selectedCategoryNome);
    console.log("Cerca da header: " + this.searchText);
    this.url = this.searchInput;
    this.prodottiService.setSearchValue(this.searchText, this.selectedCategory);
  }

  onHome() {
    this.prodottiService.setSearchValue(undefined, 0);
    this.searchText = '';
    this.selectedCategory = 0;
    this.selectedCategoryNome = "All";
  }
}
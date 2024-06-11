import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reactive } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { RicercaNomeComponent } from '../ricerca-nome/ricerca-nome.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule,RicercaNomeComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText: string = '';
  selectedCategory: number = 0;
  selectedCategoryNome: string = "All";

  constructor(private prodottiService: ProdottiService) { }

  onHome() {
    this.prodottiService.setSearchValue(undefined, 0);
    this.searchText = '';
    this.selectedCategory = 0;
    this.selectedCategoryNome = "All";
  }
}
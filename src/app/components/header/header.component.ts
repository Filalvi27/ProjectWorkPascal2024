import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reactive } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText = '';
  constructor(private prodottiService: ProdottiService) { }
  onSubmit(form: HTMLFormElement) {
    const searchInput = form.querySelector('input[type="search"]');
    this.searchText = (searchInput as HTMLInputElement).value;
    // Cancello il contenuto dell'input
    (searchInput as HTMLInputElement).value = '';
    //this.prodottiService.setSearchValue(this.searchText);
    
    console.log("Cerca da header: " + this.searchText);
    this.prodottiService.setSearchValue(this.searchText);
  }
  
}
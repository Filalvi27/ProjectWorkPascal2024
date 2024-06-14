import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicercaNomeComponent } from '../ricerca-nome.component';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import  {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { ProdottiService } from '../../../services/prodotti.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  constructor(public ricercaNomeComponent: RicercaNomeComponent, private router:Router, private prodottiService:ProdottiService) {}

  onKeydown(event: KeyboardEvent, form: HTMLFormElement) {
    // Verifica se il tasto premuto è Enter
    if (event.key === 'Enter') {
      // Richiama il metodo onSubmit del componente ricercaNomeComponent

      const searchInput = form.querySelector('input[type="search"]');
      const searchInputElement = searchInput as HTMLInputElement;
      const searchText = searchInputElement.value.trim();
      if (searchText) {
        console.log(searchText);
        //this.ricercaNomeComponent.onSubmit(form);
        this.router.navigate(['/ricerca'],{queryParams:{searchText:searchText}})

      }
      
      // this.navigateAndClose('/ricerca');
      // this.ricercaNomeComponent.onSubmit(form);
    }
  }

  onAlla(form: HTMLFormElement) {

    const searchInput = form.querySelector('input[type="search"]');
    const searchInputElement = searchInput as HTMLInputElement;
    const searchText = searchInputElement.value.trim();
    if (searchText) {
      console.log(searchText);
      //this.ricercaNomeComponent.onSubmit(form);
      this.router.navigate(['/ricerca'],{queryParams:{searchText:searchText}})
      this.prodottiService.setCan(true)
    }

  }

  navigateAndClose(route: string) {
    this.router.navigate([route]);
  }


}

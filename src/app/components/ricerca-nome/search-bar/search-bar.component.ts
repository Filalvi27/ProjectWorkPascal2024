import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicercaNomeComponent } from '../ricerca-nome.component';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import  {FormsModule, ReactiveFormsModule} from '@angular/forms'

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule, CommonModule,FormsModule, ReactiveFormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  constructor(public ricercaNomeComponent: RicercaNomeComponent, private router:Router) {}

  onKeydown(event: KeyboardEvent, form: HTMLFormElement) {
    // Verifica se il tasto premuto è Enter
    if (event.key === 'Enter') {
      // Richiama il metodo onSubmit del componente ricercaNomeComponent
      this.navigateAndClose('/ricerca');
      this.ricercaNomeComponent.onSubmit(form);
    }
  }

  navigateAndClose(route: string) {
    this.router.navigate([route]);
  }


}

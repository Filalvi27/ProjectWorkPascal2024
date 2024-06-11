import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RicercaNomeComponent } from '../ricerca-nome.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
constructor(public ricercaNomeComponent: RicercaNomeComponent) { }
  
}

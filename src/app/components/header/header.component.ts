import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Reactive } from '@angular/core/primitives/signals';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  searchText = '';

  onSubmit(form: HTMLFormElement) {
    const searchInput = form.querySelector('input[type="search"]');
    this.searchText = (searchInput as HTMLInputElement).value;
    // Cancello il contenuto dell'input
    (searchInput as HTMLInputElement).value = '';
    console.log("Cerca: " + this.searchText);
  }
  
}


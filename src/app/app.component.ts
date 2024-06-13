import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CardPiccolaComponent } from './components/card-piccola/card-piccola.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { ResocontoComponent } from './components/resoconto/resoconto.component';
import { RicercaNomeComponent } from './components/ricerca-nome/ricerca-nome.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    FooterComponent,
    CommonModule,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardPiccolaComponent,
    CardGrandeComponent,
    AboutUsComponent,
    ResocontoComponent,
    RicercaNomeComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor() {}
}

import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAnagraficiComponent } from './components/form-anagrafici/form-anagrafici.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import { AboutUsComponent } from './components/aboutus/aboutus.component';
import { ResocontoComponent } from './components/resoconto/resoconto.component';
import { RicercaCategoriaComponent } from './components/ricerca-categoria/ricerca-categoria.component';
import { RicercaNomeComponent } from './components/ricerca-nome/ricerca-nome.component';
import { SearchBarComponent } from './components/ricerca-nome/search-bar/search-bar.component';

export const routes: Routes = [
  { path: '', component: RicercaNomeComponent },
  { path: 'formAnagrafici', component: FormAnagraficiComponent },
  { path: 'cart', component: CarrelloComponent },
  { path: 'card/:id', component: CardGrandeComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'resoconto', component: ResocontoComponent },
  { path: 'ricercaCategoria', component: RicercaCategoriaComponent },
  { path: 'ricerca', component: RicercaNomeComponent },
  { path: '**', component: NotfoundComponent },
];

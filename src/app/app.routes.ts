import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAnagraficiComponent } from './components/form-anagrafici/form-anagrafici.component';
import { FormDatiCartaComponent } from './components/form-dati-carta/form-dati-carta.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { CardPiccolaComponent } from './components/card-piccola/card-piccola.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';

export const routes: Routes = [
     { path:'', component: HomeComponent },
     { path:'formAnagrafici', component: FormAnagraficiComponent },
     { path:'formCarta', component: FormDatiCartaComponent },
     { path:'cart', component: CarrelloComponent },
     { path:'card', component: CardPiccolaComponent },
     { path:'card/:id', component: CardGrandeComponent },
     { path:'**', component: NotfoundComponent }
 ];

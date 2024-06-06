import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormAnagraficiComponent } from './components/form-anagrafici/form-anagrafici.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { CarrelloComponent } from './components/carrello/carrello.component';


export const routes: Routes = [
     { path:'', component:HomeComponent },
     { path:'formAnagrafici', component: FormAnagraficiComponent },
     { path:'cart', component:CarrelloComponent },  
     { path:'**', component:NotfoundComponent }
 ];
 
import { Routes } from '@angular/router';
import { ErastoteneComponent } from './components/erastotene/erastotene.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    { path:'', component:HomeComponent },
    { path:'erastotene', component:ErastoteneComponent },
    { path:'utenti', component:UsersComponent },
    { path:'utenti/:id', component:UserComponent },
    { path:'**', component:NotfoundComponent }
];

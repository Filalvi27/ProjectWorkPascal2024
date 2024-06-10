import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { HomeComponent } from './components/home/home.component';
import { CardPiccolaComponent } from './components/card-piccola/card-piccola.component';
import { CardGrandeComponent } from './components/card-grande/card-grande.component';
import {AboutUsComponent} from './components/aboutus/aboutus.component';
import {ResocontoComponent} from './components/resoconto/resoconto.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent,RouterOutlet,FooterComponent,CommonModule, AppComponent, HeaderComponent, FooterComponent, SideBarComponent, CardPiccolaComponent, CardGrandeComponent, AboutUsComponent, ResocontoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'DemoAngular';

  studenti:string[] = []

  constructor()
  {  }
}

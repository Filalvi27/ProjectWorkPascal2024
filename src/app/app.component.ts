import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { StudenteService } from './services/studente.service';
import { ErastoteneComponent } from './components/erastotene/erastotene.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FooterComponent,CommonModule,ErastoteneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoAngular';

  studenti:string[] = []

  constructor(private service:StudenteService)
  {
    this.studenti = service.getAll();
  }
}

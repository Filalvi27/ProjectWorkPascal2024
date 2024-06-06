import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-erastotene-cella',
  standalone: true,
  imports: [],
  templateUrl: './erastotene-cella.component.html',
  styleUrl: './erastotene-cella.component.css'
})
export class ErastoteneCellaComponent {
  @Input() testo:string = ""
  @Input() primo:boolean = false;

  @Output() clicked:EventEmitter<string> = new EventEmitter();

   click()
   {
    this.clicked.emit(this.testo)
   } 
}

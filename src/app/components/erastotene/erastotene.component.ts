import { Component } from '@angular/core';
import { ErastoteneService } from '../../services/erastotene.service';
import { CommonModule } from '@angular/common';
import { ErastoteneCellaComponent } from '../erastotene-cella/erastotene-cella.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-erastotene',
  standalone: true,
  imports: [CommonModule,ErastoteneCellaComponent,ReactiveFormsModule],
  templateUrl: './erastotene.component.html',
  styleUrl: './erastotene.component.css'
})
export class ErastoteneComponent {

  numeri : (number | boolean)[] = [];
  n = 123;

  inputForm : FormGroup = new FormGroup({
    n : new FormControl<number>(0,[Validators.min(1),Validators.max(100000)]),
    soloPrimi : new FormControl<boolean>(false)
  })

  get canSubmit()
  {
    return this.inputForm.valid;
  }

  constructor(private service: ErastoteneService)
  {
    //this.numeri = service.calcola(this.n);    
  }

  calcola()
  {    
    if( !this.canSubmit) return;
    this.service.calcolaRemoto(this.inputForm.get('n')?.value).subscribe(r => this.numeri = r.map(e => e.primo ? e.numero : false))
  }

  pulisci()
  {

  }

  click(i:number)
  {
    console.log( `Il numero ${i} è ${this.numeri[i]==false ? 'non primo' : 'primo'}` )
  }
}

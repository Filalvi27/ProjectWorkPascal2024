import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { ReactiveFormsModule } from '@angular/forms';  

@Component({
  selector: 'app-form-anagrafici',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],  
  templateUrl: './form-anagrafici.component.html',
  styleUrls: ['./form-anagrafici.component.css']
})
export class FormAnagraficiComponent implements OnInit {
  checkoutForm!: FormGroup;
  sezionePagamento: boolean = false;
  controlloDettagli: boolean = false;

  constructor(private form: FormBuilder) {}

  ngOnInit() { //inizializzazione dati --> Metodo di angular
      this.checkoutForm = this.form.group({
          clientName: ['', Validators.required],
          address: ['', Validators.required],
          totalPrice: [0, [Validators.required, Validators.min(0)]],
          payment: this.form.group({
              number: ['', Validators.required],
              ownerName: ['', Validators.required],
              expire: ['', Validators.required],
              cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(4)]]
          }),
      });
  }

  onSubmit() {
      if (this.checkoutForm.valid && this.controlloDettagli) {
          console.log(this.checkoutForm.value);
      } else {
          console.log('Form non valido');
      }
  }

  submitPagamentoDetails() {
      if (this.checkoutForm.get('payment')?.valid) {
          this.controlloDettagli = true;
      }
  }
}

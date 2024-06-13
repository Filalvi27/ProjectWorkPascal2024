import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { utenteCheckoutModel, prodottoPiccoloModel } from '../../models/utenteCheckoutModel';
import { prodottoModel } from '../../models/prodottoModel';
import { CarrelloService } from '../../services/carrello.service';
import { CheckoutService } from '../../services/checkout.service';
import { ImgService } from '../../services/img.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-form-anagrafici',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './form-anagrafici.component.html',
  styleUrls: ['./form-anagrafici.component.css'],
})
export class FormAnagraficiComponent {
  inputForm: FormGroup; //utile per i validatori, insieme di controlli che avvengono
  showfirst: boolean = true;
  showsecond: boolean = false;
  submittedForms: utenteCheckoutModel[] = [];
  prodottiPiccoli: prodottoPiccoloModel[] = [];
  prodotti: prodottoModel[] = [];
  totale: number = 0;

  constructor(
    private imgService: ImgService,
    private carrelloService: CarrelloService,
    private checkoutService: CheckoutService
  ) {
    this.totale = this.carrelloService.getTotale();
    this.prodotti = this.carrelloService.getCarrello();
    this.prodottiPiccoli = this.prodotti.map(prod => ({
      idproduct: prod.id,
      quantity: prod.quantity,
    }));

    console.log(this.prodotti);
    console.log(this.prodottiPiccoli);

    this.inputForm = new FormGroup({
      clientName: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      totalPrice: new FormControl(0, Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      paymentNumber: new FormControl('', [Validators.required, Validators.pattern(/^\d{16}$/)]), //deve essere da 16 cifre
      paymentOwnerName: new FormControl('', Validators.required),
      paymentExpire: new FormControl('', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]), //mesi fra 1-12 e anno di 4 o 2 cifre
      paymentCvv: new FormControl('', [Validators.required, Validators.pattern(/^\d{3}$/)]), //cvv di 3 cifre
    });
  }

  get canSubmit() {
    return this.inputForm.valid;
  }

  onSubmit() {
    if (this.inputForm.valid) {
      const formData: utenteCheckoutModel = {
        clientName: this.inputForm.value.clientName,
        address: this.inputForm.value.address,
        totalPrice: this.totale,
        email: this.inputForm.value.email,
        payment: {
          number: this.inputForm.value.paymentNumber,
          ownerName: this.inputForm.value.paymentOwnerName,
          expire: this.inputForm.value.paymentExpire,
          cvv: this.inputForm.value.paymentCvv,
        },
        details: this.prodottiPiccoli,
      };

      this.checkoutService.metodoPost(formData);
      console.log('Post mandato');
      this.submittedForms.push(formData);

      console.log('Form values:', formData);

      // Aggiorna il totale
      this.checkoutService.aggiornaOrdini(formData);

      // Resetta il form
      this.inputForm.reset();
    }
  }

  setImage(item: prodottoModel): string {
    return this.imgService.getImmagine(item)[0];
  }
}

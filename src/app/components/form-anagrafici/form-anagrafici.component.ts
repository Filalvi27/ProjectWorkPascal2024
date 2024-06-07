import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { utenteCheckoutModel } from '../../models/utenteCheckoutModel';
import { prodottoPiccoloModel } from '../../models/utenteCheckoutModel';
import { prodottoModel } from '../../models/prodottoModel';
import { NgModel } from '@angular/forms';
import { CarrelloService } from '../../services/carrello.service';
import { FormControl, MinValidator } from '@angular/forms';
import  {CheckoutService} from '../../services/checkout.service'

@Component({
    selector: 'app-form-anagrafici',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './form-anagrafici.component.html',
    styleUrls: ['./form-anagrafici.component.css']
})
export class FormAnagraficiComponent {
    // inputForm: FormGroup;

    inputForm: FormGroup = new FormGroup({
        clientName: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        totalPrice: new FormControl(0, Validators.required),
        paymentNumber: new FormControl('', Validators.required),
        paymentOwnerName: new FormControl('', Validators.required),
        paymentExpire: new FormControl('', Validators.required),
        paymentCvv: new FormControl('', Validators.required),

    });

    showfirst: boolean = true;
    showsecond: boolean = false;


    submittedForms: utenteCheckoutModel[] = [];

    prodottiPiccoli: prodottoPiccoloModel[] = [];

    prodotti: prodottoModel[] = [];

    totale: number = 0;


    constructor(private formBuilder: FormBuilder, private serviceC: CarrelloService, private serviceU : CheckoutService) {
        // this.inputForm = this.formBuilder.group({
        //     clientName: ['', Validators.required],
        //     address: ['', Validators.required],
        //     totalPrice: ['', Validators.required],
        //     paymentNumber: ['', Validators.required],
        //     paymentOwnerName: ['', Validators.required],
        //     paymentExpire: ['', Validators.required],
        //     paymentCvv: ['', Validators.required],
        // });



        this.totale = this.serviceC.getTotale();
        this.prodotti = this.serviceC.getCarrello();

        this.prodottiPiccoli = this.prodotti.map(prod => ({ idproduct: prod.id, quantity: prod.quantity }));

        console.log(this.prodottiPiccoli);

    }


    get canSubmit() {
        return this.inputForm.valid;
    }



    onSubmit() {
        if (this.inputForm.valid) {
            var formData: utenteCheckoutModel = {
                clientName: this.inputForm.get('clientName')?.value,
                address: this.inputForm.get('address')?.value,
                totalPrice: this.inputForm.get('totalPrice')?.value,
                payment: {
                    number: this.inputForm.get('paymentNumber')?.value,
                    ownerName: this.inputForm.get('paymentOwnerName')?.value,
                    expire: this.inputForm.get('paymentExpire')?.value,
                    cvv: this.inputForm.get('paymentCvv')?.value
                },
                details: [] // Inizializza con un array vuoto
            };



            formData.details = this.prodottiPiccoli;

            this.submittedForms.push(formData);

            console.log("Form values:");
            console.log(formData);

            // Aggiorna il totale
            this.serviceU.aggiornaOrdini(formData);

            // Resetta il form
            this.inputForm.reset();
        }
    }

}














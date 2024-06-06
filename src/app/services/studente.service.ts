import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudenteService {

  constructor() { }

  getAll() : string[]
  {
    return ['Mario Rossi','Luigi Bianchi','Lucia Verdi','Francesca Gialli']
  }
}

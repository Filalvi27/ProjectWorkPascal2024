import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {prodottoModel} from "../models/prodottoModel";


@Injectable({
  providedIn: 'root'
})
export class ImgService {

  constructor() { }

    getImmagine(key:string){
    return `https://storage.googleapis.com/projectworkpascal/${key}`;
  }


}
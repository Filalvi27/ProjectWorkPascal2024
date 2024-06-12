import { Injectable } from '@angular/core';
import { prodottoModel } from '../models/prodottoModel';

@Injectable({
  providedIn: 'root',
})
export class ImgService {
  constructor() {}

  //URL
  getImmagine(item: prodottoModel): string[] {
    let img = item.images.split(';');
    let key: string[] = [];

    for (let i = 0; i < img.length; i++) {
      key.push(`https://storage.googleapis.com/projectworkpascal/${img[i]}`);
    }

    // console.log(key);
    return key;
  }
}

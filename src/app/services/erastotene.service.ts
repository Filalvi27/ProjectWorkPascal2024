import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErastoteneModel } from '../models/erastoteneModel';

@Injectable({
  providedIn: 'root'
})
export class ErastoteneService {

  constructor(private http:HttpClient) { }

  calcolaRemoto(n:number)
  {
    return this.http.get<ErastoteneModel[]>(`https://eratostene-z5nzzkwikq-uc.a.run.app/${n}/0`)
  }


  calcola(n:number) : (number | boolean)[]
  {
    let numeri = [];
    for(let i=0; i<=n; i++) numeri.push(i);
    numeri[0]=false;
    numeri[1]=false;

    for(let i=2; i*i<=n; i++)
    {
        if( numeri[i]!=false )
        {
            for(let j=i*2; j<=n; j+=i)
            {
                if( numeri[j]!=false) numeri[j]=false;    
            }
        }
    }

    return numeri;
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../card';

import { take, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class CardService {

    private readonly API = environment.API_MAGIC;

    constructor(private http: HttpClient) { }

    public getCards(): Observable<Card> {        
        console.log('---| getListDadosDesassociados.post<DadosDesassociados>');
        return this.http.get<Card>(`${this.API}/cards?page=3`).pipe(delay(2000));
    }
    
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadosAssociados } from '../entity/dados-associados';
import { DadosDesassociados } from '../entity/dados-desassociados';

import { take, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class DadosService {

    private readonly API = environment.API;

    constructor(private http: HttpClient) { }

    public getListDadosDesassociados(): Observable<DadosDesassociados[]> {        
        console.log('---| getListDadosDesassociados.post<DadosDesassociados>');
        return this.http.get<DadosDesassociados[]>(`${this.API}/DadosDesassociados`).pipe(delay(2000));
    }
    public getListDadosAssociados(): Observable<DadosAssociados[]> {
        console.log('---| getListDadosAssociados.post<DadosAssociados>');
        return this.http.get<DadosAssociados[]>(`${this.API}/DadosAssociados`).pipe(delay(2000));
    }
}
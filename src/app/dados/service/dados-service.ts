import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaDados } from '../entity/lista-dados';
import { DadosAssociados } from '../entity/dados-associados';
import { DadosDesassociados } from '../entity/dados-desassociados';

import { take, delay, map, catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})

export class DadosService {

    private readonly API = environment.API;

    constructor(private http: HttpClient) { }

    getListDadosDesassociados(): Observable<DadosDesassociados[]> {
        return this.http.get<DadosDesassociados[]>(`${this.API}/DadosDesassociados`).pipe(delay(2000));
    }

    getListDadosAssociados(): Observable<DadosAssociados[]> {
        return this.http.get<DadosAssociados[]>(`${this.API}/DadosAssociados`).pipe(delay(2000));
    }
}
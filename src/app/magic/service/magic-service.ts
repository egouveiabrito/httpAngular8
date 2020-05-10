import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, delay, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { respondeApiMagic } from '../respondeApiMagic';

@Injectable({
    providedIn: 'root'
})

export class CardService {

    private readonly API = environment.API_MAGIC;

    constructor(private http: HttpClient) { }

    public getCards(search: string): Observable<respondeApiMagic> {   
        return this.http.get<respondeApiMagic>(`${this.API}/cards/search?q=${search}`).pipe(delay(1000)).pipe(take(1));
    }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from '../entity/curso';
import { take, delay } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  private readonly API = environment.API;

  constructor(private http: HttpClient) { }

  public list() {
    return this.http.get<Curso[]>(`${this.API}/cursos`).pipe(delay(2000));
  }

  public loadByID(id) {
    return this.http.get<Curso[]>(`${this.API}/cursos${id}`).pipe();
  }

  private create(curso) {
    return this.http.post(`${this.API}/cursos`, curso).pipe(take(1));
  }

  private update(curso) {
    return this.http.put(`${this.API}/cursos/${curso.id}`, curso).pipe(take(1));
  }

  save(curso) {
    if (curso.id) {
      return this.update(curso);
    }
    console.log(curso);
    return this.create(curso);
  }

  remove(id) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }
}
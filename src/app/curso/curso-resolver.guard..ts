import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso/entity/curso';
import { CursosService } from '../curso/service/cursos.service';

@Injectable({
    providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {
    constructor(private service: CursosService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Curso> {
        if (route.params && route.params['id']) {
            return this.service.loadByID(route.params['id']);
        }
        return of({
            id: null,
            nome: null,
            professor: null,
            data: null,
            tipo: null,
        });
    }
}
import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../service/cursos.service";
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../entity/curso';
import { catchError } from 'rxjs/operators';
import { empty, Subject } from 'rxjs';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
  preserveWhitespaces: true

})
export class CursoListComponent implements OnInit {

  cursos$: Observable<Curso[]>;
  
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
  ) { }
  
  ngOnInit() {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError(error => {
        this.handleError();
        return empty();
      })
    );
  }

  onDelete(id) {
  }

  onEdit(id) {
  }

  handleError() {
  }

}
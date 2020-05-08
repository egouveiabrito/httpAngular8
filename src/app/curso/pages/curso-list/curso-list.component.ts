import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../service/cursos.service";
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../entity/curso';
import { catchError } from 'rxjs/operators';
import { empty, Subject } from 'rxjs';
import { AlertModalService } from '../../../share/alert-modal.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
  preserveWhitespaces: true

})
export class CursoListComponent implements OnInit {

  deleteModalRef: BsModalRef;

  cursos$: Observable<Curso[]>;
  
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
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
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }
}
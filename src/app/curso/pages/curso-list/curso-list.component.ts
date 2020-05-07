import { Component, OnInit, ViewChild } from '@angular/core';
import { CursosService } from "../../service/cursos.service";
import { Observable } from 'rxjs/internal/Observable';
import { Curso } from '../../entity/curso';
import { catchError } from 'rxjs/operators';
import { empty, Subject } from 'rxjs';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from '../../../share/alert-modal/alert-modal.component';


@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css'],
  preserveWhitespaces: true

})
export class CursoListComponent implements OnInit {

  bsModalRef: BsModalRef;

  deleteModalRef: BsModalRef;
  @ViewChild('deleteModal', { static: true }) deleteModal;
  
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private  modalService: BsModalService,

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
    this.bsModalRef = this.modalService.show(AlertModalComponent);
    this.bsModalRef.content.type = 'danger';
    this.bsModalRef.content.message = 'Erro ao carregar cursos. Tente novamente mais tarde!';
  }

}
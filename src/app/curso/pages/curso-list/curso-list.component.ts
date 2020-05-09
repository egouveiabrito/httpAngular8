import { Routes, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../service/cursos.service";
import { Curso } from '../../entity/curso';
import { Observable, empty, of, Subject, EMPTY } from 'rxjs';
import { catchError, switchMap, take } from 'rxjs/operators';
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

  page: number = 1;

  count: number = 5;

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
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

    const result$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso?');
    
    result$.asObservable()
      .pipe(
        take(1),
        switchMap(result => result ? this.service.remove(id) : EMPTY)
      )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao remover curso. Tente novamente mais tarde.');
        }
      );
  }

  onEdit(id) {
    
      this.router.navigate(['editar', id], {relativeTo: this.route})
  }
  
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }
}
import { ActivatedRoute } from '@angular/router';
import { Curso } from './../../entity/curso';
import { Component, OnInit } from '@angular/core';
import { CursosService } from "../../service/cursos.service";
import { AlertModalService } from '../../../share/alert-modal.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html',
  styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

  curso: Curso = { id: 0, nome: "" };

  constructor(
    private service: CursosService,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    const curso = this.route.snapshot.data['curso'];
    console.log(curso);
  }

  onSubmit(f) {
    try {

      let msgSuccess = 'Curso criado com sucesso!';
      let msgError = 'Erro ao criar curso, tente novamente!';

      if (this.curso.id) {
        msgSuccess = 'Curso atualizado com sucesso!';
        msgError = 'Erro ao atualizar curso, tente novamente!';
      }

      this.service.save(this.curso).subscribe(
        success => {
          this.alertService.showAlertSuccess(msgSuccess);
          this.location.back();
        },
        error => this.alertService.showAlertDanger(msgError)
      );
    }
    catch (error) {
      console.log(error);
    }
  }
}

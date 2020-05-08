import { Component, OnInit, ɵConsole } from '@angular/core';
import { DadosService } from "../../../app/dados/service/dados-service";
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { empty } from 'rxjs';
import { DadosAssociados}  from "../entity/dados-associados";
import { DadosDesassociados } from "../entity/dados-desassociados";

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {

  DadosAssociados$: DadosAssociados[];

  DadosDesassociados$: DadosDesassociados[];

  constructor(
    private service: DadosService,
  ) { }

  ngOnInit(): void {
    this.OnListaDadosAssociados();
    this.OnListaDadosDesassociados();
  }

  OnListaDadosAssociados(): void {

    console.log('---| OnListaDadosAssociados: GESTÃO DE ACESSOS');

    this.service.getListDadosAssociados().subscribe(
      response => {
        this.DadosAssociados$ = response;
        console.log(response);
      },
    );
  }

  OnListaDadosDesassociados(): void {

    console.log('---| OnListaDadosDesassociados: GESTÃO DE ACESSOS');

    this.service.getListDadosDesassociados().subscribe(
      response => {
        this.DadosDesassociados$ = response;
        console.log(response);
      },
    );
  }

}

import { Component, OnInit } from '@angular/core';
import { DadosService } from "../../../app/dados/service/dados-service";
import { DadosAssociados } from "../entity/dados-associados";
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

  ngOnInit(): void 
  {
    this.OnListaDadosAssociados();
    this.OnListaDadosDesassociados();
  }

  OnListaDadosAssociados(): void {

    try {
      this.service.getListDadosAssociados().subscribe(
        response => {
          this.DadosAssociados$ = response;
          console.log('---| OnListaDadosAssociados: GESTÃO DE ACESSOS: responde :' + response);
        },
      );
    }
    catch (error) {
      console.error(error);
    }
  }

  OnListaDadosDesassociados(): void {

    try {
      this.service.getListDadosDesassociados().subscribe(
        response => {
          this.DadosDesassociados$ = response;
          console.log('---| OnListaDadosDesassociados: GESTÃO DE ACESSOS: responde :' + response);
        },
      );
    }
    catch (error) {
      console.error(error);
    }
  }
}

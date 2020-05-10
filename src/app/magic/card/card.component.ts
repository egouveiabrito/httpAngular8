import { Card } from './../card';
import { Pagination } from './../../share/pagination';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../magic/service/magic-service';
import { AlertModalService } from '../../../app/share/alert-modal.service';
import { isNumber } from 'util';
import { $ } from 'protractor';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Cards$: Card[];
  pagination: Pagination = { count: 10, page: 1, };
  search: string = "sorin";
  IsValidade: boolean = true;
  constructor(
    private service: CardService,
    private alertService: AlertModalService,

  ) { }

  ngOnInit(): void {
    this.OnSearch();
  }

  OnSearch() {

    try {
      if (this.OnValidate()) {
        this.service.getCards(this.search).subscribe(response => {
          this.Cards$ = response.data;
          console.log(this.Cards$);
          console.log('---| OnSearch: THE MAGIC');
        },
        );
      }
    }
    catch (error) {
      console.error(error);
    }
  }

  OnValidate(): boolean {

    if (this.search.length < 3) {
      this.alertService.showAlertDanger("É necessário infomar mais que três letras para buscar!");
      this.IsValidade = false;
      return false;
    }
     if (this.search.match(/\d+/g).length > 0) {
      this.alertService.showAlertDanger("É necessário infomar apenas letras!");
       this.IsValidade = false;
      return false;
    }
    return true;
  }
}

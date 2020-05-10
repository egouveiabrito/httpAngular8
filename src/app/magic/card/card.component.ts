import { Card } from './../card';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../magic/service/magic-service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cards$: Card;

  constructor(
    private service: CardService,
  ) { }

  ngOnInit(): void {
    this.OnListCards();
  }

  OnListCards(): void {

    try {
      this.service.getCards().subscribe(
        response => {
          console.log(response);
          console.log('---| OnListCards: THE MAGIC: responde :' + response);
        },
      );
    }
    catch (error) {
      console.error(error);
    }
  }
}

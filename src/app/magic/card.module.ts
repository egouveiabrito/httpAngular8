import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from '../magic/card/card.component';
import { CardRoutingModule } from './card-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    CardRoutingModule
  ],
  declarations: [CardComponent]
})
export class CardModule { }
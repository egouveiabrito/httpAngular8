import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DadosComponent  } from './dados/dados.component';
import { DadosRoutingModule } from './dados-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        DadosRoutingModule
    ],
    declarations: [DadosComponent]
})
export class DadosModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoListComponent } from './pages/curso-list/curso-list.component';
import { CursoEditComponent } from './pages/curso-edit/curso-edit.component';

@NgModule({
    imports: [
        CommonModule,
        CursoListComponent,
        CursoEditComponent
        
    ],
    declarations: [CursoListComponent, CursoEditComponent]
})
export class CursosModule { }
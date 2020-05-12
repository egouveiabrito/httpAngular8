import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CursosRoutingModule  } from './curso-routing.module';
import { CursoListComponent } from './pages/curso-list/curso-list.component';
import { CursoFormComponent } from './pages/curso-form/curso-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

@NgModule({
    imports: [
        CommonModule,
        CursosRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxPaginationModule,
        BsDatepickerModule.forRoot(),
    ],
    declarations: [CursoListComponent, CursoFormComponent],
})
export class CursosModule {};
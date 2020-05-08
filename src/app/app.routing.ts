import { Routes, RouterModule } from '@angular/router';

import { CursoListComponent } from '../app/curso/pages/curso-list/curso-list.component';
import { CursoFormComponent } from './curso/pages/curso-form/curso-form.component';
import { DadosComponent } from './dados/dados/dados.component';


const APP_ROUTES: Routes = [
    { path: 'novo', component: CursoFormComponent },
    { path: 'editar/:id', component: CursoFormComponent },
    { path: 'cursos', component: CursoListComponent },
    { path: 'dados', component: DadosComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES)

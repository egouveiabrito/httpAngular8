import { Routes, RouterModule } from '@angular/router';

import { CursoListComponent } from '../app/curso/pages/curso-list/curso-list.component';
import { CursoEditComponent } from './curso/pages/curso-edit/curso-edit.component';
import { DadosComponent } from './dados/dados/dados.component';


const APP_ROUTES: Routes = [
    { path: 'edit', component: CursoEditComponent },
    { path: '', component: CursoListComponent },
    { path: 'dados', component: DadosComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES)

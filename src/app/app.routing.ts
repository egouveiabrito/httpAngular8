import { Routes, RouterModule } from '@angular/router';

import { CursoListComponent } from '../app/curso/pages/curso-list/curso-list.component';
import { CursoEditComponent } from './curso/pages/curso-edit/curso-edit.component';

const APP_ROUTES: Routes = [
    { path: 'edit', component: CursoEditComponent },
    { path: '', component: CursoListComponent },
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(APP_ROUTES)

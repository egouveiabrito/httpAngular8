import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoListComponent } from './pages/curso-list/curso-list.component';
import { CursoFormComponent } from './pages/curso-form/curso-form.component';
import { CursoResolverGuard } from './curso-resolver.guard.';


const routes: Routes = [
    { path: '', component: CursoListComponent },    
    {
        path: 'novo',
        component: CursoFormComponent,
        resolve: {
            curso: CursoResolverGuard
        }
    },
    {
        path: 'editar/:id',
        component: CursoFormComponent,
        resolve: {
            curso: CursoResolverGuard
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {};
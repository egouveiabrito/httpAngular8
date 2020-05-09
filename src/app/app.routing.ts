import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'busca-reativa'
    },
    {
        path: 'cursos',
        loadChildren: () => import('./curso/curso.module').then(m => m.CursosModule)
    },
    {
        path: 'dados',
        loadChildren: () => import('./dados/dados.module').then(m => m.DadosModule)
    },
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
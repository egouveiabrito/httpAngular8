import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'cursos',
        loadChildren: () => import('./curso/curso.module').then(m => m.CursosModule)
    },
    {
        path: 'dados',
        loadChildren: () => import('./dados/dados.module').then(m => m.DadosModule)
    },
    {
        path: 'magic',
        loadChildren: () => import('./magic/card.module').then(m => m.CardModule)
    },      
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing'
import { SharedModule } from '../app/share/shared.module';
import { CursoEditComponent } from "../app/curso/pages/curso-edit/curso-edit.component";
import { CursoListComponent } from "../app/curso/pages/curso-list/curso-list.component";


@NgModule({
  declarations: [
    AppComponent,
    CursoListComponent,
    CursoEditComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





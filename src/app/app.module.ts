import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { FacturaComponent } from './components/factura/factura.component';
import { ResaltadoDirective } from './Directives/resaltado.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    FacturaComponent,
    ResaltadoDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

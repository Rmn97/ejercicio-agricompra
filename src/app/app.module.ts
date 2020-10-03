import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuLatComponent } from './components/menu-lat/menu-lat.component';
import { ContenidoComponent } from './components/contenido/contenido.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuLatComponent,
    ContenidoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

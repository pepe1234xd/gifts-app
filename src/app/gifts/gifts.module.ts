import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftsPageComponent } from './gifts-page/gifts-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ReslutadosComponent } from './reslutados/reslutados.component';



@NgModule({
  declarations: [
    GiftsPageComponent,
    BusquedaComponent,
    ReslutadosComponent
  ],
  exports:[
    GiftsPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GiftsModule { }

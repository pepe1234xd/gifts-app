import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  //! aseguro a ts que mi variable no es nula
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;
  
  /**
   *
   */
  constructor(private giftService:GifsService) {}
  
  buscar(){
    const valor = this.txtBuscar.nativeElement.value;

    if(valor.trim().length===0){return}
    
    this.giftService.buscarGifts(valor);
    this.txtBuscar.nativeElement.value='';
  }
}

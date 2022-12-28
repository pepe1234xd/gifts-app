import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-reslutados',
  templateUrl: './reslutados.component.html',
  styleUrls: ['./reslutados.component.css']
})
export class ReslutadosComponent {

  get resultados(){
    return this.giftService.resultados;
  }

  constructor(private giftService:GifsService){}
}

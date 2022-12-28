import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gift, SearchGiftsResponse } from '../interfaces/gifts.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private apiKey:string = 'OeGzVy4He9OzPAjLainE2wcCTpqsnOxK';
  private servicioUrl:string ='https://api.giphy.com/v1/gifs';
  private _historial: string[]=[];

  public resultados:Gift[]=[];

  get historial(){
    return [...this._historial];
  }

  constructor(private http:HttpClient){
    // if(localStorage.getItem('historial')){
    //   this._historial=JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifts(query:string=''){

    query = query.trim().toLowerCase();

    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,9);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }
    
    const params = new HttpParams().set('api_key',this.apiKey)
    .set('q', query);

    this.http.get<SearchGiftsResponse>(`${this.servicioUrl}/search`,{params})
    .subscribe((resp)=>{
      this.resultados = resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    })

  }
}

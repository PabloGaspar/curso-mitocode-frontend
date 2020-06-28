import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Preferencia } from '../models/preferencia';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class PreferenciasService {
  preferenciasUrl:string = "http://localhost:8080/api/preferencia";
  constructor(private http:HttpClient) { }

  getPreferencias(): Observable<Preferencia[]>{
    return this.http.get<Preferencia[]>(this.preferenciasUrl + '/listar');
  }

  addPreferencia(preferencia:Preferencia):Observable<Preferencia>{
    return this.http.post<Preferencia>(this.preferenciasUrl + '/agregar', preferencia, httpOptions);
  }
}

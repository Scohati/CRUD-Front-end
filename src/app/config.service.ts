import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  usuariosUrl = 'http://localhost:3000/usuario/listar';

  constructor(private http:HttpClient) {}


  public requestTest() :Observable<Object>{
    return this.http.get(this.usuariosUrl, {responseType: "json"})
  }
  
  public postTest():Observable<any> {
    return this.http.post(this.usuariosUrl, {responseType: undefined});
  }

  

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVIS } from '../config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class DetallesService {

  constructor(private http: HttpClient) { }

// ==============================================================
// CONSULTA TODOS LOS SERVICIOS
// ==============================================================
consultServis() {
  return new Promise(
    resolve => {
      this.http.get(URL_SERVIS + '/appcondominio/servicios/servicios.php?getAllServicios')
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          }
        );
    }
  );
}
}

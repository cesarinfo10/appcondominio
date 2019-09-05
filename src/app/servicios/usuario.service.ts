import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVIS } from '../config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usser: string;
  pass: string;
  id: any;

  constructor(private http: HttpClient) { }
/*VARIABLE GLOBALES*/
setrRUTvar(value) {
  this.usser = value;
}
setPassVar(value) {
  this.pass = value;
}
seIdUserVar(value) {
  this.id = value;
}
// ==============================================================
// INICIAR SESION
// ==============================================================
inicioSesion(name, pass) {
  this.setrRUTvar(name);
  this.setPassVar(pass);
  return new Promise(
    resolve => {
      this.http.get(URL_SERVIS + '/appcondominio/servicios/usuarios.php?usser=' + this.usser + '&pass=' + this.pass + '&session')
        .subscribe(
          data => {
            resolve(data);
          },
          err => {
            console.log(err);
          });
    }
  );
}
// ==============================================================
// CONSULTA DE USUARIO (SESIÓN)
// ==============================================================
consultUsuario() {
  return new Promise(
    resolve => {
      this.http.get(URL_SERVIS + '/appcondominio/servicios/usuarios.php?usser=' + this.usser + '&pass=' + this.pass + '&consultaUser')
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

// ==============================================================
// CONSULTA TODOS LOS USUARIOS
// ==============================================================
consultTodosUsuarios() {
  return new Promise(
    resolve => {
      this.http.get(URL_SERVIS + '/appcondominio/servicios/usuarios.php?getAll')
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
// ==============================================================
// CONSULTA DE USUARIO (SESIÓN)
// ==============================================================
cunsultaUserReporte(idUser) {
  return new Promise(
    resolve => {
      this.http.get(URL_SERVIS + '/appcondominio/servicios/usuarios.php?ID=' + idUser + '&consultaUserEdit')
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


  // ==============================================================
  // REGISTRO DE REPORTES
  // ==============================================================
  detalleReporteAdd(idUsuario, IDtorre, unidad, descripcion, resultadoSacan, urlImage) {
    const datos = {
      // tslint:disable-next-line:object-literal-key-quotes
      'idCliente': idUsuario,
      // tslint:disable-next-line:object-literal-key-quotes
      'idTorre': IDtorre,
      // tslint:disable-next-line:object-literal-key-quotes
      'unidad': unidad,
      // tslint:disable-next-line:object-literal-key-quotes
      'descripcion': descripcion,
      // tslint:disable-next-line:object-literal-key-quotes
      'descripcionQR': resultadoSacan,
      // tslint:disable-next-line:object-literal-key-quotes
      'rutaFoto': urlImage
    };
    const body = JSON.stringify(datos);
    return new Promise(
      resolve => {
        this.http.post(URL_SERVIS + '/appcondominio/servicios/usuarios.php?nuevoReportepos', body)
          .subscribe(
            data => {
              resolve(data);
            },
            err => {
              console.log(err);
            });
      }
    );
  }

    // ==============================================================
  // REGISTRO DE REPORTES SOLUCION
  // ==============================================================
  enviarSolucionAdd(usuario, desde, hasta, descripcion, urlImage) {
    const datos = {
      // tslint:disable-next-line:object-literal-key-quotes
      'usuario': usuario,
      // tslint:disable-next-line:object-literal-key-quotes
      'desde': desde,
      // tslint:disable-next-line:object-literal-key-quotes
      'hasta': hasta,
      // tslint:disable-next-line:object-literal-key-quotes
      'descripcion': descripcion,
      // tslint:disable-next-line:object-literal-key-quotes
      'rutaFoto': urlImage
    };
    const body = JSON.stringify(datos);
    return new Promise(
      resolve => {
        this.http.post(URL_SERVIS + '/appcondominio/servicios/usuarios.php?nuevoSolucionpos', body)
          .subscribe(
            data => {
              resolve(data);
            },
            err => {
              console.log(err);
            });
      }
    );
  }
}


import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  datosUser: string;
  apellido: string;
  email: string;
  tu: string;
  activo: string;

  constructor(private usuario: UsuarioService) {
        // ==============================================================
    // CONSULTA DE USUARIO (SESIÓN)
    // ==============================================================
    this.usuario.consultUsuario()
      .then(
        data => {

         // tslint:disable-next-line:no-string-literal
         this.datosUser = data['NOMBRE'];
         // tslint:disable-next-line:no-string-literal
         this.apellido = data['APELLIDO'];
         // tslint:disable-next-line:no-string-literal
         this.email = data['CORREO'];
         // tslint:disable-next-line:no-string-literal
         this.tu = data['DESCRIPCION'];
        // tslint:disable-next-line:no-string-literal
         if (data['ACTIVO'] === '1') {
          this.activo = 'Activo';
        } else {
          this.activo = 'Inactivo';
        }
        }
      )
      .catch(
        error => {
          console.log(error);
        }
      );
   }

  ngOnInit() {
  }

}

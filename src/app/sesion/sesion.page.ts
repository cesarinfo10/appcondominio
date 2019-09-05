import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  usser: string;
  pass: string;
  sessionausuario;

  constructor(private router: Router,
              private servicio: UsuarioService,
              public alertController: AlertController) {

    this.usser = '';
    this.pass = '';

  }

  ngOnInit() {
  }
  Session() {
    this.servicio.inicioSesion(this.usser, this.pass)
      .then(
        async data => {

          console.log(data);
          this.sessionausuario = data;
         /* SI ES CORRECTO */
          if (this.sessionausuario === 1) {
            this.router.navigate(['./home']);
          } else {
            const alert = await this.alertController.create({
              header: 'Atención!',
              message: 'Usuario o contraseña invalido.',
              buttons: ['Cerrar']
            });
            await alert.present();
          }
        });
  }
irRegistro() {
  this.router.navigate(['./home']);
}

}

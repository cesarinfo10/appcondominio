import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVIS } from '../config/url.servicios';

@Component({
  selector: 'app-detalle-solucion',
  templateUrl: './detalle-solucion.page.html',
  styleUrls: ['./detalle-solucion.page.scss'],
})
export class DetalleSolucionPage implements OnInit {

  usuarios;
  image: string;
  urlImage: string;
  idReporte;
  usuario: string;
  descripcion: string;
  desde: string;
  hasta: string;

  constructor(
    public alertController: AlertController,
    private camera: Camera,
    private servicio: UsuarioService,
    public http: HttpClient) {

      this.servicio.consultTodosUsuarios()
      .then(
        async data => {
          // tslint:disable-next-line:no-string-literal
          this.usuarios = data;
        });
  }

  ngOnInit() {
  }

  setrIMGvar(value) {
    this.urlImage = value;
  }

  camara() {
    const options: CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000,
      quality: 100,
      correctOrientation: true,
    };
    this.camera.getPicture( options )
    .then(imageData => {
      this.image = `data:image/jpeg;base64,${imageData}`;
    })
    .catch(error => {
      console.error( error );
    });
  }
  uploadimagen() {
    const url = URL_SERVIS + '/appcondominio/assets/detalle_reporte/images.php';
    // tslint:disable-next-line:prefer-const
    let postData = new FormData();
    postData.append('file', this.image);
    // tslint:disable-next-line:prefer-const
    // tslint:disable-next-line:typedef-whitespace
    // tslint:disable-next-line:prefer-const
    let data: Observable<any> = this.http.post(url, postData );
    data.subscribe((result) =>  {
      console.log(result.image_url);
      this.setrIMGvar(result.image_url);
    });
    }
// Enviar Reporte
SolucionAdd() {

  this.servicio.enviarSolucionAdd(
    this.usuario,
    this.desde,
    this.hasta,
    this.descripcion,
    this.urlImage)
    .then(
      async data => {
        console.log(data);
        this.limpiarCampos();
        const alert = await this.alertController.create({
          header: 'Operación exitosa!',
          message: 'Los datos se insertaron correctamente.',
          buttons: ['Cerrar']
        });
        await alert.present();
      }
    )
    .catch(
      error => {
        console.log(error + 'no se pudo insertar datos');
      }
    );

}
  limpiarCampos() {
    this.usuario = 'Usuario';
    this.desde = '';
    this.descripcion = '';
    this.hasta = '';
    this.image = '';
  }
}

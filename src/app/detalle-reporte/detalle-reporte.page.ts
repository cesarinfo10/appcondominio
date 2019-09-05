import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../servicios/usuario.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVIS } from '../config/url.servicios';

declare var window: any;

@Component({
  selector: 'app-detalle-reporte',
  templateUrl: './detalle-reporte.page.html',
  styleUrls: ['./detalle-reporte.page.scss'],
})
export class DetalleReportePage implements OnInit {
  image;
  resultadoSacan: string;
  tempImages: string[] = [];
  usuarios;
  idUsuario;
  APELLIDO: string;
  IDtorre;
  torre;
  unidad;
  descripcion: string;
  urlImage: string;

  constructor(private barcodeScanner: BarcodeScanner,
              public alertController: AlertController,
              private camera: Camera,
              private servicio: UsuarioService,
              public http: HttpClient) {
    this.resultadoSacan = '';

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

scan() {
  this.barcodeScanner.scan().then(barcodeData => {
    this.resultadoSacan = barcodeData.text;
   }).catch(err => {
       console.log('Error', err);
   });
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
buscarUsuario() {
  console.log(this.idUsuario);

  this.servicio.cunsultaUserReporte(this.idUsuario)
  .then(
    async data => {
      // tslint:disable-next-line:no-string-literal
     this.APELLIDO = data['APELLIDO'];
      // tslint:disable-next-line:no-string-literal
     this.torre = data['TORRES'];
     // tslint:disable-next-line:no-string-literal
     this.unidad = data['UNIDAD'];
    // tslint:disable-next-line:no-string-literal
     this.IDtorre = data['TORRE'];
    });
}
// Enviar Reporte
enviarReporteAdd() {

  this.servicio.detalleReporteAdd(
    this.idUsuario,
    this.IDtorre,
    this.unidad,
    this.descripcion,
    this.resultadoSacan,
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
    this.torre = '';
    this.unidad = '';
    this.descripcion = '';
    this.resultadoSacan = '';
    this.image = '';
  }
}

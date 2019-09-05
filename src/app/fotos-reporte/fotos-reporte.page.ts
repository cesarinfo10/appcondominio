import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVIS } from '../config/url.servicios';
@Component({
  selector: 'app-fotos-reporte',
  templateUrl: './fotos-reporte.page.html',
  styleUrls: ['./fotos-reporte.page.scss'],
})
export class FotosReportePage implements OnInit {
  image;
  tempImages: string[] = [];
  urlImage: string;
  constructor(private camera: Camera, public http: HttpClient) { }


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
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-iniciarronda',
  templateUrl: './iniciarronda.page.html',
  styleUrls: ['./iniciarronda.page.scss'],
})
export class IniciarrondaPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async iniciarRonda() {
  const alert = await this.alertController.create({
    header: 'Atención!',
    message: 'Inicio su ronda correctamente.',
    buttons: ['Ok']
  });
  await alert.present();
}
}

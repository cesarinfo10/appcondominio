import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-detenerronda',
  templateUrl: './detenerronda.page.html',
  styleUrls: ['./detenerronda.page.scss'],
})
export class DetenerrondaPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  async detenerRonda() {
    const alert = await this.alertController.create({
      header: 'Atención!',
      message: 'Su ronda se detuvo correctamente.',
      buttons: ['Ok']
    });
    await alert.present();
  }
}

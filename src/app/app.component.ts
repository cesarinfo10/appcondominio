import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Lista Rondas',
      url: '/ronda-list',
      icon: 'list'
    },
    {
      title: 'Iniciar Rondas',
      url: '/iniciarronda',
      icon: 'play'
    },
    {
      title: 'Scannear Punto',
      url: '/scanpunto',
      icon: 'barcode'
    },
    {
    title: 'Detener Rondas',
    url: '/detenerronda',
    icon: 'square'
    },
    {
      title: 'Lista Reportes',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Usuario',
      url: '/usuario',
      icon: 'person'
    },
    {
      title: 'Detalle Reporte',
      url: '/tabs/reporte',
      icon: 'paper'
    },
    {
      title: 'Detalle Solución',
      url: '/detalle-solucion',
      icon: 'build'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

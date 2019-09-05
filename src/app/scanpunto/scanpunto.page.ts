import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-scanpunto',
  templateUrl: './scanpunto.page.html',
  styleUrls: ['./scanpunto.page.scss'],
})
export class ScanpuntoPage implements OnInit {

  resultadoSacan: string;
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.resultadoSacan = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }
}

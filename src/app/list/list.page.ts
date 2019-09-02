import { Component, OnInit } from '@angular/core';
import { DetallesService } from '../servicios/detalles.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
detalles;
constructor(private detalle: DetallesService) {}


  ngOnInit() {
    this.detalle.consultServis()
    .then(
      async data => {
        console.log(data);
        this.detalles = data;
      });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}

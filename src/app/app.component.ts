import { Component } from '@angular/core';
import { Producto } from './models/productos.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];

  constructor(){
    this.arrComida = [
      new Producto('Pollo Asado','https://img.freepik.com/foto-gratis/tabla-cortar-madera-rodeada-platos-pasta-e-ingredientes-mesa_23-2148246798.jpg',10.52),
      new Producto('Carne Asada','https://pixnio.com/free-images/2021/10/15/2021-10-15-09-05-56-1350x900.jpg',9.45),
      new Producto('Chorizada','',11.00)
    ];
    this.arrBebida = [
      new Producto('Cacao','',2.30),
      new Producto('Linaza','',1.20)
    ]
  }
}

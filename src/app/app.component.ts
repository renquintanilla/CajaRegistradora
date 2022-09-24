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

  productosSeleccionados: Producto[];

  constructor(){
    this.productosSeleccionados = [];

    this.arrComida = [
      new Producto('Asado Res y Pollo','../assets/img/asado-mixto.jpg',15.75),
      new Producto('Hamburguesa','../assets/img/hamburguesa.jpg',10.52),
      new Producto('Pasta Pomodoro','../assets/img/pasta-pomodoro.jpg',9.50),
      new Producto('Pizza Margarita','../assets/img/pizza-margarita.jpg',8.16),
      new Producto('Sandwich Mixto','../assets/img/sandwich.jpg',7.13)
    ];
    this.arrBebida = [
      new Producto('Agua Alpina','../assets/img/agua-alpina.jpeg',1.00),
      new Producto('Coca Cola','../assets/img/coca-cola.jpg',1.20),
      new Producto('Pepsi','../assets/img/pepsi.jpg',1.10),
      new Producto('Fanta Naranja','../assets/img/fanta-naranja.jpg',1.10),
      new Producto('Cacao','../assets/img/refresco-cacao.jpg',2.15),
      new Producto('Limonada','../assets/img/limonada.jpg',2.00),
      new Producto('Refresco Naranja','../assets/img/jugo-natural-naranja.jpg',2.20),
      new Producto('Refresco Pitahaya','../assets/img/pitahaya.jpg',2.20),
    ]
  }

  onProductoSeleccionado($event: any){
    const productoEncontrado = this.productosSeleccionados.find(producto => producto.nombre === $event.nombre)
    
    if (productoEncontrado) {
      productoEncontrado.cantidad++;
     }  else {
      $event.cantidad = 1;
      this.productosSeleccionados.push($event);
     }
}
}

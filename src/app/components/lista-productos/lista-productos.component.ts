import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../models/productos.model';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() titulo: string;
  @Input() productos: Producto[];

  constructor() {
    this.titulo = '';
    this.productos = [];

   }

  ngOnInit(): void {
  }

}

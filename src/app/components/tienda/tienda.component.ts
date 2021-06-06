import { Component, OnInit } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/productos.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  providers:[ProductoService]
})
export class TiendaComponent implements OnInit {

  public projects: Producto[];
  public url: string;

  constructor(
    private _productoService:ProductoService
  ) {
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  //Se debe poner el objeto : producto el cual viende del send del backend par que la funcion logre encontrar el JSON 
  getProjects(){
    this._productoService.getProductos().subscribe(
      response=>{
        if(response.producto){
          this.projects=response.producto;
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }
}




  /*getProd() {
    this._productoService.getProductos().subscribe(
      response => {
        if (response.productos) {
          this.productos = response.productos;
        }
      },
      error => {
        console.log(<any>error);
      }
    );*/


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from '../models/producto';
import { Global } from '../services/global';
import { ProductoService } from '../services/productos.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css'],
  providers: [ProductoService]
})
export class DetalleProductoComponent implements OnInit {

  public url: string;
  public producto: Producto;
  public confirm: boolean;

  constructor(
    private _productoService: ProductoService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url;
    this.confirm = false;
  }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      let id = params.id;
      this.getProducto(id);
    });
  }

  getProducto(id) {
    this._productoService.getProducto(id).subscribe(
      response => {
        this.producto = response.producto;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  setConfirm(confirm){
    this.confirm=confirm;
  }

  deleteProducto(id){
    this._productoService.deleteProject(id).subscribe(
      response=>{
        if(response.producto){
          this._router.navigate(['tienda']);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }


}

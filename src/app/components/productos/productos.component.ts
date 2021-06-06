import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { Global } from 'src/app/services/global';
import { ProductoService } from 'src/app/services/productos.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductoService, UploadService]
})
export class ProductosComponent implements OnInit {

  public title: string;
  public producto: Producto;
  public filesToUpload: Array<File>;
  public status: string;
  public saveProject;
  public url: string;

  constructor(
    private _productoService: ProductoService,
    private _uploadService: UploadService
  ) {
    this.title = 'Añadir un nuevo producto';
    this.producto = new Producto('','','','', 0 , 0 ,'');
    //this.producto = new Producto('id','nom','desc','marca','prec','gara','ima')
    this.url = Global.url;
   }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._productoService.saveProject(this.producto).subscribe(
      response=>{
        if(response.producto){
          //subir la imagen
          if(this.filesToUpload){
            this._uploadService.makeFileRequest(Global.url+"uploadImage/"+response.producto._id,[],this.filesToUpload,'image')
            .then((result:any)=>{
              this.saveProject=result.producto;
              this.status='success';
              console.log(result);
              form.reset();
            });
          }else{
            this.saveProject=response.producto;
            this.status='success';
            form.reset();
          }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput:any){
    //realizamos un cast forzado, todos los archivos que seleccionamos en el input
    this.filesToUpload=<Array<File>>fileInput.target.files;
  }

}

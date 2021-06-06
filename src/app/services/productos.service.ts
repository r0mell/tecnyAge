import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs/Observable';
import { Producto } from "../models/producto";
import { Global } from "./global";


@Injectable()
export class ProductoService {
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url;
    }

    //ya esta implementado en el front 
    getProductos(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'products', { headers: headers });
    }
    //aun hay que implementar
    saveProject(producto: Producto): Observable<any> {
        let params = JSON.stringify(producto);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.post(this.url + 'saveProducto', params, { headers: headers });
    }

    //ya implementado
    getProducto(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.get(this.url + 'product/' + id, { headers: headers });
    }
    //funcionando
    deleteProject(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.delete(this.url + 'product/' + id, { headers: headers });
    }

    updateProject(project): Observable<any> {
        let params = JSON.stringify(project);
        let headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this._http.put(this.url + 'product/' + project._id, params, { headers: headers });

    }
}
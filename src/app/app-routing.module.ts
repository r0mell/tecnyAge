import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EditComponent } from './components/edit/edit.component';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';



const routes: Routes = [

    {path: '', component: HomeComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'tienda', component: TiendaComponent},
    {path: 'editar', component: EditComponent},
    {path: 'detallePro/:id', component: DetalleProductoComponent},

    
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {  }

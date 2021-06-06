export class Producto {
    constructor(
        public _id: string,
        public nombre: string,
        public descripcion: string,
        public marca: string,
        public precio: Number,
        public garantia: Number,
        public image: string

    ) { }
}
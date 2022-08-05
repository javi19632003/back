import {ContenedorMongo} from '../../../modelos/index.js'


class ProductoMongo extends ContenedorMongo {
    constructor(){
        super('productos')
    }
}

export {ProductoMongo}
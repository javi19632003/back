import {ContenedorMongo} from '../../../modelos/index.js'


class CarritoMongo extends ContenedorMongo {
    constructor(){
        super('carritos')
    }
}

export {CarritoMongo}
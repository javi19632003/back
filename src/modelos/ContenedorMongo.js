//import {MongoClient, ObjectId} from 'mongodb'
//import { mongo }               from '../configuracion/index.js'

//const client = new MongoClient(mongo.uri)
//await client.connect()
//const database = client.db('coder-demo')

import mongoose from "mongoose";
import { Producto } from "../modelos/schemas/productos.js";



class ContenedorMongo {
    constructor(nombreColeccion){
        this.coleccion = nombreColeccion
        this.conectar();
    }

    async conectar(){
        try {
            mongoose.connect( 
                process.env.MONGO_DB_URI,
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true,
                }
            )    
        } catch (error) {
            throw new Error(error)        
        }
    }
/*
    async mostrarTodos() {
        try {
            const resultado = await this.coleccion.find().toArray()
            
            return resultado
        } catch (error) {
            throw new Error(error)        
        }
    }

    async guardarElemento(nuevoElemento){
        try {
            const respuesta = await this.coleccion.insertOne(nuevoElemento)
            return respuesta
        } catch (error) {
            throw new Error(error)
        }
    }

    async mostrarPorId(id){
        try {
            const resultado = await this.coleccion.findOne({_id: ObjectId(id)})
            return resultado
        } catch (error) {
            return error
        }
    }

    async actualizar(id, nuevaData){
        try {
            const elementoActualizado = this.coleccion.findOneAndUpdate({_id:ObjectId(id)}, {$set: nuevaData})
            return elementoActualizado
        } catch (error) {
            throw new Error(error)
        }
    }

    async eliminarPorId(id){
        try {

            const elementoeliminado = await this.coleccion.deleteOne({_id: ObjectId(id)})
            return elementoeliminado

            
        } catch (error) {
            throw new Error(error)
        }
    }
    */
}

export {ContenedorMongo}
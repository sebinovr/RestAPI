const express = require('express')
const router = express.Router()

const clienteController = require('../controllers/clienteController')

module.exports = function(){

    //agregar nuevos clientes
    router.post('/clientes', clienteController.nuevoCliente)
    
    //obtener todos los clientes
    router.get('/clientes', clienteController.mostrarClientes)

    //obtener todos los clientes
    router.get('/clientes/:idCliente', clienteController.mostrarCliente)

    //actualizar cliente
    router.put('/clientes/:idCliente', clienteController.actualizarCliente)

    //eliminar cliente
    router.delete('/clientes/:idCliente', clienteController.eliminarCliente)

    return router
}
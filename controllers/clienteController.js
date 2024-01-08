const Clientes = require('../models/clientes')

//agrega nuevo cliente
exports.nuevoCliente = async( req, res, next) => {
    const cliente = new Clientes(req.body)

    try {

        //almacenar registro
        await cliente.save()
        res.json( { mensaje: 'Se agrego nuevo cliente'})
        
    } catch (error) {
        console.log(error)
        next()
    }
}
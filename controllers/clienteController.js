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

//muestra todos los clientes
exports.mostrarClientes = async(req, res, next) => {
    try {
        const clientes = await Clientes.find({})
        res.json(clientes)

    } catch (error) {
        console.log(error)
        next()
    }
}

//muestra cliente por id 
exports.mostrarCliente = async(req, res, next) => {
    try {
        const cliente = await Clientes.findById( req.params.idCliente)
        res.json(cliente)

    } catch (error) {
        console.log(error)
        next()
    }
}

//actualiza cliente por id 
exports.actualizarCliente = async(req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate({ _id: req.params.idCliente}, 
            req.body, {
            new: true
        })

        res.json(cliente)

    } catch (error) {
        console.log(error)
        next()
    }
}

//eliminar cliente por id 
exports.eliminarCliente = async(req, res, next) => {
    try {
        await Clientes.findOneAndDelete({ _id: req.params.idCliente})
        res.json( { mensaje: 'Cliente eliminado'})

    } catch (error) {
        console.log(error)
        next()
    }
}
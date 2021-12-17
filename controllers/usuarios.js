const { response } = require('express');

const usuariosGet = ( req, res ) =>{

    const params = req.query;

    res.json({
        ok: true,
        message: 'Endpoint / success',
    });
}

const usuariosPost = ( req, res = response ) => {

    const { nombre, edad } = req.body;
    
    res.json({
        ok: true,
        messague: 'Endpoint / post _ controller',
        nombre,
        edad
    });

};

const usuariosPut = ( req, res = response ) => {

    const id = req.params.id;

    res.json({
        ok: true,
        message: 'Endpoint /put - controller',
    });

};

const usuariosDelete = ( req, res = response ) => {
    res.json({
        ok: true,
        message: 'Endoint - delete - controller',
    });
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}
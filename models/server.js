const express = require('express');
const cors = require('cors');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //midelware
        // no son mas que funciones que le van a añadir otra funcionalidad mas a nuestro
        // web server

        this.middlelwares();

        this.routes();

    }


    middlelwares(){
        //Cors
        this.app.use( cors() );

        // Lectura y parseo de un json
        this.app.use( express.json() )

        this.app.use( express.static('public') );
    }

    routes(){

        this.app.use( this.usuariosPath , require('../routes/usuarios') );

    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('servidor corriendo en el puerto', this.port);
        })
    }

}


module.exports = Server;
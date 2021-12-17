const { Router } = require('express');

const { usuariosGet, usuariosPut, usuariosDelete } = require('../controllers/usuarios');


const router = Router();


router.get('/', usuariosGet );

router.post( '/', (req, res) => {
    res.status(201).json({
        ok: false,
        message: 'Endpoint yuca'
    })
});

router.put('/:id', usuariosPut );

router.delete('/',  usuariosDelete );



module.exports = router;
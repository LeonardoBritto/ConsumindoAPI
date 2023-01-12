const express = require('express')
const router = express.Router()
const soap = require('soap')

router.get('/consulta/:cep', function(req, res, next) {
    const cepRecebido = req.params.cep
    const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl' 
    
    soap.createClient(url, function (err, client) {
        client.consultaCEP({cep: cepRecebido}, function(err, result) {
            if(err) return console.log(err);
            res.send(result)
        })
    })    
})

module.exports = router

const express = require('express')
const cors = require('cors')
const bodyParse = require('body-parser')

const app = express()

const contatos = require('./modulo/funcao')

app.use((request, response, next)=>{

    response.header('Access-Control-Allow-Origin', '*')

    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors()) 

    next()
})

app.get('/v1/whatsapp/dadospessoais/filtro/:number', cors(), async function(request,response){
    let cell = request.params.number
    let numberUser = contatos.getListaNaoEditavel(cell)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/whatsapp/dados/filtro/:number', cors(), async function(request,response){
    let cell = request.params.number
    let numberUser = contatos.getListaEditavel(cell)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/whatsapp/dadoscontato/filtro/:number', cors(), async function(request,response){
    let cell = request.params.number
    let numberUser = contatos.getDadosDosUsuarios(cell)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/whatsapp/conversa/filtro/:number', cors(), async function(request,response){
    let cell = request.params.number
    let numberUser = contatos.getConversas(cell)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/whatsapp/conversasrelacionadas/filtro', cors(), async function(request,response){
    let cell = request.query.number
    let nameContato = request.query.nameContato
    let numberUser = contatos.getFiltroUsuarioeConversa(cell, nameContato)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.get('/v1/whatsapp/palavrachave/filtro', cors(), async function(request,response){
    let cell = request.query.number
    let nameContato = request.query.nameContato
    let chave = request.query.chave
    let numberUser = contatos.getPalavraChvae(cell, nameContato, chave)

    if(numberUser){
    response.status(200) //sucess
    response.json(numberUser)

    }else{
        response.status(404) //Not found 
        response.json({'status': 404, 'message': 'Nao foi possivel encontrar nenhum item de retorno'})
    }
    
})

app.listen('8080', function(){
    console.log('API aguardando novas requisições...')
})
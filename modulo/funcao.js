const contatos = require('./contatos')
const listaContatos = contatos.contatos['whats-users']


const getListaNaoEditavel = function(number){
    let numberUser = number
    let informacoes = {id: '',  account: '', start: '', end: '', number:''}
    

    listaContatos.forEach(function(dados){
        
        if( numberUser == dados.number){
            informacoes.id = dados.id
            informacoes.account = dados.account
            informacoes.start = dados['created-since'].start
            informacoes.end = dados['created-since'].end
            informacoes.number = dados.number
        }
        
    })    

    return informacoes
     
}

//console.log(getListaUsuario('11966578996'))//

const getListaEditavel = function(number){
    let numberUser = number
    let informacoes = {nickname: '', profileImage: '', background: ''}
    

    listaContatos.forEach(function(dados){
        
        if( numberUser == dados.number){
            informacoes.nickname = dados.nickname
            informacoes.profileImage = dados['profile-image']
            informacoes.background = dados.background
        }
        
    })    

    return informacoes

}

//console.log(getListaEditavel('11966578996'))//

const getDadosDosUsuarios= function(number){
    let numberUser = number
    let lista = { list: []}
    
    

    listaContatos.forEach(function(dados){
        
        if( numberUser == dados.number){
            dados.contacts.forEach(function(contact){
                let informacoes = {name: '', description: '', image: ''}
                informacoes.name = contact.name
                informacoes.description = contact.description
                informacoes.image = contact.image

                lista.list.push(informacoes)
            }) 
        }
        
    })    

    return lista

}
//console.log(getDadosDosUsuarios('11955577796'))//

const getConversas=function(number){
    let numberUser = number
    let informacoes = {name: '', contacts: []}

    listaContatos.forEach(function(dados){

        if( numberUser == dados.number){
            informacoes.name = dados.nickname
            informacoes.contacts = dados.contacts
        }
    })

    return informacoes
}
//console.log(getConversas('11987876567'))//

const getFiltroUsuarioeConversa =function(number,nameContato){
    let numberUser = number
    let informacoes = {number: number, messagens: []}
    let status = false 

    listaContatos.forEach(function(dados){
        if( numberUser == dados.number){
            dados.contacts.forEach(function(contact){
                if(contact.name == nameContato){
                    status = true
                    informacoes.messagens = contact.messages
                }
            })
        }
    })
    //se o usuario colocar algo errado retorna false 
    return status ? informacoes : status
}
//console.log(getFiltroUsuarioeConversa('11987876567', "Ana Maria"))//

const getPalavraChvae =function(number,nameContato,chave){
    let numberUser = number
    let informacoes = {number: number, name:nameContato , messagens: []}
    let status = false 

    listaContatos.forEach(function(dados){
        if( numberUser == dados.number){
            dados.contacts.forEach(function(contact){
                if(contact.name == nameContato){
                    contact.messages.forEach(function(message){
                        if(message.content.includes(chave)){
                            informacoes.messagens.push(message.content)
                            status = true
                        }
                    })
                }
            })
        }
    })
    return informacoes
}
//console.log(getPalavraChvae('11987876567', "Ana Maria", "you"))//


module.exports ={
    getListaNaoEditavel,
    getListaEditavel,
    getDadosDosUsuarios,
    getConversas,
    getFiltroUsuarioeConversa,
    getPalavraChvae
}
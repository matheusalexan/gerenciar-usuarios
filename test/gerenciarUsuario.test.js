const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios')
const { expect } = require('chai')

describe('Testar a funcao de gestao de usuario', () => {
  it('Validar que posso adicionar um novo nome de usuario na lista', () => {
    //Adicionar um novo nome na lista de usuario
      adicionarNovoUsuario('matheus')
    //retornar a lista de usuario na caixa lista de usuarios
      const listaDeUsuarios = retornarUsuarios()
    //comparar se um novo nome esta no fin da lista de usuarios
      expect(listaDeUsuarios.at(-1)).to.equal('matheus')
  })

})
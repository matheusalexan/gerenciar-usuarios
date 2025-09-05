const usuarios = [ 'carlos', 'ingrid', 'lucas', 'julio']

function retornarUsuarios (){
    return usuarios
}
// funcao pra adicionar nome na caixa usuarios
function adicionarNovoUsuario (nome){
    usuarios.push(nome);
}

module.exports = {
  retornarUsuarios,
  adicionarNovoUsuario
}

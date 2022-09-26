/* 1. Dado o objeto usuario abaixo, monte a mensagem 
Olá... Eu sou João e tenho 25 anos de idade. Sou programador e minha cor 
preferida é verde!, 
passando dinamicamente as informações contidas no objeto.*/

const usuario = {
    nome: "João",
    idade: 25,
    profissao: "programador",
    cor_preferida: "verde",
}

console.log(`Olá, meu nome é ${usuario.nome} e tenho ${usuario.idade} anos de idade.
Sou ${usuario.profissao} e minha cor preferida é ${usuario.cor_preferida}!`)
/*
Dado a lista de usuários abaixo, separe os usuários que possuem menos de 18 anos dos demais. 
Para isso, você deverá criar duas novas constantes jovens e adultos. 
Todos os usuários menores de 18 anos devem ser inseridos na constante jovens e os demais 
na constante adultos.
*/
const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
]

const adultos = []
const jovens = []

for (const cadaUsuario of usuarios) {
    if(cadaUsuario.idade < 18) jovens.push(cadaUsuario)
    else adultos.push(cadaUsuario)    
}

console.log(jovens)
console.log(adultos)
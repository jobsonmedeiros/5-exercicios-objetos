/*
Abaixo, temos uma lista de pessoas, onde cada pessoa, possui uma lista com um, 
vários ou nenhum pet. Percorra cada pessoa da lista e imprima uma mensagem de 
acordo com as condições a seguir.

a. Se a pessoa não tiver pets, a mensagem deve ser: Sou João e não tenho pets.
b. Se a pessoa tiver apenas um pet, a mensagem deve ser: Sou Ana e tenho 2 pets.
c. Se a pessoa tiver mais de um pet, a mensagem deve ser: Sou Beatriz e tenho 1 pet.

Obs.: O nome da pessoa e a quantidade de pets deve ser dinâmico, de acordo com as 
informações de cada objeto.
*/

const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

for (const cadaUsuario of usuarios) {
  if (cadaUsuario.pets.length == 0) {
    console.log(`Sou ${cadaUsuario.nome} e não tenho pets.`);
  } else if (cadaUsuario.pets.length == 1) {
    console.log(`Sou ${cadaUsuario.nome} e tenho apenas 1 pet.`);
  } else if (cadaUsuario.pets.length > 1) {
    console.log(`Sou ${cadaUsuario.nome} e tenho mais de 1 pet.`);
  }
}

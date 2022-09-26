/*
1. Dado a lista de objetos abaixo, adicione uma nova propriedade chamada maior_idade 
para cada objeto da lista. A propriedade deverá receber um valor booleano de acordo 
com a propriedade idade de cada objeto. Caso a idade seja maior que 17, o valor deve 
ser true, caso contrário false.
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
];

for (let i = 0; i < usuarios.length; i++) {
  if (usuarios[i].idade > 17) {
    usuarios[i].maior_idade = true;
  } else {
    usuarios[i].maior_idade = false;
  }
}

for (const cadaUsuario of usuarios) {
  console.log(cadaUsuario);
}

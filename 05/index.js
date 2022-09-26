const curso = {
    id: 1234,
    nome: "Lógica de programação",
    aulas: [],
}
/*
Um novo curso foi criado e suas aulas precisam ser cadastradas. 
Acima temos o objeto curso, que possui uma propriedade chamada aulas. 
Sua tarefa é adicionar a lista de aulas abaixo na propriedade aulas do objeto curso.

Lista de aulas

Aula 01
Identificador = 01
Nome da aula = Introdução a programação

Aula 02
Identificador = 02
Nome da aula = Variáveis

Aula 03
Identificador = 03
Nome da aula = Condicionais

Aula 04
Identificador = 04
Nome da aula = Arrays
*/

curso.aulas.push(
    {Identificador : 01, Nome_da_aula : "Introdução a programação"},
    {Identificador : 02, Nome_da_aula : "Variáveis"},
    {Identificador : 03, Nome_da_aula : "Condicionais"},
    {Identificador : 04, Nome_da_aula : "Arrays"}
    )

    console.log(curso)
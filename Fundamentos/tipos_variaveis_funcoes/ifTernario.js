const idadeMinima = 18;
const nomePessoa = "Lucas";
const idadePessoa = 17;
let bebida = "";

console.log(
  `${nomePessoa} diz: Por favor, me vê uma ${
    idadePessoa >= idadeMinima ? (bebida = "cerveja") : (bebida = "coca-cola")
  }`
);
// 38. Escreva um algoritmo que leia o NOME de um aluno, o número de aulas freqüentadas e as quatro notas que ele obteve durante o curso. Calcular e imprimir:
// A nota final do aluno.
// A nota média do aluno.
// O resultado (aprovado ou reprovado), sendo que, para ser aprovado, é necessário ter freqüentado 160 aulas ou mais e obter uma nota final de 60 pontos ou acima.
console.log('------------------')
const nomeAluno = "João";
const aulasPresentes = 170;
const notaMateria1 = 90;
const notaMateria2 = 30;
const notaMateria3 = 50;
const notaMateria4 = 50;
let notaFinal = notaMateria1 + notaMateria2 + notaMateria3 + notaMateria4 
let media = notaFinal/ 4;

console.log(`${nomeAluno}, Sua nota final é de ${notaFinal} pontos sua média é de ${media} pontos ${media>=60 && aulasPresentes >= 160?`${nomeAluno} foi aprovado`:'você foi reprovado'}`)
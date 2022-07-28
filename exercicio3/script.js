const numeros = [9,2,8,1];
const jogadores = ["Messi", "Neymar", "Ronaldo"];
const arrayMisto = [7, "craques", true];
const numerosCopia = numeros.slice();
console.log(numerosCopia, numeros);
const jogadoresCopia = jogadores.slice();
console.log(jogadoresCopia, jogadores);
const arrayMistoCopia = arrayMisto.slice();
console.log(arrayMistoCopia, arrayMisto);

console.log("Agora as mudanças");

numerosCopia.push(3)
console.log(numerosCopia, numeros);
jogadoresCopia.pop();
console.log(jogadoresCopia, jogadores);
arrayMistoCopia.splice(1,1);
console.log(arrayMistoCopia, arrayMisto);
/*
Envolva todo o código desse desafio em uma IIFE.
*/

//metodo reduce, faz reduzir um array
var arr =[1,2,3,4,5]
var reduce = arr.reduce(function(acumulado, atual, index,array){  

    return acumulado + atual;    
    },0);
//15

var arr =['r','u','i']

var reduce = arr.reduce(function(acumulado, atual, index,array){  
 
    return acumulado + atual;    
    });
//'rui'


var reduceRight = arr.reduceRight(function(acumulado, atual, index,array){  
    return acumulado + atual;
    });

//'iur' faz o reduce da direita para a esquerda


//IndexOf
var arr =[1,2,3,4,5]
console.log(arr.indexOf(3,2))
2 // posição ou o indice do valor no array

console.log(arr.indexOf('u')=== -1)
false
console.log(arr.indexOf('u') > -1)
true
//-1 quer dizer q nao existe 

/*
Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
elemento será um objeto no formato:
{ number: [NUMBER] }
Os números devem ser de 1 a 10.
Mostre esse array no console.
*/
console.log( 'Number Objects Array:' );
var numberObjects = [{number:1},{number:2},{number:3},{number:4},{number:5},{number:6},{number:7},{number:8},{number:9},{number:10},]

/*
Crie um array chamado `justNumbers`, que terá como elementos somente os
números do array criado acima. Mostre esse novo array no console.
*/
console.log( '\nJust Numbers:' );
var justNumbers = [1,2,3,4,5,6,7,8,9,10]

/*
Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
no console.
*/
console.log( '\nJust module of division by 2 or 3:' );

var justMod2Or3 = justNumbers.filter(function(item){    
    return item % 2 == 0
    });

/*
Declare uma variável chamada operation que receba, do array criado acima,
um valor reduzido pela seguinte operação:
- Somar 1 ao último valor retornado;
- Multiplicar o resultado pelo valor atual.
O cálculo deve começar com zero.
Mostre o resultado no console.
*/
console.log( '\nOperation:' );
var reduce = justNumbers.reduce(function(acumulado, atual, index,array){  
result = acumulado + atual;   
    return  result * atual  ; 

     },1);

/*
Faça o mesmo cálculo passado acima, mas começando do último item para o
primeiro. O nome da variável deve ser operation2. Mostre o resultado no
console.
*/
console.log( '\nOperation 2:' );
var reduce = justNumbers.reduceRight(function(acumulado, atual, index,array){  
result = acumulado + atual;   
    return  result * atual  ; 
     },1);

/*
Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
a "língua do P".
PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
falada, como se você estivesse falando em código xD
*/
console.log( '\nSeu nome na língua do "P":' );
var arr =['r','u','i']
var reduce = arr.reduce(function(acumulado, atual, index,array){  
 var p = 'p'
    return acumulado + p + atual ;    
    });

/*
Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
e atribuirá o seu nome invertido (usando o array criado acima).
*/
console.log( '\nInversed Name:' );
// ?

/*
Mostre no console o array `numberObjects`.
*/
console.log( '\nNumber objects' );
// ?

/*
Verifique se existem em algum índice de numberObjects um objeto ìgual a
{ number: 2 }. Se houver, mostre no console:
- "Existe um objeto { number: 2 } em numberObjects!"
Senão, mostre a frase:
- "Não existe um objeto { number: 2 } em numberObjects :("
Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
o que acontece ;)
*/
console.log( '\nExiste um { number: 2 } em numberObjects?' );
// ?

/*
Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
*/
console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );
// ?

/*
Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
formato de String.
*/
console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
// ?

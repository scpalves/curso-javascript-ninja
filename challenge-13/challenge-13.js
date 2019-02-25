/*
Envolva todo o código desse desafio em uma IIFE.
*/
arr.join('-')
"1-2-3-4-5-6-7"

arr.concat([3,3,[3]])
(10) [1, 2, 3, 4, 5, 6, 7, 3, 3, Array(1)]

arr.toString()
"1,2,3,4,5,6,7"

arr.slice(0,2)
(2) [1, 2]


arr.splice(1,0,'r')



arr.forEach(function(item,index, array ){    
   console.log(item,index, array ) 

});

1 0 (7) [1, 2, 3, 4, 5, 6, 7]
2 1 (7) [1, 2, 3, 4, 5, 6, 7]
3 2 (7) [1, 2, 3, 4, 5, 6, 7]
4 3 (7) [1, 2, 3, 4, 5, 6, 7]
5 4 (7) [1, 2, 3, 4, 5, 6, 7]
6 5 (7) [1, 2, 3, 4, 5, 6, 7]
7 6 (7) [1, 2, 3, 4, 5, 6, 7]


var sum = 0;

arr.forEach(function(item ){
 sum += item     
});

console.log(sum ) 


arr.forEach(function(item,index, array ){    
   console.log(item,index, array ) 

});

//com o every todos os elementos têm que responder a verificação, se não e false
var every = arr.every(function(item){    
    item < 5;
});
every
false



//basta 1 elemento responder a verificação, será true
var some = arr.some(function(item){    
 return   item < 5;
});
every
true



//O map devolve um novo array, com o base no array original
var map = arr.map(function(item,index, array ){    
   console.log(item,index, array ) 

});



//O filter faz o filtro do array
var filter = arr.filter(function(item,index, array ){    
   return item > 2

});
filter
(5) [3, 4, 5, 6, 7]



// MAP com o filter
var map = arr.map(function(item ){    
   return item  + 10;
});.filter(function(item ){    
   return item > 13

}); 
//ou 
var filter = map.filter(function(item ){    
   return item > 13

});





/*
Crie um array e mostre no console a representação em String desse array,
usando o método visto na aula 13.
*/
console.log( 'O array em formato de string é:' );
var arr = [1,2,3,4,5,6,7];
console.log( 'O array em formato de string é:' + arr.toString() );


/*
Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
Cada array deve conter os estados dessa região.
*/
// ?
var norte = ['Porto','Guimarães','Braga']
var sul = ['Faro','Beja','Lisboa']

/*
Crie uma variável chamada `brasil`, que irá receber as duas regiões
concatenadas. Mostre o `brasil` no console.
*/
var portugal = norte.concat(sul)
console.log( '\nAlgumas cidades de Portugal:'+  portugal);
Algumas cidades de Portugal:Porto,Guimarães,Braga,Faro,Beja,Lisboa
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/

norte.unshift('Viana do Castelo', 'Maia','Barcelos')

console.log( '\nMais estados adicionados:' );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
// ?
portugal.shift()
"Porto"


/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
// ?

/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
// ?

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
// ?

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste:' );
// ?

/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
// ?

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
// ?

/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
// ?

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
// ?

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?

/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewBrasil:' );
// ?

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
// ?

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
// ?

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
// ?

/*
Mostre no console o array criado acima:
*/
console.log( '\nnewBrasil agora com mais informações:' );
// ?

/*
Filtre o array criado acima, retornando somente os estados que tiverem
ID par. Atribua o valor à uma variável chamada `filter`.
*/
// ?

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?

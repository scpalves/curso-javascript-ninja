;(function(){

/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
    
  var person = {name:'Rui',lastName: 'Alves',age:40}
    
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
Object.keys(person)
  
/*
Crie um array vazio chamado `books`.
*/
var books = []

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
books.push({name:'livro1',pages:423},{name:'livro2',pages:523},{name:'livro3',pages:443})
console.log( '\nLista de livros:' );

/*
Mostre no console todos os livros.
*/
console.log( '\nLista de livros:',JSON.stringify(books));


console.log( '\nLivro que está sendo removido:' );
/*
Remova o último livro, e mostre-o no console.
*/
console.log( '\nLista de livros:',books.pop());

console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
console.log(  '\nAgora sobraram somente os livros:',JSON.stringify(books));

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );

/*
Mostre os livros nesse formato no console:
*/
console.log(  '\nAgora sobraram somente os livros:',JSON.stringify(books));

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
console.log( '\nAgora os livros são objetos novamente:',JSON.parse(books));

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
 for (var i = 0; i < object.length ; i ++ ){
   for (var prop in books[i]){
     
     console.log(prop + ': '+  books[i][prop]);
     
   }
   //console.log(books[i]);
     }

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
myName.push('r','u','i')

console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
console.log(myName.join(''))

console.log( '\nMeu nome invertido é:' );
myName.reverse().join('')


/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
myName.sort()

})();

/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array =[2,'Rui',null,{a:2},function(){}]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var arrayFuntion = function (input){
return input;   
}

arrayFuntion(array) //(5) [2, 3, 5, 8, 9]


/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
arrayFuntion(array)[1] //3

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
var indiceArray = function (input,num){ 
     return    input[num]; 
}
//[2, 3, 5, 8, 9]
//indiceArray(array,2)
//5


/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var someTypeArray = ['Rui',54.4,[4,2,'Alves'],true,{c:4}]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
//indiceArray(someTypeArray ,4)
//someTypeArray[1]
//9
//someTypeArray[2]
//"July"
//someTypeArray[0]
//"Rui"
//someTypeArray[3]
//true
//someTypeArray[4]
//1978

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
  function book (bookName){
var allBooks = {

      'name1':{nome:'livro1',quantidadePaginas:245,autor:'Rui Alves',editora:'Porto Editora' },
    'name2':{nome:'livro2',quantidadePaginas:452,autor:'Sónia Lopes',editora:'Porto Editora' },
   'name3':{nome:'livro3',quantidadePaginas:533,autor:'Maria Alves',editora:'Porto Editora' }

};
    
      return !bookName?allBooks : allBooks[bookName];

      }
    




/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()



/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log('O  '+ book('name1').nome +' tem ' + book('name1').quantidadePaginas+ ' páginas!','O autor do  '+ book('name1').nome +' é ' +book('name1').autor,'O '+ book('name1').nome +' foi publicado pela ' +book('name1').editora)
/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log('O  '+ book('name1').nome +' tem ' + book('name1').quantidadePaginas+ ' páginas!','O autor do  '+ book('name1').nome +' é ' +book('name1').autor,'O '+ book('name1').nome +' foi publicado pela ' +book('name1').editora)
/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log('O  '+ book('name1').nome +' tem ' + book('name1').quantidadePaginas+ ' páginas!','O autor do  '+ book('name1').nome +' é ' +book('name1').autor,'O '+ book('name1').nome +' foi publicado pela ' +book('name1').editora)

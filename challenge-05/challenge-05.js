/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var array =[2,3,5,8,9]

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
var someTypeArray = ['Rui',9,'July',true,1978]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
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
function book(BookOne){
 
BookOne.livro1 = livro1;
BookOne.livro2 = livro2 ;   
BookOne.livro3=livro3;    
    
    if (BookOne.livro2 == undefined  && BookOne.livro3 == undefined){
    
 	return livro1; 
    }
    else if (BookOne.livro1 == undefined  && BookOne.livro3 == undefined){
    
 	return livro2; 
    }
    else if (BookOne.livro2 == undefined  && BookOne.livro1 == undefined){
    
 	return livro3; 
    }     
     else
     {
        return livro1 + livro3 + livro2 ; 
     }     
     
  
  var livro1 = {
 quantidadePaginas:245, 
 autor:'Rui Alves', 
 editora:'Porto Editora'
    
    
}
undefined
var livro2 = {
 quantidadePaginas:452, 
 autor:'Sónia Lopes', 
 editora:'Porto Editora'
    
    
}
undefined
var livro3 = {
 quantidadePaginas:452, 
 autor:'João Lopes', 
 editora:'Porto Editora'
    
    
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
// ?

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?

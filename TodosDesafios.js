Desafio Semana #1

// Declarar uma variável chamada `myvar`, sem valor.
var myvar;

// Após declarada, atribua o valor 10 à variável `myvar`.
myvar = 10;

// Declare uma nova variável chamada `soma`, e adicione uma instrução somando os valores 15 e 8.
var soma;
soma = 15 + 8;

// Atribua à variável `soma` todo o valor dela, somando 1, usando o operador de soma abreviado.
soma = soma + 1

// Atribua à variável `soma` todo o valor dela, multiplicando por 3, usando o operador de multiplicação abreviado.
soma = soma * 3

// Qual é o valor da variável `soma` até aqui?
72

// Declare uma variável chamada `souninja`, atribuindo à ela o valor booleano que representa `verdadeiro`.
 var souninja 
 souninja = true
// Declare uma variável chamada `comida` que recebe um array com os valores 'arroz', 'feijão' e 'ovo'.
var comida=["arroz","feijão","ovo"]

// Digite a instrução que imprime o valor de 'feijao', que está na variável `comida`.
var nomecomida = comida[1];

// Digite o código que verifica se a variável `soma' é igual a variável `myvar` (testando também o tipo).
soma === myvar

// Digite o código que verifica se a variável `myvar` é menor ou igual à variável `soma`.
myvar <= soma

// Crie uma função chamada `divisao` que receba como parâmetro dois números, e retorne o resultado da divisão entre eles.
 function divisao(n1,n2){
  return  n1/n2
 }

// Invoque a função criada acima, passando os parâmetros 10 e 2.
divisao(10,2)



Desafio da semana #2


// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
?

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
?

// Qual o valor atualizado dessa variável?
?

// Declare uma nova variável, sem valor.
?

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
?

// Invoque a função criada acima.
?

// Qual o retorno da função? (Use comentários de bloco).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
?

// Invoque a função criada acima, passando só dois números como argumento.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
?

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
?

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
?

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
?




Desafio da semana #3


// Declarar uma variável qualquer, que receba um objeto vazio.
var emptyobject = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
var pessoa = {nome:'Rui',sobrenome:'Alves',sexo:'M',altura:1.83,peso:93,andando:false,caminhouQuantosMetros:0};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function(){ return pessoa.idade ++}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function(valor){
var metro = valor + pessoa.caminhouQuantosMetros;    
pessoa.caminhouQuantosMetros = metro;
    pessoa.andando = true;
    return metro;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function(){
   return pessoa.andando = false;  
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function(){
    return pessoa.nome+" "+pessoa.sobrenome;
}

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function(){
    return 'Minha idade é '+pessoa.idade+' m.'
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function(){
    return 'O meu peso é '+pessoa.peso+' m.'
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarPeso = function(){
    return 'Minha altura é '+pessoa.altura+' m.'
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.nomeCompleto() \\"Rui Alves"

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarIdade()\\"Minha altura é 1.83 m."

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarPeso()\\"Minha altura é 1.83 m."

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.mostrarAltura()\\"O meu peso é 93 kg"

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario()
pessoa.fazerAniversario()
pessoa.fazerAniversario()

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/
pessoa.mostrarIdade();
/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(5);
25
pessoa.andar(10);
35
pessoa.andar(5);
40

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
pessoa.andando() //true

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar()

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.andando() //false

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
pessoa.caminhouQuantosMetros //40
/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function (){
 var o = 'o';   
 var a = 'a';   
 var ano = 'ano';   
 var anos = 'anos';   
 var metro = 'metro';   
 var metros = 'metros';   

 return   'Olá, eu sou '+ (pessoa.sexo =='F'? a : o) +' '+ pessoa.nomeCompleto()+' , tenho '+ pessoa.idade +' '+(pessoa.idade > 1 ? anos : ano) +' , '+ pessoa.altura+' , meu peso é ' + pessoa.peso +' e, só hoje, eu já caminhei '+ pessoa.caminhouQuantosMetros+ ' '+ (pessoa.caminhouQuantosMetros > 1 ? metros : metro)   
}


// Agora, apresente-se ;)
1ª condição "Olá, eu sou a Rui Alves , tenho 1 ano , 1.83 , meu peso é 93 e, só hoje, eu já caminhei 1 metro"
2ªcondição  "Olá, eu sou o Rui Alves , tenho 40 anos , 1.83 , meu peso é 93 e, só hoje, eu já caminhei 5 metros"




Desafio da semana #4



/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a){
  var  teste = true;
    if(a){ teste = true;} else {teste = false;}
    
    return teste;
    
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`./*
isTruthy("");\\false
isTruthy('');\\false
isTruthy(-0);\\false
isTruthy(0);\\false
isTruthy(NaN);\\false
isTruthy(null);\\false
isTruthy(undefined);\\false
isTruthy(false);\\false


Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy(10);\\true
isTruthy(-1);\\true
isTruthy("teste");\\true
isTruthy(true);\\true
isTruthy("55");\\true
isTruthy("sss");\\true
isTruthy(100);\\true


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {marca:'Mercedes',modelo:'E270',placa:'',ano:2004,cor:'Cizento',quantasPortas:0,assentos:5,quantidadePessoas:0}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudaCor = function(cor){
 return    carro.cor = cor;  
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function(){
  return    carro.cor;   
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function(){
  return    carro.modelo;   
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function(){
  return    carro.marca;   
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function(){
  return    "Esse carro é um "+carro.obterMarca()+" "+carro.obterModelo();   
}


/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
//versão I
carro.adicionarPessoas = function(pessoas){
 var pessoasAdicionadas = pessoas + carro.quantidadePessoas;
     if(carro.quantidadePessoas <5 && pessoasAdicionadas <6 ){ carro.quantidadePessoas =pessoasAdicionadas;}
    var numeroAssentosDisponiveis =  carro.assentos -carro.quantidadePessoas;
 
   	   if(numeroAssentosDisponiveis <= 0)
    {
    return "O carro já está lotado!" + "Já temos "+ carro.quantidadePessoas +" pessoas no carro!"
    }
else if (  pessoas <= pessoasAdicionadas )
{return "Só cabem mais "+ numeroAssentosDisponiveis +" pessoas!" + "Já temos "+ carro.quantidadePessoas +" pessoas no carro!" } 
  
}



//Versão II

carro.adicionarPessoas = function(numeroPessoas){
var totalPessoas = carro.quantidadePessoas  + numeroPessoas;
if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos)
{
 return "O carro já está lotado!";
}
if(totalPessoas > carro.assentos)
{
var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa': ' pessoas';
 return "Só cabem mais " + quantasPessoasCabem + pluralOuSingular + "!";
 }
 carro.quantidadePessoas += numeroPessoas;
 return "Ja temos " + carro.quantidadePessoas + " pessoas no carro!";
 };










/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor() //"Cizento"

// Mude a cor do carro para vermelho.
carro.mudaCor("Vermelho")


// E agora, qual a cor do carro?
"Vermelho"

// Mude a cor do carro para verde musgo.
carro.mudaCor("Verde musgo")

// E agora, qual a cor do carro?
"Verde musgo"

// Qual a marca e modelo do carro?
carro.obterMarcaModelo()//"Esse carro é um Mercedes E270"

// Adicione 2 pessoas no carro.
carro.adicionarPessoas(2) \\"Só cabem mais 3 pessoas!Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.
carro.adicionarPessoas(4)\\"Só cabem mais 3 pessoas!Já temos 2 pessoas no carro!"

// Faça o carro encher.
carro.adicionarPessoas(3)\\"O carro já está lotado!Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.
carro.removerPessoas = function(remover){
    
    var removerPessoas = carro.quantidadePessoas - remover;
    carro.quantidadePessoas = removerPessoas
    
    return  "Ficamos com "+ removerPessoas +" pessoas no carro!";   
}

carro.removerPessoas(4) \\"Ficamos com 1 pessoas no carro!"


// Adicione 10 pessoas no carro.
carro.adicionarPessoas(10)\\"Só cabem mais 4 pessoas!Já temos 1 pessoas no carro!"

// Quantas pessoas temos no carro?
carro.quantidadePessoas \\1








Desafio da semana #5



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

arrayFuntion(array) //(5) [2, 3, 5, 8, 9]


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









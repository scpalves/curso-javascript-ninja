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








Desafio da semana #6


/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Liga NOS'

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
// ?
var teams = ['Sporting','Porto','Setubal','Belenenses','Boavista']
console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
function showTeamPosition (pos){
      position = teams[pos -1];
     switch(pos){
         case 0:
     return  'A equipa que está no '+ pos+'º lugar é o '+ position;
    break;
    case 1:
     return  'A equipa que está no '+ pos+'º lugar é o '+ position;
    break;
        case 2:
     return  'A equipa que está no '+ pos+'º lugar é o '+ position;
    break;
        case 3:
     return  'A equipa que está no '+ pos+'º lugar é o '+ position;
    break;
              case 4:
     return  'A equipa que está no '+ pos+'º lugar é o '+ position;
    break;
         default:
    return  'Não temos a informação da equipa que está nessa posição.';  
}  
}


ou


function showTeamPosition (pos){
    if(pos < 1 || pos > 5)
    {
        return 'Não temos a informação da equipa que está nessa posição.';
    }
    return 'A equipa que está no '+ pos+'º lugar é o '+ teams[pos -1] + '.';

}



/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
// ?

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var numero =20;

while (numero <= 30 ){
    
   console.log(numero ++);
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
function convertToHex(cores){

       switch(cores){
      case 'verde':
          return  'O hexadecimal para a cor '+ cores +' é #0000FF';
    break;
    case 'vermelho':
     return  'O hexadecimal para a cor '+ cores +' é #FF0000';
    break;
        case 'castanho':
     return  'O hexadecimal para a cor '+ cores +' é #8B4513';
    break;
        case 'amarelo':
     return  'O hexadecimal para a cor '+ cores +' é #FFFF00';
    break;
              case 'azul':
     return 'O hexadecimal para a cor '+ cores +' é #0000FF';
    break;
         default:
    return  'Não temos o equivalente hexadecimal para a '+cores;  
}  
    
    
}


ou

function convertToHex(cores){
var hexa;
       switch(cores){
      case 'verde':
      hexa ='#0000FF';  
    break;
    case 'vermelho':
     hexa ='#FF0000';
    break;
        case 'castanho':
      hexa ='#8B4513'; 
    break;
        case 'amarelo':
       hexa ='#FFFF00';  
    break;
              case 'azul':
       hexa ='#0000FF';     
    break;
         default:
    return  'Não temos o equivalente hexadecimal para a '+cores;  
}  
   return  'O hexadecimal para a cor '+ cores +' é '+ hexa;
    
}


/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
console.log(convertToHex('verde'))
console.log(convertToHex('azul'))





Desafio da semana #7


*
Numa listagem de 20 numeros, liste os numeros pares.
*/
// ?
while(num <=20){
    
 num % 2 === 0 ? console.log(num): '';   
    num++
    
}

/*
Conte items do array com o while
*/
var arr = ['Rui',true, null, {equipa:'sporting'},function(){}]

var qtd = arr.length;

while (qtd >= 0){
 console.log(arr[qtd--])
}

// ?

/*
Crie um array com 5 items (tipos variados).
*/
var arr = ['Rui',function(){}, {curso1:'C#',curso2:'JavaScript',curso3:'SQL'},[{marca:'Mercedes'},'nome'],true]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
function addItem (item){
 arr.push(item);   
   return arr;     
}


/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
addItem([{equipa:'sporting'},3,'Santa Cruz'])

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
console.log('O segundo elemento do segundo array é '+arr[7][1])
O segundo elemento do segundo array é 3
/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem '+ arr.length +' itens')
O primeiro array tem 8 itens

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem '+ arr[7].length +' itens')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
var num = 10;
while(num <=20){
    
 num % 2 === 0 ? console.log(num): '';   
    num++
    
}

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
console.log( 'Números ímpares entre 10 e 20:' );
while(num <20){
  
 num % 2 !== 0 ? console.log(num): '';   
    num ++
}
/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );

for(var num = 100; num <=120; num++ ){
   num % 2 === 0 ? console.log(num): '';       
}

console.log( 'Números ímpares entre 111 e 125:' );

for(var num = 110; num <=125; num++ ){    
   num % 2 !== 0 ? console.log(num) : '';   
}




Desafio da semana #8



/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
var sum = function calculateSum(a, b){
 return a + b;     
}

/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?
var valor1 = 10;
var valor2 = 5

console.log('A soma de '+ valor1  +' e '+ valor2  +' é igual a '+ sum (valor1,valor2) +' .')
/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
console.log('O nome da função que faz a soma é '+ sum.name +' .')

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
function showName(){
  
 return 'Rui Alves';   
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
var varShowName  = showName

/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
console.log('A função '+ varShowName.name +' retorna '+ varShowName()  +' .')

/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
function calculator(operador){
    
    return function (num1,num2){
    resultado;
    switch(operador)
    {
        case '+' :
    	resultado = num1 + num2;
    break;
       case '-' :
    	resultado = num1 - num2;
    break;
        default:
    'Operação inválida.';
}
     return 'Resultado da operação: '+ num1 + ' ' + operador + ' ' + num2 +' = '+ resultado +' .';
    }   
}

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
var sum = calculator('+');

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
sum(2,3)

/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var sub = calculator('-')
sub(2,1)
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?





Desafio da semana #9


/*
Crie uma IIFE que envolva todo o código desse arquivo. Faça também a
indentação correta do código, para ficar dentro da IIFE.
*/
(function (){
return  2 + 3; 
})() ;

/*
Analise as funções abaixo (`myFunction`, `myFunction2` e `myFunction3`, e
ajuste o posicionamento das variáveis e funções internas, para que os códigos
dentro de `console.log` que estão retornando `undefined` retornem o valor
correto da variável ou função chamada.
*/
function myFunction() {
    var number1 = 10;
    var number2 = 20;
    return number1 + number2;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );
  
}
myFunction();

/*
    myFunction2();
*/
function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    
    var sum = function sum() {
        return number1 + number2;
    };
  console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    return sum();
}
myFunction2();

/*
    myFunction3();
*/
function myFunction3() {
      var number2 = 50;
      var number1 = 40;
    console.log( 'A soma de 40 e 50 é igual a', sum() );
    console.log( 'Na função myFunction3, number1 é igual a', number1 );
    return sum();
    function sum() {
        return number1 + number2;
    };
}
myFunction3();

/*
No desafio anterior criamos uma calculadora, usando uma estrutura funcional.
Agora vamos criar uma outra calculadora, usando uma outra abordagem :D
- Crie uma função `calculator` que recebe dois valores (números)
por parâmetro.
- Essa função deve retornar uma outra função, que recebe um parâmetro
chamado `callback`.
- Esse `callback` será uma função, que passaremos por parâmetro ao invocar
o retorno de `calculator`.
- O retorno dessa segunda função deve ser a função de `callback` passada
por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
que foram passadas para a primeira função `calculator`.
*/
// ?

/*
Declare uma variável chamada `sum`, e atribua a ela a função `calculator`,
passando dois números por parâmetro.
*/
function calculator (num1, num2){

    return function (callback){

     return callback(num1,num2);
      }
}  
    

/*
Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
`calculator`. E essa função espera um parâmetro `callback`. O `callback`
tem dois parãmetros disponíveis, que são os números que você acabou de passar
para a chamada à `calculator` acima.
- Mostre no console o retorno da invocação de `sum`, passando por parâmetro
uma função anônima que irá retornar a soma dos dois números que essa função
anônima tem como seus argumentos.
*/
console.log( 'O resultado da soma é:' );

var sum = calculator(2,3);
var div = calculator(5,2);

/*
Agora declare outra variáveis chamadas `subtraction`, `multiplication`,
`division` e `mod`, e atribua à elas `calculator`, passando números
diferentes para cada chamada.
*/
sum(function(number1,number2){  return number1 * number2  })
div(function(number1,number2){  return number1 / number2  })
/*
Mostre as variáveis acima no `console` (uma chamada de console por variável),
criando a função de `callback` que faz o cálculo para subração, multiplicação,
divisão e módulo (resto de divisão), conforme a função utilizada.
As suas respostas devem estar abaixo dos `console.log` referentes à cada
chamada.
*/
console.log( 'O resultado da subtração é:' );
// ?

console.log( 'O resultado da multiplicação é:' );
// ?

console.log( 'O resultado da divisão é:' );
// ?

console.log( 'O resto da divisão é:' );
// ?





Desafio da semana #10


/*
Crie uma IIFE que envolva todo esse arquivo (inclusive esse comentário),
e faça a indentação correta.
*/

/*
Sem alterar os códigos nos `console.log` abaixo, faça com que o retorno
deles seja "true", usando os Wrapper Objects como "conversores" nos valores
das variáveis. Analise o que está sendo impresso no console para saber como
resolver o problema corretamente.
*/
var five = '5';
var five = number ('5'); = true em baixo
console.log( five + ' é número?', typeof five === 'number' );

var concat = 10 + 10;
var concat = string (10) + string (10);= true em baixo
console.log( '"' + concat + '" é uma string? E é igual a "1010"?', typeof concat === 'string' );

/*
Voltando ao exemplo da calculadora, vamos utilizar mais uma abordagem
funcional, mas dessa vez, separando algumas responsabilidades.
- Primeiro, crie um objeto chamado `operation` que terá as propriedades:
'+', '-', '*', '/' e '%'.
- Cada propriedade vai receber uma função (logo, elas serão métodos), e essa
função receberá dois parâmetros e retornará a operação referente à sua
propriedade, usando os valores passados por parâmetro.
*/
var operation = {soma: function(n1, n2){ return n1 + n2; },sub: function(n1, n2){return n1 - n2},div: function(n1, n2){return n1 / n2; },multi: function(n1, n2){return n1 * n2; } }
var operation = {'+': function(n1, n2){ return n1 + n2; },'-': function(n1, n2){return n1 - n2},'/': function(n1, n2){return n1 / n2; },'*': function(n1, n2){return n1 * n2; } }
operation["*"](10,2)
/*
Crie uma função chamada `isOperatorValid`, que receberá um operador por
parâmetro.
- Essa função será responsável por verificar se o operador passado por
parâmetro a ela é válido, ou seja, se ele é igual a '+', '-', '*', '/' ou
'%'.
- Se for igual a qualquer um desses, ela deverá retornar "true".
Caso contrário, "false".
- O desafio é fazer o retorno sem usar "if" ou "switch".
*/
function isOperatorValid (op){ 
    
  return (op === '+' ||op === '-' ||op === '/' ||op === '*') ;
   
}


function isOperatorValid (op){ 
    
  return operation[op]!== undefined ;
   ou 
   return !!operation[op] ;
}

/*
Agora vamos criar a calculadora.
- Crie uma função chamada `calculator`, que receberá como parâmetro um
operador;
- Se o operador não for válido, a função deve retornar "false";
- Se o operador for válido, retornar uma segunda função que receberá dois
parâmetros;
- Se algum dos parâmetros não for um número, retornar "false";
- Senão, retornar o método do objeto "operation" criado acima, baseado no
operador passado para a função "calculator", e passando para esse método
os dois parâmetros da função de retorno de "calculator".
*/
function calculator (op){
 if( isOperatorValid (op))
    {
    return function (num1, num2){
if (typeof num1 === 'number' && typeof num2 === 'number'){
    return operation[op](num1,num2)
}
return false ;
       }
    return false ;
} 
}

soma = calculator('+');
soma(2,3)




/*
Crie uma função chamada "showOperationMessage" que recebe três parâmetros:
- o operador, o primeiro número e o segundo número. O retorno da função
deve ser a frase:
'A operação [NUMBER1] [OPERATOR] [NUMBER2] =';
Essa função mostrará a mensagem da operação que criaremos mais abaixo.
*/
function showOperationMessage (num1, num2,op){

    return 'A operação '+ num1+' '+op+' '+num2+ ' =';      
}


/*
Crie uma função chamada "showErrorMessage" que recebe um parâmetro: o
operador da operação cálculo, quando a operação não for válida.
Essa função deverá retornar a frase:
'Operação "[OPERATOR]" não permitida!'
*/
function showErrorMessage (op){
    return 'Operação '+ op +' não é permitida!';   
}


/*
Nossa calculadora está pronta! Agora vamos testá-la:
PASSO 1:
- Declare 3 variáveis: "number1" e "number2", iniciando com valor zero, e
"operationSignal", sem valor por enquanto.
*/
var number1 = 0;
var number2 = 0;
var operationSignal;

/*
PASSO 2:
Atribua à variável operationSignal o operador de soma, e declare uma
variável chamada "sum", que receba a função "calculator", passando por
parâmetro a variável que recebeu o sinal da operação.
*/
var operationSignal = '+';
var sum = calculator(operationSignal);

/*
PASSO 3:
"sum" agora é uma função, e, se o sinal correto não foi passado para a
função "calculator", "sum" será false. Certifique-se de que "sum" não é
"false", e então atribua às variáveis "number1" e "number2", dois números
que serão os operandos da operação de soma.
Após isso, mostre no console o resultado da operação, passando dois
parâmetros para o método "log" de "console":
- O primeiro será a mensagem da operação (usando a função criada acima);
- O segundo, a função de soma, passando os dois operandos.
- Se "sum" for "false", mostrar no console a mensagem de erro.
*/
if (sum){
 number1 = 10;   
 number2 = 20;   
    console.log(showOperationMessage(number1,number2,operationSignal),sum(number1,number2))  
}
else{ 
   console.log(showErrorMessage(operationSignal))
}

/*
Repita desde o "PASSO 2" com as operações de subtração, multiplicação,
divisão e resto. Crie variáveis com os nomes "subtraction",
"multiplication", "division" e "mod".
*/
var operationSignal = '-';
var subtraction = calculator(operationSignal);
if (subtraction ){
 number1 = 10;   
 number2 = 20;   
    console.log(showOperationMessage(number1,number2,operationSignal),subtraction (number1,number2))
    
}else{

     console.log(showErrorMessage(operationSignal))
}
/*
Repita o PASSO 2 novamente, mas passando um operador inválido, para ver se
a mensagem de erro será mostrada no console.
*/
var operationSignal = 'loo';
var subtraction = calculator(operationSignal);

if (subtraction ){
 number1 = 10;   
 number2 = 20;   
    console.log(showOperationMessage(number1,number2,operationSignal),subtraction (number1,number2))
    
}else{

     console.log(showErrorMessage(operationSignal))
}


Operação loo não é permitida!




  
  
  Desafio da semana #11
  
  
  
  // Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

/*
Crie uma variável chamada `once`, que recebe `false` como seu valor.
Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
loop, mostre no console a mensagem:
'Entrou ao menos uma vez!'
Qual loop você deve usar para que essa mensagem seja mostrada no console?
*/
var once = false;

do {
  console.log('Entrou ao menos uma vez!') 
}while(once);





while (once = true){
    
    console.log('Entrou ao menos uma vez!')
    break  
}

/*
Crie um objeto chamado `person`, que receba as seguintes propriedades:
- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
para o nome, idade, peso e data de nascimento dessa pessoa.
*/
var person = {name:'Rui',age:40,weight:92,birthday:'09/07/1977'}



/*
Use um loop para percorrer o objeto criado acima, mostrando no console
a frase:
'The [PROPERTY] of person is [VALUE]'
Aproveite e crie uma variável `counter` que vai contar quantas propriedades
esse objeto tem.
Após o loop, mostre a frase:
'The person has [COUNTER] properties'
*/
var counter = 0;

for (i in person){    
 console.log('The '+ i +' of person is '+ person[i])
counter ++;
     }

console.log('The person has ' + counter + ' properties') 
 The person has 4 properties




/*
Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
criado acima) é mais velha que a idade passada por parâmetro.
Se verdadeiro, retornar `true`. Senão, retornar false.
Após a função, mostrar a mensagem no console:
'The person has more than 25 years old? [TRUE/FALSE]'
*/
function moreThan(idade){
  if (person.age > idade ){   
   return true;
  }  
    return false; 
}

ou 

function moreThan(idade){
 
   return person.age > idade;

}


console.log('The person has more than 25 years old?'+ moreThan(25))


/*
Faça um loop de 0 a 20, que adicione cada número como um item de um
array chamado `numbers`. Se o contador for maior que 10, saia do loop.
Mostre no console os números no array.
*/
console.log( 'De 0 a 10:' );
var numbers = [];
for (i = 0  ; i < 20 ; i++){  
     
    if (i > 10){
    break;
    } 
  numbers.push(i);
}
console.log(numbers)


/*
Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
esses. Se o número for ímpar, pular para o próximo número.
Mostrar no console os números do array.
*/
console.log( 'Pares de 0 a 20:' );

for (i = 0  ; i <= 20 ; i++){   
    if (i % 2 !==0){
   
    continue;
    }
      numbers.push(i); 
}
  
  
  
  
  
  
  Desafio da semana #12
  
  
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
  
  


  
Desafio da semana #13
  

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

1 0 (7) [1, 2, 3, 4, 5, 6, 7]
2 1 (7) [1, 2, 3, 4, 5, 6, 7]
3 2 (7) [1, 2, 3, 4, 5, 6, 7]
4 3 (7) [1, 2, 3, 4, 5, 6, 7]
5 4 (7) [1, 2, 3, 4, 5, 6, 7]
6 5 (7) [1, 2, 3, 4, 5, 6, 7]
7 6 (7) [1, 2, 3, 4, 5, 6, 7]


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
(5) [3, 4, 5, 6, 7]



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
Crie uma variável chamada `portugal`, que irá receber as duas regiões
concatenadas. Mostre o `portugal` no console.
*/
var portugal = norte.concat(sul)
console.log( '\nAlgumas cidades de Portugal:'+  portugal);
Algumas cidades de Portugal:Porto,Guimarães,Braga,Faro,Beja,Lisboa
// ?

/*
Adicione 3 novos estados da região Norte no início do array e mostre no console.
*/

portugal.unshift('Viana do Castelo', 'Maia','Barcelos')

console.log( '\nMais estados adicionados:' );
// ?

/*
Remova o primeiro estado do array `brasil` e mostre-o no console.
*/
console.log( '\nEstado removido:' );
// ?
portugal.shift()
"Viana do Castelo"


/*
Crie um novo array chamado `newSul`, que receba somente os estados do sul,
pegando do array `brasil`. Não remova esses itens de `brasil`.
*/
var newSul = portugal.slice(4,7)



/*
Mostre no console os estados que estão em `newSul`.
*/
console.log( '\nEstados do Sul do Brasil:' );
["Faro", "Beja", "Lisboa"]
// ?

/*
Mostre no console todos os estados que estão em `brasil`.
*/
console.log( '\nAlguns Estados do Brasil:' );
portugal
(9) ["Viana do Castelo", "Maia", "Barcelos", "Porto", "Guimarães", "Braga", "Faro", "Beja", "Lisboa"]

/*
Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
*/
var nordeste = ['Chaves', 'Bragança', 'Vila Real']

/*
Mostre no console os estados do nordeste.
*/
console.log( '\nEstados do Nordeste: '+nordeste  );
Estados do Nordeste: Chaves,Bragança,Vila Real


/*
Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
chamada `newSudeste`.
*/
newSudeste = portugal.splice(4,3)

portugal
(3) [ "Guimarães", "Braga"]
newSudeste
(3) ["Faro", "Beja", "Lisboa"]

/*
Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
ficar no mesmo nível que os estados já existentes, não em um array separado.
*/
portugal = portugal.concat(nordeste)


/*
Mostre no console os estados em `newSudeste`.
*/
console.log( '\nEstados em newSudeste:' );
newSudeste
(3) ["Faro", "Beja", "Lisboa"]

/*
Mostre no console os estados do `brasil`.
*/
console.log( '\nAlguns estados do Brasil:' );
portugal
(4) ["Chaves,Bragança,Vila Real", "Porto", "Guimarães", "Braga"]

/*
usando forEach, percorra o array `brasil` e gere um novo array chamado
`newBrasil`. Esse array deve ter cada item como um objeto, com as
propriedades:
- `id`: que será o índice do array `brasil`,
- `estado`: que será o estado do array `brasil`.
*/
// ?

var newPortugal = {} 

portugal.forEach(function(item, index){    
    
    newPortugal.push({id: index,estado: item});
   
});



/*
Mostre o array `newBrasil` no console
*/
console.log( '\nnewPortugal: '+ newPortugal.estado.toString() );
newPortugal: Chaves,Bragança,Vila Real,Porto,Guimarães,Braga

/*
Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
- "Sim, todos os estados tem mais de 7 letras!"
Senão, mostre no console:
- "Nem todos os estados tem mais de 7 letras!"
*/
console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
words = portugal.map(function(item){     
    if (item > 7){

    return console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );  
  }  
  return  console.log( 'Nem todos os estados tem mais de 7 letras!' );

    });

/*
Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
resultado à uma variável. Se esse estado existir no array, mostrar a frase no
console:
- "Ceará está incluído!"
Senão, mostrar a frase:
- "Ceará não foi incluído :("
*/
console.log( '\nCeará está incluído em `brasil`?' );
portugal.some(function(array ){    
  
if(array === 'Braga'){
return console.log('Braga está incluído em Portugal') ;
   }
   return  console.log('Braga não está incluído em Portugal') ;

    });

/*
Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
objeto desse array, e adicione a frase abaixo na propriedade `estado`:
- "[ESTADO] pertence ao Brasil."
Atribua o novo array a uma variável chamada `map`.
*/
var map = newPortugal.map(function(item, index ){    
    return {
    id: item.id + 1,
    estado: item.estado ='Pertence a Portugal'
    }
    
    });

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
var filter = map.filter(function(item, index ){
    
    return item.id % 2 ==0;

});

/*
Mostre o array filtrado acima no console.
*/
console.log( '\nEstados com ID par:' );
// ?
  
  




Desafio da semana #14



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





Desafio da semana #15



  

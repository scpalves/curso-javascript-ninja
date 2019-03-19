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


/*
Envolva todo o código desse desafio em uma IIFE.
Crie um arquivo chamado index.html e adicione esse script ao HTML.
*/

/*
Crie uma função construtora chamada "Person". Esse construtor deve ter
as seguintes características:
- Deve receber 3 parâmetros: `name`, `lastName` e `age`;
- Deverá ter 3 propriedades:
  - `name` - que receberá o valor do parâmetro `name`;
  - `lastName` - que receberá o valor do parâmetro `lastName`;
  - `age` - que receberá o valor do parâmetro `age`;
- Deverá ter 3 métodos:
  - `getFullName` - que deve retornar o nome completo do objeto criado,
  no formato:
    - "[NAME] [LASTNAME]"
  - `getAge` - que deverá retornar a idade (age);
  - `addAge` - esse método não deverá ter nenhum parâmetro, mas ao invocá-lo
  iremos passar um único argumento, que é a quantidade de anos que devem ser
  adicionados à idade original (age). Esse método deverá retornar o objeto
  que será instanciado.
*/
// ?

/*
Crie 3 novos objetos usando o construtor acima. Os objetos serão novas
pessoas. As variáveis deverão ser o primeiro nome da pessoa. Passe os
parâmetros corretamente para o construtor para criar as novas pessoas.
Mostre as 3 novas pessoas criadas no console (Um console.log por pessoa).
*/
console.log( 'Novas pessoas criadas à partir de Person:' );
// ?

/*
Mostre no console o nome completo de cada pessoa.
*/
console.log( '\nNomes das pessoas:' );
// ?

/*
Mostre no console as idades de cada pessoa, com a frase:
- "[NOME COMPLETO] tem [IDADE] anos."
*/
console.log( '\nIdade das pessoas:' );
// ?

/*
Adicione alguns anos à cada pessoa, e mostre no console a nova idade de
cada um. A frase deverá ser no formato:
- "[NOME COMPLETO] agora tem [NOVA IDADE] anos."
*/
console.log( '\nNova idade das pessoas:' );
// ?



  

Desafio da semana #16


/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Declare uma variável chamada `name` que receba seu primeiro nome.
Mostre no console todas as letras do seu nome separadas, com a frase:
- "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
Ex: no caso do nome ser "Fernando", deve mostrar as frases:
- "F é a 1ª letra do meu nome."
- "e é a 2ª letra do meu nome."
E assim por diante, até a última.
*/
console.log( 'As letras do seu nome:' );
// ?

/*
- Declare uma variável chamada `fullName`, que receba seu nome completo,
escrito no formato de slug (caixa baixa e palavras separadas por um traço).
Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
- Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
por um espaço.
- Detalhe: o código que você escrever abaixo deve funcionar para qualquer
nome, então fique à vontade para usar as artimanhas que já viu até agora no
curso para fazer isso funcionar corretamente :)
- Mostre no console o nome no formato slug, e o resultado final. Use um
console.log para cada formato.
*/
console.log( '\nNome convertido à partir de um slug:' );
// ?

/*
- Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
ser um "e". No final, concatene com a frase: " são meus amigos.".
O resultado final deve ficar mais ou menos assim:
- "João, Maria, Roberto, Pedro e Marcos são meus amigos."
- Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
5 nomes foi somente uma sugestão ;)
*/
console.log( '\nMeus amigos:' );
// ?

/*
Usando o replace(), faça a string "Roberto" virar "Roberta".
Mostre o resultado no console.
*/
console.log( '\nEra "Roberto", agora é:' );
// ?

/*
Mostre no console a parte "nando" da string "Fernando". Use o método que
faz a busca do final para o início da string.
*/
console.log( '\nParte de uma string:' );
// ?

/*
Declare uma variável chamada `myName`, que receba o seu primeiro nome,
escrito de forma natural.
Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
e minúsculas.
- Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
de qualquer tamanho, escrito de qualquer forma.
Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
*/
console.log( '\nNome com letras intercaladas entre caixa alta e baixa:' );
// ?




Desafio da semana #17

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Em todos os exercícios desse desafio, nós vamos utilizar expressões
regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
variável chamada `text`:
"Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
*/
// ?

/*
Vamos começar com umas brincadeiras fáceis :D
Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
no console:
*/
console.log( 'Adicionando seu nome no texto:' );
// ?

/*
Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
console.
Ex: Se você for da São Paulo, substitua por "paulista".
*/
console.log( '\nTrocando naturalidade:' );
// ?

/*
Substitua todos os números por um traço `-`. Cada caractere de número deve
ser um traço. Mostre o resultado no console:
*/
console.log( '\nTrocando números por -:' );
// ?

/*
Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
minúsculo por "0" (número zero). Mostre o resultado no console:
*/
console.log( '\nTrocando de "D" a "h" por "0":' );
// ?

/*
Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
Mostre o resultado no console:
*/
console.log( '\nTrocando "A" e "a" por "4":' );
// ?

/*
Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
o método `toUpperCase()`. Mostre o resultado no console:
*/
console.log( '\n"O Centauro de Luvas" em caixa alta:' );
// ?

/*
Agora iremos substituir as datas no formato "13 de junho de 1804" para
"13/06/1804". A primeira coisa a fazer é criar uma função chamada
`getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
retornar o número correspondente a esse mês.
Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
Números com menos de dois dígitos devem ter um zero na frente.
Crie então a função e mostre no console os retornos para os meses de março,
setembro e dezembro.
Use um console.log para cada mês, usando a frase:
"O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
*/
console.log( '\nMeses representados por números:' );
// ?

/*
Agora, declare uma variável chamada `regexDate` que irá receber a expressão
regular que irá fazer o match com as datas. Crie grupos de captura para o
dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
meses que estão no texto, não precisa adicionar todos.
Com o que vimos até agora, você consegue fazer :D
Mostre a regex no console.
*/
console.log( '\nRegex que vai fazer o match com as datas do texto:' );
// ?

/*
Agora crie a função que irá fazer o replace dos dados. A função será chamada
de `replaceDate`. Ela deve retornar a data no formato:
"[DIA]/[MÊS]/[ANO]"
Após criar a função, faça o replace das datas no texto, mostrando no
console o resultado.
*/
console.log( '\nReplace de datas:' );
// ?






Desafio da semana #18


/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
retorne esse CPF limpo (somente os números).
Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
eles! Use um console.log para cada CPF.
- "049-214 3421-1"
- "210.458.522-05"
- "735 500 794 - 22"
- "101.123-131x32"
*/
console.log( 'Limpando CPFs:' );
// ?

/*
Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
Ex.: "999.999.999-99"
Mostre o resultado no console.
*/
console.log( '\nFormatando CPFs corretamente:' );
// ?

/*
Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
usando o mínimo de caracteres possíveis na regex.
Para garantir que a regex funciona, teste-a usando o método match. Se houver
o match, o método retorna um array com os matches. Caso contrário, ele
retornará null.
Mostre no console o resultado do match para a frase:
"Os meses de janeiro, junho e julho começam com a letra j."
O resultado deve ser:
["junho", "julho"]
*/
console.log( '\nMatch com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.":' );
// ?

/*
Crie uma expressão regular que faça o match com a abertura de uma tag
HTML qualquer.
Ex.: "<div>", "<section>", "<blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><section><blockquote>Texto <img /></blockquote></section></div>"
O resultado deve ser:
["<div>", "<section>", "<blockquote>"]
*/
console.log( '\nMatch com a abertura de uma tag HTML:' );
// ?

/*
Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
com a abertura e fechamento da tag.
Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
Use o método match e faça o teste com a marcação abaixo:
"<div><ul><li></li><li></li><li><span></span></li></ul></div>"
O resultado deve ser:
["<li></li>", "<li></li>", "<span></span>"]
*/
console.log( '\nMatch com tags HTML vazias (abertura e fechamento da tag):' );
// ?

/*
Vamos complicar um pouco agora :D
Crie uma expressão regular que faça o match com um texto existente dentro de
uma tag HTML. O texto deve ser capturado e substituído por:
'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'
Use a marcação abaixo para fazer o replace:
"<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"
A marcação deve permanecer como está, somente o texto deve ser substituído.
No replace, utilize quebras de linha para deixar uma tag por linha.
O resultado deve ser esse:
<h1>O texto dentro da tag "h1" é "Título da página"</h1>
<p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
<footer>O texto dentro da tag "footer" é "Rodapé"</footer>
Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
https://regex101.com/#javascript e verifique se as capturas estão
corretas, para depois aplicar no código ;)
*/
console.log( '\nFazer replace dos textos das tags:' );
// ?




Desafio da semana #19

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Crie um arquivo index.html e adicione esse script à ele.
*/

/*
Alguns detalhes importantes que faltou falar na aula:
1. O objeto RegExp() pode receber um segundo parâmetro, que são as flags:
- var justNumbersAndLetters = new RegExp( '[\\da-z]', 'gi' );
2. Como a expressão regular passada para o objeto RegExp() é uma string,
ela pode ser concatenada para gerar uma regex em tempo de execução,
diferente da regex literal, onde toda a regex precisa estar pronta antes
da utilização.
*/

/*
- Usando o construtor de Regex, crie uma regex que case somente com números
no início da string. O match precisa ser feito para todas as
correspondências de qualquer string, não somente para a primeira, ainda que
esta tenha muitas linhas, deve sempre casar com números no início de cada
linha, independente de quantos caracteres de número estiverem juntos.
- Atribua essa regex à uma variável chamada `justNumbersRegex` e mostre-a
no console:
*/
console.log( 'Regex para números usando o construtor:' );
// ?

/*
Verifique se a regex acima casa com o texto na variável `text`, mostrando o
resultado no console. O resultado deve ser:
"[ '10', '50' ]"
*/
var text = '10 anos.\n50 discos vendidos.\nE nem 10% dos meus amigos o conhece.';
console.log( '\nNúmeros no início da linha do texto:\n' + text, '\n' );
// ?

/*
- Crie uma regex que case com números no final de uma string. Atribua a
regex à uma variável chamada `numbersAtTheEnd`.
- A regex deve casar com todas as correspondências de qualquer string, ainda
que esta tenha muitas linhas, deve sempre casar com números no fim de cada
linha, independente de quantos caracteres de número estiverem juntos.
Mostre a regex no console:
*/
console.log( '\nRegex para números somente no final das linhas:' );
// ?

/*
Verifique se a regex acima casa com o texto na variável `otherText`,
mostrando o resultado no console.
O resultado deve ser:
"[ '12', '6' ]"
*/
var otherText = 'Silvio Santos, nome artístico de Senor Abravanel (Rio de Janeiro, 12\n de dezembro de 1930), é um apresentador de televisão e empresário brasileiro.\n Proprietário do Grupo Silvio Santos, que inclui empresas como a Liderança\n Capitalização (administradora da loteria Tele Sena), a Jequiti Cosméticos e o\n Sistema Brasileiro de Televisão (mais conhecido como SBT), Silvio Santos possui\n um patrimônio avaliado em aproximadamente 6\n bilhões de reais.';
console.log( '\nNúmeros no final da linha:\n\n', otherText, '\n' );
// ?

/*
Vamos criar um método que vai testar se uma classe CSS existe em uma
marcação HTML.
- Primeiro, crie uma função chamada `hasClass`;
- Essa função receberá dois parâmetros: o primeiro chamado `markup`, que
será a marcação HTML testada, e o segundo `cssClass`, que será a classe que
iremos testar;
- A função deve retornar `true` se a classe existir na marcação e `false`
caso contrário;
- A marcação usada para testar deve ser a que está na variável `markup`
abaixo;
- Não altere a marcação na variável markup!
- Faça o teste, mostrando no console o resultado para as seguintes classes:
- "container", "text", "date", "excerpt" e "main".
- O console deve exibir a frase:
"[RESULTADO] para a classe [CLASSE]"
- Ex. de resposta:
"true para a classe container"
- Teste uma classe por vez (um console.log por classe).
- Lembrando que a função deve funcionar para qualquer marcação HTML e para
qualquer classe que for testada. Os dados passados no exercício são somente
para exemplificar.
*/
var markup = '<main>\n  <div class="container">\n    <span class="text date"></span>\n    <p class=\'excerpt\'></p>\n  </div>\n</main>';
console.log( '\nQuais classes CSS existem na marcação abaixo?\n\n', markup, '\n' );
// ?





Desafio da semana #20

/*
1. Envolva todo o conteúdo desse desafio em uma IIFE.
2. Adicione a diretiva 'use strict';
3. Passe por parâmetro para a IIFE os objetos window e document.
4. Dessa vez não é necessário criar um HTML. Ele já existe, e vamos utilizar
a marcação criada nele para fazer nosso desafio ;)
O HTML NÃO PODE ser alterado!
*/

/*
Ao carregar a página, pergunte ao usuário "Qual o seu nome?". Atribua o
resultado à uma variável chamada `username`. Se o usuário não digitar um
nome, `username` deve receber "Desconhecido".
Com a resposta, mostre um alert com a mensagem "Bem vindo [USERNAME]!"
*/
// ?

/*
Agora, pergunte ao usuário "Qual o seu e-mail?", atribuindo o resultado à
uma variável chamada `email`.
*/
// ?

/*
- Selecione o input de "Nome", atribuindo-o à uma variável chamada
`$inputUsername`.
*/
// ?

/*
- Selecione o input de "Email", atribuindo-o à uma variável chamada
`$inputEmail`.
*/
// ?

/*
- Selecione o campo de "Mensagem", atribuindo-o à uma variável chamada
`$message`.
*/
// ?

/*
- Selecione o botão de envio do formulário, atribuindo-o à uma variável
chamada `$button`.
*/
// ?

/*
Preencha os campos de "Nome" e "Email" que estão no documento com os valores
entrados pelo usuário.
*/
// ?

/*
Adicione um listener de evento de click ao botão que faça o seguinte:
1. Verificar se todos os campos estão preenchidos:
- Mostrar um alert para cada campo não preenchido, como abaixo:
- Se o campo de "Nome" não estiver preenchido, mostrar:
    - "Preencha o nome do usuário!"
- Se o campo de "Email" não estiver preenchido, mostrar:
    - "Preencha o e-mail!"
- Se o campo de "Mensagem" não estiver preenchido, mostrar:
    - "Preencha a mensagem!"
- Se o campo de "Email" for inválido, mostrar:
    - "Entre com um e-mail válido!"
2. Para verificar se o e-mail é válido use a função `isValidEmail`, passando
o e-mail que foi entrado no campo de "Email" por parâmetro. (A função
`isValidEmail` será criada logo abaixo).
3. Se tudo estiver OK, pergunte ao usuário:
    - "Tem certeza que deseja enviar o formulário?"
Se for confirmado, mostre um alerta com a mensagem:
    - "Enviado com sucesso!"
Caso contrário, mostre um alerta com a mensagem:
    - "Não enviado."
*/
// ?

/*
Crie uma função chamada `isValidEmail`, que será usada na validação do
envio do formulário.
Essa função deve receber o e-mail por parâmetro e verificar se é um e-mail
válido.
As regras para validação são:
    - O nome do usuário (antes do arroba), pode ser qualquer caractere
    alfanumérico, incluindo o underscore, sinal de "+" e o ponto;
    - Após o arroba, o domínio pode conter somente caracteres alfanuméricos
    e o underscore;
    - Para a extensão, o domínio deve vir seguido de um ponto, e no mínimo
    2 caracteres alfanuméricos;
    - O final do domínio é opcional, mas se existir, deve começar com um
    ponto, seguido de no máximo 2 caracteres alfanuméricos.
Alguns e-mails válidos que podem ser usados para testar:
    - "meu.email+categoria@gmail.com"
    - "juca_malandro@bol.com.br"
    - "pedrobala@hotmail.uy"
    - "sandro@culinaria.dahora"
Alguns e-mails inválidos:
    - "walter-da-silva@maraca.br"
    - "rita-marica@titica.a.b"
    - "agua_@evida.br.com"
*/
// ?


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Challenge 20</title>
    <style>
        body { font-family: sans-serif }
        label { display: block }
        input { margin-bottom: 10px }
    </style>
</head>
<body>
    <form action="." method="get">
        <div>
            <label>Nome:</label>
            <input type="text" />
        </div>

        <div>
            <label>E-mail:</label>
            <input type="email" />
        </div>

        <div>
            <label>Mensagem</label>
            <textarea cols="30" rows="10"></textarea>
        </div>

        <div>
            <button type="submit">Enviar</button>
        </div>
    </form>

    <script src="challenge-20.js"></script>
</body>
</html>








Desafio da semana #21


/*
O desafio de hoje será um pequeno projeto: um cronômetro!
As regras para criação do cronômetro são as seguintes:
1. Crie um arquivo index.html e adicione esse script a ele;
2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero).
Ele será o nosso cronômetro;
3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset;
4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
cada segundo;
5. Ao clicar em Stop, o cronômetro deve parar de contar;
6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.
Utilize o atributo data-js para nomear o campo e os botões. Você pode
usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
*/
// ?




Desafio da semana #22

 /*
  Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
  `name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
  */
  // ?

  /*
  Agora crie uma função chamada `getFullName` que retorne as propriedades
  `name` e `lastName` dos objetos acima, formando um nome completo.
  A função não deve receber nenhum parâmetro, mas as propriedades `name` e
  `lastName` devem ser dinâmicas.
  A mesma função deve servir para as duas pessoas (ou qualquer outra que for
  criada).
  Depois disso, invoque essa função, mostrando no console o nome completo das
  pessoas que foram criadas anteriormente, passando as pessoas acima como
  contexto da função. Use um console.log por pessoa.
  */
  console.log( 'O nome das pessoas é:' );
  // ?

  /*
  Crie uma função chamada `sum`. Essa função pode receber uma lista de
  parâmetros variável, e deverá retornar a soma de todos eles.
  Não use estruturas de repetição para somar os argumentos.
  Na primeira linha, dentro da função, deixe um console.log para mostrar todos
  os parâmetros passados para essa função.
  */
  // ?

  /*
  Mostre no console que a função acima funciona, invocando-a em 3 console.log
  diferentes, com quantidades variáveis de parâmetros passados.
  */
  console.log( '\nSomar alguns números:' );
  // ?

  /*
  Declare uma variável chamada `userEntry`, que irá receber alguns valores
  entrados pelo usuário. Mostre para o usuário a seguinte frase:
  "Entre com alguns números que serão somados:"
  */
  // ?

  /*
  Mostre no console o valor entrado pelo usuário:
  */
  console.log( '\nEntrada do usuário:' );
  // ?

  /*
  Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
  e remove tudo o que não for número, retornando um array somente com os números
  da string. Mostre a representação em string dessa função no console.
  */
  console.log( '\nFunção que limpa entrada do usuário (somente números):' );
  // ?

  /*
  Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
  atribuindo o resultado à uma variável `numbers`.
  */
  console.log( '\nEntrada do usuário limpa. Somente números:' );
  // ?

  /*
  Agora com o array de números, utilize a função `sum` para somar todos os
  números desse array e mostre o resultado no console.
  */
  console.log( '\nSomar números entrados pelo usuário:' );
  // ?



Desafio da semana #23


/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/



Desafio da semana #24


/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.
- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

Array.prototype.forEach.call($buttonsNumbers, function(button) {
  button.addEventListener('click', handleClickNumber, false);
});
Array.prototype.forEach.call($buttonsOperations, function(button) {
  button.addEventListener('click', handleClickOperation, false);
});
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = 0;
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.split('').pop();
  return operations.some(function(operator) {
    return operator === lastItem;
  });
}

function removeLastItemIfItIsAnOperator(number) {
  if(isLastItemAnOperation(number)) {
    return number.slice(0, -1);
  }
  return number;
}

function handleClickEqual() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  var allValues = $visor.value.match(/\d+[+x÷-]?/g);
  $visor.value = allValues.reduce(function(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operator = accumulated.split('').pop();
    var lastValue = removeLastItemIfItIsAnOperator(actual);
    var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
    switch(operator) {
      case '+':
        return ( Number(firstValue) + Number(lastValue) ) + lastOperator;
      case '-':
        return ( Number(firstValue) - Number(lastValue) ) + lastOperator;
      case 'x':
        return ( Number(firstValue) * Number(lastValue) ) + lastOperator;
      case '÷':
        return ( Number(firstValue) / Number(lastValue) ) + lastOperator;
    }
  });
}


<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Challenge 24 - Calculator</title>
</head>
<body>
  <input type="text" value="0" readonly data-js="visor">
  <div class="buttons-numbers">
    <button data-js="button-number" value="0">0</button>
    <button data-js="button-number" value="1">1</button>
    <button data-js="button-number" value="2">2</button>
    <button data-js="button-number" value="3">3</button>
    <button data-js="button-number" value="4">4</button>
    <button data-js="button-number" value="5">5</button>
    <button data-js="button-number" value="6">6</button>
    <button data-js="button-number" value="7">7</button>
    <button data-js="button-number" value="8">8</button>
    <button data-js="button-number" value="9">9</button>
  </div>

  <div class="operations">
    <button data-js="button-operation" value="+">+</button>
    <button data-js="button-operation" value="-">-</button>
    <button data-js="button-operation" value="x">x</button>
    <button data-js="button-operation" value="÷">÷</button>
    <button data-js="button-equal" value="=">=</button>
    <button data-js="button-ce" value="ce">CE</button>
  </div>

  <script src="challenge-24.js"></script>
</body>
</html>





Desafio da semana #25


/*
Essa semana você terá dois desafios:
1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
o que não ficou tão claro das aulas anteriores.
É essencial que você entenda todo o conteúdo que foi passado até aqui,
para que possamos prosseguir para a parte mais avançada do curso :D
2) Estudar eventos!
Acesse a página do MDN:
https://developer.mozilla.org/en-US/docs/Web/Events#Categories
Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
desafio os experimentos legais que você conseguir desenvolver :D
*/




Desafio da semana #26



/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!
Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.
Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/
// ?

var $a = new DOM('[data-js="link"]');
$a.on('click', function(e) {
  e.preventDefault();
  console.log('clicou');
});

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <a data-js="link" href="">Link 1</a>
  <a data-js="link" href="">Link 2</a>

  <script src="challenge-26.js"></script>
</body>
</html>





Desafio da semana #27

/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/






Desafio da semana #28


/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
  */






Desafio da semana #29


(function() {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"
  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.
  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.
  Essas informações devem ser adicionadas no HTML via Ajax.
  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.
  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

})();



//ficheiro a parte - company.json
{
  "name": "Your company name",
  "phone": "(11) 3333-2222"
}





Desafio da semana #30


/*
A loja de carros será nosso desafio final. Na aula anterior, você fez a parte
do cadastro dos carros. Agora nós vamos começar a deixar ele com cara de
projeto mesmo.
Crie um novo repositório na sua conta do GitHub, com o nome do seu projeto.
Na hora de criar, o GitHub te dá a opção de criar o repositório com um
README. Use essa opção.
Após criar o repositório, clone ele na sua máquina.
Crie uma nova branch chamada `challenge-30`, e copie tudo o que foi feito no
desafio da aula anterior para esse novo repositório, nessa branch
`challenge-30`.
Adicione um arquivo na raiz desse novo repositório chamado `.gitignore`.
O conteúdeo desse arquivo deve ser somente as duas linhas abaixo:
node_modules
npm-debug.log
Faça as melhorias que você achar que são necessárias no seu código, removendo
duplicações, deixando-o o mais legível possível, e então suba essa alteração
para o repositório do seu projeto.
Envie um pull request da branch `challenge-30` para a `master` e cole aqui
nesse arquivo, dentro do `console.log`, o link para o pull request no seu
projeto.
*/

console.log('Link do pull request do seu projeto');






Desafio da semana #31
// projeto tem um conjunto de ficheiros js + json a parte, ver no challange 31

/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.
Ao clicar nesse botão, a linha da tabela deve ser removida.
Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.
Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

console.log('Link do pull request do seu projeto');




Desafio da semana #32
// projeto tem um conjunto de ficheiros js + json a parte, ver no challange 32

/*
Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
salvando-os temporariamente na memória de um servidor.
Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
que possamos utilizar para salvar as informações dos nossos carros.
Para utilizá-lo, você vai precisar fazer o seguinte:
- Via terminal, acesse o diretório `server`;
- execute o comando `npm install` para instalar as dependências;
- execute `node app.js` para iniciar o servidor.
Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
`http://localhost:3000`
O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
As mudanças que você irá precisar fazer no seu projeto são:
- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
`http://localhost:3000/car`
- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
os seguintes campos:
  - `image` com a URL da imagem do carro;
  - `brandModel`, com a marca e modelo do carro;
  - `year`, com o ano do carro;
  - `plate`, com a placa do carro;
  - `color`, com a cor do carro.
Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.
Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
do pull request.
*/
console.log('Link do pull request do seu projeto');





Desafio da semana #33

// projeto tem um conjunto de ficheiros js + json a parte, ver no challange 33

/*
Hora de finalizar nosso projeto!
Já temos o cadastro funcionando e persistindo em memória;
Já estamos deletando o carro da tabela (no frontend).
Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
removido da tabela e também seja deletado do servidor.
Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
que você faz o POST para cadastrar o carro:
`http://localhost:3000/car`, só que, ao invés de enviar todas as informações
do carro, como você faz para cadastrar, você deve enviar somente a placa
do carro.
Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.
A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
do desafio anterior, com a diferença que, nesse desafio, nós temos a
implementação da regra para a deleção do carro =)
A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
repositório do GitHub, e envie o pull request para lá.
Depois, envie um pull request no repositório do curso, colocando no console.log
abaixo a URL do pull request no seu repositório.
*/
console.log('Link do pull request do seu projeto');



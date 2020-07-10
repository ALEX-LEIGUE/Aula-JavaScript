/* TRABALHANDO COM FUNCÕES DE BOTÃO

function clicouSim(){
    document.getElementById("entrar").innerHTML = "<b><p>OBRIGADO</p><p>SEJA BEM-VINDO(A)</b>";
    //alert("Obrigado! Você será redirecionado");
    //window.location.href = "https://www.google.com.br/"; // abre o site na mesma janela
}
    console.log(document.getElementById("entrar"));
}

function clicouNao(){
    document.getElementById("sair").innerHTML = "<p>DESCULPE</p><p>NÃO SERÁ POSSÍVEL ACESSAR O SITE";


    console.log(document.getElementById("sair"));
}

function redirecionar(){
    //window.open("https://www.google.com.br/"); // abre o site em outra janela
    window.location.href = "https://www.google.com.br/"; // abre o site na mesma janela
}
*/


// TRABALHANDO COM FUNCÇÕES DO MOUSE
function mudar(){
    document.getElementById("mousemove").innerHTML= "Obrigado por passar o mouse";
    
}
function voltar(){
    document.getElementById("mousemove").innerHTML= "Passe o mouse aqui";
    
}

function mudar2(Element){
    Element.innerHTML= "Obrigado por passar o mouse";
}
function voltar2(Element){
    Element.innerHTML= "Passe o mouse aqui";
    
}

function alterar(Element){
    console.log(Element.value);
    
}


/* CRIANDO FUNÇÕES

function soma(n1, n2) {
    return n1+n2
}
console.log (soma(5,10));

//var frase = prompt();


var idade = prompt("Qual sua idade?");

function validarIdade(){
if (idade >= 18){
    return("Seja Bem-vindo");
}else{
    return("Desculpe! Você não tem idade para acessar o site");
};

}
console.log(validarIdade());
alert(validarIdade());
*/


/* TRABALHANDO COM DATAS
var d= new Date; // instanciar data
//alert (d.getMonth()); // trazer apenas mes
//alert (d.getHours()); // trazer apenas horas
console.log (d.getMonth()+1);
console.log (d.getDate());
console.log (d.getDate() + "/" + (d.getMonth()+1));

*/


/* REPETIÇÃO COM "FOR"
var count;

for(count = 0; count <= 5; count ++){
    
    console.log (count);
    alert (count);
};
*/


/* REPETIÇÃO COM "WHILE"
var count = 0;
while(count <=5){
    console.log (count);
    alert (count);
    //count=count+1;
    count++;
};
*/

/* CONDICIONAL
var idade = prompt("Qual a sua idade?");

if(idade >= 18){
    alert("Maior de idade");
}else {
    alert("Menor de idade");
};
*/


/* VARIAVEL DE LISTA
var frutas = [{nome:"Maça",cor: "vermelha"}, {nome: "Uva",cor:"roxa"},{nome: "Pêra",cor:"amarela"}];

console.log (frutas[1].nome);
alert (frutas[1].nome);
console.log (fruta.cor);
*/

/*
var fruta = {nome: "Maça" , cor: "vermelha"};

console.log (fruta.nome);
alert (fruta.cor);
console.log (fruta.cor);
*/

/*
var lista = ["maça", "Pêra", "laranja"];
lista.push ("uva"); // incluir item a uma lista
//lista.pop(); // excluir item em uma lista
console.log (lista);
console.log (lista.toString()); // transformar uma variavel lista em string
console.log (lista.toString()[0]); 
console.log (lista.join(" | ")); // inserir caracteres a uma lista
console.log (lista.reverse()); // reverte a ordem da lista
*/


/*
var nome = "Alexon Leigue";
var idade = 38
var idade2 = 10
var frase = "O Japão é o melhor time do mundo"
//alert(nome+" tem "+ idade + " anos");
//alert(idade + idade2);
console.log (frase.replace("Japão","Brasil")); // substitui string em uma variavel
console.log (frase.toUpperCase()); // trasnforma tudo em maiusculas
console.log (frase.toLowerCase()); // trasnforma tudo em minúsculas
*/
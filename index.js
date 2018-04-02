function sayHello() {
    console.log("Olá Mundo!")
}

function sayName() {
    var nome = "francisco";
    console.log("Olá" +" " + nome)
}

function calculaArea() {
    var a = 5;
    var b = 8;
    var area = a * b;
    console.log("A àrea é" + " " + area)
}

function calculadora(){
    var operador = prompt("escolha o operador")
    var num = prompt("escreva um numero:")
    var num1 = prompt("escreva outro numero")
    

    if(operador == "+") {
        console.log(parseInt(num) + parseInt(num1))
    }
    else if(operador == "-") {
        console.log(parseInt(num) - parseInt(num1))
    }
    else if(operador == "*"){
        console.log(parseInt(num) * parseInt(num1))
    }
   else if(operador == "/") {
        console.log(parseInt(num) / parseInt(num1))
    }
    else {
        console.log("insira um operador correto")
    }

    
    }

    function imc() {
        var altura = prompt("Digite a sua altura :")
        var peso = prompt("Digite o seu peso :")
        var imca = peso / (altura * altura)

        console.log("O seu IMC é " + " " + imca)
   


}


function eco(){
    var numero = prompt("Digite um numero :")
    var vezes = prompt("Digite o numero de vezes que quer que se repita")

    for(var i = 0; i < vezes; i++) {
        console.log(numero)
    }
}

function intervalo() {
    var num1 = prompt("Digite um numero :")
    var num2 = prompt("Digite outro numero maior que o primeiro:")

    for(var i = num1; i < num2; i++ ) {

        console.log(i)

    }
}

function tabuada() {
    var num = prompt("Tabuada do numero :")

    for(var i = 0; i <= 10; i++){

        res = num * i;
        console.log(num + "*" + i + "=" + res)
    }
}

function multiplos() {
    var num1 = parseInt(prompt("Escreva um número"))
    var num2 = parseInt(prompt("Escreva um número"))
    var numeros = [];
    var soma = 0;
   


    for(var i = num1; i <= num2; i++) {
        
         if(i % 3 === 0) {
            numeros.push(i) 
            soma += i
         }
    }

    console.log(soma)
    
}

function primo() {
    let n = parseInt(prompt("Escreva um número"))
    let primo = true

    for (let i = 2; i < n; i++) {
        if(n % i == 0) {
            primo = false
        }        
    }    
    let result = primo ? "SIM" : "NÃO"
    console.log(result)
   
      
 }

function fatorial() {
    let numero = parseInt(prompt("Escreva um número"))
    let res = 1

    for(let i = numero; i > 0; i--) {
       res = res * i
        
    }
    console.log("O fatorial de" + " " + numero + " " + "é:" + res)
}

function perfeito(){
    let number = parseInt(prompt("Escreva um número"))
    let ver = 0

    for(let i = 1; i < number; i++) {
        if(number % i == 0) {
            ver += i
            
        }
       
       
    }
    if(ver == number) {
        console.log("sim" )
    }
    else {
        console.log("nao")
    }
    
    

}




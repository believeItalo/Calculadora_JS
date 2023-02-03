console.log('Sistema de Cálculo');

const { parse } = require('path');
const { stdin, stdout } = require('process');


var readline = require('readline');


var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDados.question('Digite o valor1 : \n', function (valor1) {

    //função de callback
    let PrimeiroValor = parseFloat(valor1.replace(",", "."));


    entradaDados.question('Digite o Operador : \n ', function (operador) {

        let tipoDoOperador = operador;

        entradaDados.question('Digite o valor2 : \n ', function (valor2) {

            let SegundoValor = parseFloat(valor2.replace(",", "."));
           
            
            if(PrimeiroValor == ' ' || SegundoValor == ' ' || isNaN(PrimeiroValor) || isNaN(SegundoValor)){
                console.log("Erro, valores incorretos");
            }
            else if (operador === '-') {
                let resultado = PrimeiroValor-SegundoValor
                console.log(resultado);
            }
            else if(operador === '/') {
                let resultado = PrimeiroValor/SegundoValor
                console.log(resultado);
            }
            else if (operador === 'x') {
                let resultado = PrimeiroValor*SegundoValor
                console.log(resultado);
            }
            else if(operador == '+'){
                let resultado = PrimeiroValor + SegundoValor
                console.log(resultado);
            }   
            else{
                console.log("erro, operador incorreto!");
            }
})
}
)
}
)


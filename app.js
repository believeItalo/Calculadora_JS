console.log('Sistema de Cálculo');

const { stdin, stdout } = require('process');


var readline = require('readline');


var entradaDados = readline.createInterface({

    input: process.stdin,
    output: process.stdout

})


entradaDados.question('Digite o valor1 : \n', function (valor1) {

    //função de callback
    let PrimeiroValor = Number(valor1);

    entradaDados.question('Digite o Operador : \n ', function (operador) {

        let tipoDoOperador = operador;

        entradaDados.question('Digite o valor2 : \n ', function (valor2) {

            let SegundoValor = Number(valor2);


            
            if(valor1 == ' ' || valor2 == ' ' || isNaN(valor1) || isNaN(valor2)){
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


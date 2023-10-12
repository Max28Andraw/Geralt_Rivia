//Un Callback es llamar una Funcion que llama otra Funcion
function sum(num1, num2){
    return num1 + num2;
}

function cal(num1, num2, callback){
    console.log(callback(num1, num2));
}

cal(2, 2, sum);

//Esto tambien es un Callback pero adentro es una Funcion anonima
setTimeout(function () {
    console.log('Hola mundo')
}, 2000);
//Esto tambien es otra forma
function salu(name){
    console.log(`Hola ${name}`);
}
//(funcion, tiempo, parametros de la funcion)
setTimeout(salu, 5000, 'Juan');
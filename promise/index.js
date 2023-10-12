const vacas = 1;

const contadorvacas = new Promise(function (resolve, reject){
    if (vacas > 10){
        resolve (`Tienes las vacas nesesarias, tienes ${vacas}`);
    }else {
        reject("Nesesitas mas vacas");
    }
});

contadorvacas.then((resultado)=> {
    console.log(resultado);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finalizo'))

const fs = require('fs');
var colors = require('colors');
const crearArchivo = async(value = 5, listar = false, hasta = 10) => {
    try{
 
        let salida, consola = '';
        for (let i = 1; i <= hasta; i++) {   
           salida += (`${value} ${'x'.green} ${i} ${'='.green} ${value * i}\n`);
           consola += (`${value} x ${i} = ${value * i}\n`);
        }
        if(listar){
            console.log(colors.green("============================="));
            console.log(colors.blue(`        Tabla del ${value}`.blue));
            console.log(colors.green("=============================")); 
            console.log(salida);
        }        
        fs.writeFileSync(`./salida/tabla-${value}.txt`, consola);
        return `tabla-${value}.txt`;  
    }catch(error){
        throw error;
    }  
}

module.exports = {
    crearArchivo
}
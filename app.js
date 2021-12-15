const {crearArchivo} = require('./helpers/multiplicar')
var colors = require('colors');
const argv = require('./config/yargs')
console.clear();


// const [,,arg3 = 'base = 5'] = process.argv;
// const [, base = 5] = arg3.split('=')

// const base = 3;

// console.log(base);

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(colors.rainbow(nombreArchivo + " creado")))
.catch(err => console.log(err));

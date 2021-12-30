let nombreUsuario = '';

//si el usuario tiene nombre, sera saludado con su nombre de lo contrario solo dira Hola
nombreUsuario !== '' ? console.log(`Hola, ${userName}`) : console.log('Hola!');

const preguntaDelUsuario = '¿Me convertire en hombre lobo esta noche?';
console.log(`El usuario pregunto: ${preguntaDelUsuario}`);

let numeroRandom = Math.floor(Math.random() * 8);

let BolaOcho = '';

switch(numeroRandom){
    case 0: 
        BolaOcho = 'Es cierto';
        break;
    case 1:
        BolaOcho = 'Es decididamente así';
        break;
    case 2:
        BolaOcho = 'Respuesta brumosa Inténtalo de nuevo';
        break;
    case 3:
        BolaOcho = 'No se puede predecir ahora';
        break;
    case 4:
        BolaOcho = 'No cuente con ello';
        break;
    case 5:
        BolaOcho = 'Mis fuentes dicen que no';
        break;
    case 6:
        BolaOcho = 'Las perspectivas no son tan buenas';
        break;
    case 7:
        BolaOcho = 'Las señales apuntan a que sí';
        break;
}

console.log(BolaOcho);
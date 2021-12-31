/*Nuestro código dividirá el juego en cuatro partes:

1. Obtenga la elección del usuario.
2. Obtenga la elección de la computadora.
3. Compare las dos opciones y determine un ganador.
4. Inicie el programa y muestre los resultados.*/

const tomarEleccionDelUsuario = entrada => {
    entrada = entrada.toLowerCase();
    if(entrada === 'piedra' || entrada === 'papel' || entrada === 'tijera'){
        return entrada;
    }else{
        console.log('error: esa opcion no existe asegurese de haber colococado piedra, papel o tijera')
    }
}

const tomarEleccionDeLaComputadora = () =>{
    let numeroRandom = Math.floor(Math.random() * 3);
    switch(numeroRandom){
        case 0:
            return 'piedra';
            break;
        case 1:
            return 'papel';
            break;
        case 2:
            return 'tijera';
            break;
    }
}

const determinarUnGanador = (eleccionUsuario, eleccionComputadora) => {
    if(eleccionUsuario === eleccionComputadora){
        return '¡El juego ha sido un empate!'
    }

    if(eleccionUsuario === 'piedra'){
        if(eleccionComputadora === 'papel'){
            return '¡La computadora gano!';
        }else{
            return '¡El juagador gano!'
        }
    }

    if(eleccionUsuario === 'papel'){
        if(eleccionComputadora === 'tijera'){
            return '¡La computadora gano!';
        }else{
            return '¡El juagador gano!'
        }
    }

    if(eleccionUsuario === 'tijera'){
        if(eleccionComputadora === 'piedra'){
            return '¡La computadora gano!';
        }else{
            return '¡El juagador gano!'
        }
    }
}

const jugar = () =>{
    eleccionUsuario = tomarEleccionDelUsuario('papel');
    eleccionComputadora = tomarEleccionDeLaComputadora();
    console.log(`el jugador eligio: ${eleccionUsuario}, la computadora eligio: ${eleccionComputadora}.`);

    console.log(determinarUnGanador(eleccionUsuario, eleccionComputadora));
}

jugar();
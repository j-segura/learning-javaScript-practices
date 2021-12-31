/* Contexto: la empresa para la que trabaja sospecha que los distribuidores de tarjetas de crédito han enviado tarjetas con números no válidos. En este proyecto, tienes el papel de un empleado que verifica si las tarjetas de crédito son válidas. Todos los demás empleados verifican actualmente con lápiz y papel, pero optimizará el proceso de verificación utilizando su conocimiento de las funciones y los bucles para manejar varias tarjetas de crédito a la vez. A diferencia de los otros empleados, ¡puedes pasar el resto de tu tiempo relajándote! */

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

const prueva = [4, 5, 3, 9, 6, 8, 9, 8, 8, 7, 7, 0, 5, 7, 9, 8];
// Add your functions below:
const validateCred = card => {
  let suma = 0;
  let suma2 = 0;
  for(let i = card.length - 2; i >= 0; i = i - 2){
    let num = card[i] * 2;
    if(num > 9){
      num = num - 9;
    };
    suma = suma + num;
  };
  for(let i = card.length - 1; i >= 0; i = i - 2){
    let num = card[i];
    suma2 = suma2 + num;
  };
  let modSuma = (suma + suma2)%10;
  if(modSuma === 0){
    return false;
  }else{
    return true;
  }
}


const findInvalidCards = arr => {
  const noValidas = arr.filter(validateCred);
  console.log(noValidas)
  return noValidas;
}

const idInvalidCardCompanies = arr => {
  const companies = []
  let amex = 0;
  let visa = 0;
  let masterCard = 0;
  let descubrir = 0;

  for(let i = 0; i < arr.length; i++){
    let n = arr[i][0];
    switch(n){
      case 3:
        amex++;
        break;
      case 4:
        visa++;
        break;
      case 5:
        masterCard++;
        break;
      case 6:
        descubrir++;
        break;
      default:
        console.log('Compañía no encontrada');
        break;
    };
  }
  if(amex > 0){
    companies.push('Amex (American Express)');
  };
  if(visa > 0){
    companies.push('Visa');
  };
  if(masterCard > 0){
    companies.push('Tarjeta MasterCard');
  };
  if(descubrir > 0){
    companies.push('Descubrir');
  };
  return companies;
}
console.log(idInvalidCardCompanies(findInvalidCards(batch)));

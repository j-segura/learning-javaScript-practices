const input = 'hola mi nombre es juan';
const vawels = ['a','e','i','o','u'];
const resultArray = [];
for(let i = 0; i < input.length;i++){
  for(let j = 0;j < vawels.length;j++){
    if(input[i] === vawels[j]){
      resultArray.push(input[i]);
    }
  }
  if(input[i] === 'e'){
    resultArray.push(input[i]);
  }
  if(input[i] === 'u'){
    resultArray.push(input[i]);
  }
}
console.log(resultArray.join('').toUpperCase());
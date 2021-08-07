//1
function oneThroughTwenty() {
  let lista = [];
  for (let i=1; i<=20; i++){
    lista.push(i);
  }
  return lista;
}
console.log(oneThroughTwenty());

//2 
function evensToTwenty() {
  let lista = [];
  let i=1;
    while (i<=20){
      if (i%2==0){
        lista.push(i);
      }
    i++;
    }
    return lista;
}
console.log(evensToTwenty());

//3
function oddsToTwenty() {
  let lista = [];
  let i=1;
    while (i<=20){
      if (i%2==1){
        lista.push(i);
      }
    i++;  
    }
    return lista; 
}
console.log(oddsToTwenty());

//4
function multiplesOfFive() {
  let lista = [];
  let i=1;
    while (i<=100){
      if (i%5==0){
        lista.push(i);
      }
    i++;  
    }
    return lista;
}
console.log(multiplesOfFive());

//5
function squareNumbers() {
  let lista = [];
  let cont = 0;
  for (let i=1; i<=10; i++){
    lista[cont] = i*i;
    cont++;
  }
  return lista;
}
console.log(squareNumbers());

//6
function countingBackwards() {
  let lista = [];
  for (let i=20; i>=1; i--){
    lista.push(i);
  }
  return lista;
}
console.log(countingBackwards());


//7
function evenNumbersBackwards() {
  let lista = [];
  let i=20;
    while (i>=1){
      if (i%2==0){
        lista.push(i);
      }
    i--;
    }
    return lista;
}
console.log(evenNumbersBackwards());
    
//8
function oddNumbersBackwards() {
  let lista = [];
  let i=20;
    while (i>=1){
      if (i%2==1){
        lista.push(i);
      }
    i--;  
    }
    return lista; 
}
console.log(oddNumbersBackwards());
    
//9
function multiplesOfFiveBackwards() {
  let lista = [];
  let i=100;
    while (i>=1){
      if (i%5==0){
        lista.push(i);
      }
    i--;  
    }
    return lista;
}
console.log(multiplesOfFiveBackwards());

//10
function squareNumbersBackwards() {
  let lista = [];
  let cont = 0;
  for (let i=10; i>=1; i--){
    lista[cont] = i*i;
    cont++;
  }
  return lista;
}
console.log(squareNumbersBackwards());
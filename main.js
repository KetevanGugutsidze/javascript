//home work1 

function CheckEquality(a,b) {
  if (a === b) {
    return 'equals' ;
  
    
  } else {
  return 'not equals';  
  }
  
}
 //console.log(CheckEquality(5,10))
 //console.log(CheckEquality(5,5))
 
 // home work 2
 function fahrenheitToCelsius(temp) {
  if (typeof temp !== 'number') {
    return false;
  }
  return (temp - 32) / 1.8;
}

console.log(fahrenheitToCelsius(38)); 
 
// home work 3

function calculate(a,b,op){
  if (typeof a !== 'number'|| typeof b !==
  'number')
    return false;
  switch (op) {
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    case '/': return a/b;
   default : return false;
    
  }
}
 
console.log(calculate(2, 3, '+'));
console.log(calculate(4, 6, '*')); 
console.log(calculate(7, 8, '/')); 
console.log(calculate(4, 15, '-'));


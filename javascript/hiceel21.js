// 1
  const palindrome = (string)=>
  {  
    const f = string.length;  
   
      for (let i = 0; i < f / 2; i++) {  
  
          if (string[i] !== string[f - 1 - i]) {  
              alert( 'palindrome bish');  
          }else{
              alert ('palindrome mun')
          }   
      } 
  }  
  const string = prompt('toogoo oruulna uu');  
  const value = palindrome(string);  
  console.log(value);  
// 2



// 3
// const add = (a,n) => {
//     return a+n
// }
// console.log (add(30,40))
// 4
// const minus = (a,n) => {
//     return a-n
// }
// console.log (minus(30,15))
// 5
// const multiply = (a,n) => {
//     return a*n
// } 
// console.log(multiply(10,4))
// 6
// const divide = (a,n) => {
//     return a/n
// } 
// console.log(divide(12,3))
// 7
//  const degree = (a,n) => {
//      return a^n
//  }
//  console.log(degree(3,4))
// 8
//   a =prompt("number1");
//   b = prompt("number2");
//   let operator = prompt("choose ur operation (+, -, *, /, ^):");
//   let result;
//   if (operator == '+') {
//      result = a + b;
//  }
//  else if (operator == '-') {
//      result = a - b;
//  }
//  else if (operator == '*') {
//      result = a * b;
//  }
//  else if  (operator == '/'){
//      result = a / b;
//  } else{
//      result = a^b;
//  }
//  console.log(result);

const randomNumber = Math.floor(Math.random() * 100) + 1;
let oroldlogo = 0;

if  (oroldlogo < 5) {
  const guessNumber = prompt("1-100 hoorond sanasan toog taana uu");
  oroldlogo++;
  if (guessNumber < randomNumber) {
    alert("Baga baina! " + oroldlogo + " oroldlogo uldlee.");
  } else if (guessNumber > randomNumber) {
    alert("Ih baina! " + oroldlogo + " oroldlogo uldlee.");
  } else {
    alert("Bayr hurgie! " + oroldlogo + " oroldlogo!");
  } 
  if (oroldlogo === 5) {
    alert("Hojigdloo!");
  }
}
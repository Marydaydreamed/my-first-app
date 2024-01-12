// game
const randomNumber = Math.floor(Math.random() * 100);
let oroldlogo = 5;

console.log(randomNumber);
for (let i = 4; i >=0; i--) {
    const guessedNumber = prompt('1-100 hoorond sanasan toog olno uu');
    console.log(guessedNumber == randomNumber)
if (guessedNumber == randomNumber) {
  alert('Congratulations! ' + oroldlogo + ' oroldlogo!');
  break;
 }
 else if (guessedNumber < randomNumber) {
    oroldlogo= oroldlogo - 1
    alert('Baga bn.'+ oroldlogo + "oroldlogo uldlee");
  }
  else if (guessedNumber > randomNumber){
    oroldlogo= oroldlogo - 1
    alert('Ih bn. ' + oroldlogo + "oroldlogo uldlee");
  }
}
  if(oroldlogo < 5){
    alert ('u lost!');
    
}




// 1
// for (let i = 0; i < 3; i++) {
//     console.log(i);
// }
// // davtalt i=0 uyed
// if (0<3){
//     // 3s ers baga bol console ruu i=0 hevlegdene
//     console.log(0)
// }else{
// // nuhtsul biyelehgui tohioldold davtalt duusna
//     break;
// }
// // davtalt i=1 uyed
// if (1<3){
//     // 3s ers baga bol console ruu i=1 hevlegdene
//     console.log(1)
// }else{
//     // nuhtsul biyelehgui tohioldold davtalt duusna
//     break;
// }
// // davtalt i=2 uyed
// if(2<3){
//     // 3s ers baga bol console ruu i=2 hevlegdene
//     console.log(2)
// }else{
//      // nuhtsul biyelehgui tohioldold davtalt duusna
//     break;
// }
// // davtalt i=2 uyed
// if (3<3){
// // daraah nuhtsul biyelehgui tul davtalt zogsono.
// }
// else{
//     break;
// }

// 2
// const numbers = [1, 2, 3]
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * numbers[i]);
// }
// // i=0 uyed
// if (0<3){
//     // numbers iin urtaas ers baga uyed console ruu 1*1 uildliig hiij 1 gej hevlene
//     console.log(1*1)
//     console.log(1)
// }else{
//     // nuhtsul biylehgui uyed davtalt duusna
//     break;
// }
// // i=1 uyed
// if (1<3){
//     // numbers iin urtaas ers baga uyed console ruu 2*2 uildliig hiij 4 gej hevlene
//     console.log(2*2)
//     console.log(4)
// }else{
//     // nuhtsul biylehgui uyed davtalt duusna
//     break;
// }
// // i=2 uyed
// if (2<3){
//     // numbers iin urtaas ers baga uyed console ruu 3*3 uildliig hiij 9 gej hevlene
//     console.log(3*3)
//     console.log(9)
// }else{
//     // nuhtsul biylehgui uyed davtalt duusna
//     break;
// }
// // i=2 uyed
// if (3<3){
//     // daraah nuhtsul biyelehgui tul davtalt zogsono.
// }else{
//     break;
// }

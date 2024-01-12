// 1
let a = 10
let b = 25
if(a < b)
console.log ('b');
else
console.log('a');

// 2
let m = 2470
if(m%2===0)
console.log ('tegsh');
else
console.log('sondgoi');

// 3
const oldPassword = "oldPassword123";
const newPassword = "newPassword456";
const confirmPassword = "newPassword456";
if (newPassword === confirmPassword) {
    if (oldPassword === "oldPassword123"){
        console.log("Password succesfully changed.");
    }
    else {
        console.log("Incorrect old password");
    }
}
else {
    console.log("New passwords or do not match.");
}

// 4
let dun = 99
if(dun>90){
    console.log ('A');
}
else if (dun>=80){
    console.log ('B');
}
else if (dun>=70){
    console.log ('C');
}
else if (dun>=60){
    console.log ('D');
}
else
console.log ('F');

// 5
const too = 15;
if (typeof too ==='number'){
    if ( too%3===0 &&  too%5===0){
        console.log ('FizzBuzz');
    }
    else if (too%3===0){
        console.log ('Fizz');
    }
    else if (too%5===0){
        console.log ('Buzz');
    }
    else {
        console.log ('input');
    }
}else {
    console.log ('not a number')
}

//6 
let speed = 145 
let maxspeed= 80
let point;
if (speed > maxspeed){
point = parseInt ((speed - maxspeed)/5)
}
if (point > 5){
    console.log (point +'onoo aldsan' + 'erh hasagdsan')
}else 
console.log(point +'onoo aldsan' + 'erh hasagdahgui')

  
 
  
  
  













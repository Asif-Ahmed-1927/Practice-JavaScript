var number= 2.5667

console.log(number.toPrecision(1))
console.log(number.toFixed(1))

console.log(Number(11))

var base= parseFloat (prompt("Enter Base: "));
var height= parseFloat (prompt("Enter Height: "));

var area= (base*height)/2;

document.write("Area: " + area + "<br>");

var farn= parseFloat (prompt("Enter farenheit: "));

var cels= (farn-32)*(5/9);

document.write("Celsius:" + cels + "<br>2");

var cels= parseFloat (prompt("Enter celsius: "));

var farn= (cels*9/5)+32;

document.write("Farenhite:" + farn + "<br>");

var num= 5;

if(num % 2 == 0)

console.log("Even");

else

console.log("Odd");

var marks= prompt("Enter your marks: ")

if(marks>=80)
console.log("A+");
else if(marks>=70)
console.log("A");
else if(marks>=60)
console.log("B+");
else if(marks>=50)
console.log("B");
else if(marks>=40)
console.log("C");
else if(marks>=33)
console.log("D");
else
console.log("Fail");





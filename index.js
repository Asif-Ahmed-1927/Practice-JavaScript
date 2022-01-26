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

//switch//

var digit= prompt("Enter any digit: ");

switch(digit){
    case "0":
        console.log("Zero");
        break;
    case "1":
        console.log("one");
        break;
    case "2":
        console.log("two");
        break;
    case "3":
        console.log("three");
        break;
    case "4":
        console.log("four");
        break;
    case "5":
        console.log("five");
        break;
    case "6":
        console.log("six");
        break;
    case "7":
        console.log("seven");
        break;
    case "8":
        console.log("eight");
        break;
    case "9":
        console.log("nine");
        break;
    default:
        console.log("not a digit");

}

if(digit==0)
console.log("Zero")
else if(digit==1)
console.log("one")
else if(digit==2)
console.log("two")
else if(digit==3)
console.log("three")
else if(digit==4)
console.log("four")
else if(digit==5)
console.log("five")
else if(digit==6)
console.log("six")
else if(digit==7)
console.log("seven")
else if(digit==8)
console.log("eight")
else if(digit==9)
console.log("nine")
else
console.log("Not a digit")

//for loop//

for(var x=1; x<=100; x++){
    document.write("  " + x )
}
document.write("<h1>End</h1>")

var sum=0;

for(var x=1; x<=10; x++){
    sum=sum+x;
}

document.write(sum);

//while loop//
var x=1;

while(x<=10){
    document.write(x);
    x++
}

var i=1;
var sum=0;

while(i<=100){
    if(i%3==0 && i%5==0){
        sum= sum + i;
    }

    i= i + 1;
}
document.write(sum);

//do while loop//

var i= 1;
do{
    document.write(" " + i)
    i++;
}while(i<=20)

//break & continue//

for(var i= 1; i<=100; i++){
    
    document.write(" " + i)
    if(i==10){
        break;
    }
}


for(var i= 1; i<=100; i++){
    if(i==10){
        continue;
    }  
    document.write(" " + i)
}






 







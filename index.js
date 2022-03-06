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

//function//

function sqaure(){
    var num= 5;
    var result= num*num;
    document.write("result: " + result + "<br>")
}
sqaure();

//after prameter//

function sqaure(num){
    var result= num*num;
    document.write("result: " + result+ "<br>")
}

sqaure(5);
sqaure(7);
sqaure(6);

//array//

var names= [];
names[0]="Asif";
names[1]="Sakib";
names[2]="Sayed";
names[3]="Mehedi";
names[4]="Mukul";
document.write(names.length)
names.push("Anika")
document.write(names)
names.pop();
document.write(names);

//array loop//

var num= new Array();

for(var i= 0; i<5; i++){
    num[i]= parseInt(prompt("Enter a number: "))
}

var sum=0;

for(var i=0; i < 5; i++){
    document.write(num[i]);4
    sum= sum + num[i];
}

document.write("sum: " + sum)

//shift//

var names= ["Asif", "Anika" , "Asifa"]
document.write(names);

names.shift();
document.write(names);

names.unshift("sagor");
document.write(names)

//1d array//

function highestScore(scores){
    let max= scores[0];
    for(var x=1; x<scores.length; x++){
        if (max<scores[x]){
            max= scores[x];
        }
    }
    return max;
   

}

var scores= [21,28,1,88,15];
var maxscores= highestScore(scores);
document.write(maxscores);

//cerate and use object//

function student(name,age,cgpa,lang){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.lang=lang;

    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
    }

}

var student1 = new student("Asif",25,3.22,["Bangali","Hindi", "English"]);
var student2 = new student("ksif",23,3.20,["Bangali","Hindi", "English"]);
var student3 = new student("jsif",20,3.26,["Bangali","Hindi", "English"]);

student1.display();
student2.display();
student3.display();

//guessing number//

var numOfwon = 0;
var numOflost= 0;
for(var i=1; i<=5; i++){
    var guessNumber= parseInt(prompt("Enter a number from 1 to 5"));

    var randomNumber= Math.floor(Math.random()*5) + 1;
    
    if(guessNumber==randomNumber){
        document.write("You have won");
        numOfwon++;
    }else{
        document.write("You have lost. Random Number was" + randomNumber);
        numOflost++;
    } 
}

document.write("total no of won= " + numOfwon + "<br>");
document.write("total no of lost= " + numOflost + "<br>");


//query method//

document.querySelector("a").innerHTML = "new text";
document.querySelector("li a").innerHTML = "new text";
document.querySelector("div a").innerHTML = "new text";
document.querySelector(".my-div a").innerHTML = "new text";

//onclick method//
var myvar= document.querySelector("#weid");
function myMessege1(){

    myvar.src= "images/we.jpg";
 
}
function myMessege2(){
    myvar.src= "images/we2.jpg";
}

// find create add html element//









